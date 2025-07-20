import { container } from '@/src/infrastructures/di/container';
import { TYPES } from '@/src/infrastructures/di/types';
import { UserController } from '@/src/interfaces/controllers/UserController';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const userController = container.get<UserController>(TYPES.UserController);

    let requestBody;

    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: true,
          message: 'Invalid JSON format or no request body provided.',
        },
        { status: 400 },
      );
    }

    if (!requestBody || Object.keys(requestBody).length === 0) {
      return NextResponse.json(
        {
          error: true,
          message:
            'Request body cannot be empty. Please provide required fields.',
        },
        { status: 400 },
      );
    }

    const result = await userController.register(requestBody);

    return NextResponse.json(
      { error: false, message: 'User registered successfully', data: result },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: true, message: 'Internal server error' },
      { status: 500 },
    );
  }
}
