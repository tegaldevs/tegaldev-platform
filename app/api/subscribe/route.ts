import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

// Email validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = subscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Invalid email address',
          details: result.error.issues,
        },
        { status: 400 },
      );
    }

    const { email } = result.data;

    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        {
          error: 'Email already subscribed',
          message: 'This email is already subscribed to our newsletter.',
        },
        { status: 409 },
      );
    }

    // Create new subscriber
    const subscriber = await prisma.subscriber.create({
      data: {
        email,
        subscribedAt: new Date(),
        isActive: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter!',
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Subscription error:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to process subscription. Please try again later.',
      },
      { status: 500 },
    );
  }
}

// GET method to retrieve subscription status (optional)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 },
      );
    }

    const subscriber = await prisma.subscriber.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        subscribedAt: true,
        isActive: true,
      },
    });

    if (!subscriber) {
      return NextResponse.json({ subscribed: false }, { status: 200 });
    }

    return NextResponse.json(
      {
        subscribed: true,
        subscriber,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Subscription check error:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to check subscription status.',
      },
      { status: 500 },
    );
  }
}
