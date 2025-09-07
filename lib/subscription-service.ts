import { z } from 'zod';

// Types for subscription API
export interface SubscriptionResponse {
  success: boolean;
  message: string;
  subscriber?: {
    id: string;
    email: string;
    subscribedAt: string;
  };
  error?: string;
}

export interface SubscriptionError {
  error: string;
  message: string;
  details?: unknown[];
}

// Email validation schema
const emailSchema = z.string().email('Please enter a valid email address');

/**
 * Subscribe an email to the newsletter
 * @param email - The email address to subscribe
 * @returns Promise with subscription result
 */
export async function subscribeEmail(email: string): Promise<SubscriptionResponse> {
  try {
    // Validate email format
    const validatedEmail = emailSchema.parse(email);

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: validatedEmail }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || 'Subscription failed');
    }

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.issues[0]?.message || 'Invalid email format');
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('An unexpected error occurred');
  }
}

/**
 * Check if an email is already subscribed
 * @param email - The email address to check
 * @returns Promise with subscription status
 */
export async function checkSubscriptionStatus(email: string): Promise<{
  subscribed: boolean;
  subscriber?: {
    id: string;
    email: string;
    subscribedAt: string;
    isActive: boolean;
  };
}> {
  try {
    const validatedEmail = emailSchema.parse(email);
    
    const response = await fetch(`/api/subscribe?email=${encodeURIComponent(validatedEmail)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to check subscription status');
    }

    return await response.json();
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.issues[0]?.message || 'Invalid email format');
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('An unexpected error occurred');
  }
}

/**
 * Utility function to handle subscription with proper error handling
 * @param email - The email to subscribe
 * @param onSuccess - Callback for successful subscription
 * @param onError - Callback for subscription errors
 */
export async function handleSubscription(
  email: string,
  onSuccess?: (response: SubscriptionResponse) => void,
  onError?: (error: string) => void
): Promise<void> {
  try {
    const response = await subscribeEmail(email);
    onSuccess?.(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Subscription failed';
    onError?.(errorMessage);
  }
}