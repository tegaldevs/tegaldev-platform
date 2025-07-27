import { BaseException } from '@/src/commons/exceptions/BaseException';
import {
  BadRequestError,
  ValidationError,
} from '@/src/commons/exceptions/ClientError';
import { NextRequest, NextResponse } from 'next/server';

export async function validateRequestBody(
  request: NextRequest,
): Promise<Record<string, unknown>> {
  let requestBody;

  try {
    requestBody = await request.json();
  } catch {
    throw new BadRequestError(
      'Invalid JSON format or no request body provided.',
    );
  }

  if (!requestBody || Object.keys(requestBody).length === 0)
    throw new BadRequestError(
      'Request body cannot be empty. Please provide required fields.',
    );

  return requestBody;
}

export function createErrorResponse(error: unknown): NextResponse {
  if (error instanceof ValidationError)
    return NextResponse.json(
      {
        error: true,
        message: error.message,
      },
      { status: error.statusCode },
    );

  if (error instanceof BaseException)
    return NextResponse.json(
      {
        error: true,
        message: error.message,
      },
      { status: error.statusCode },
    );

  return NextResponse.json(
    { error: true, message: 'Internal server error' },
    { status: 500 },
  );
}

export function createSuccessResponse(
  data: unknown,
  message: string,
  status: number = 200,
): NextResponse {
  return NextResponse.json(
    {
      error: false,
      message,
      data,
    },
    { status },
  );
}
