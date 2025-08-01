'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthLayout } from '@/app/_components/ui/AuthLayout';
import { FormField } from '@/app/_components/ui/FormField';
import { LoadingButton } from '@/app/_components/ui/LoadingButton';
import { ErrorAlert } from '@/app/_components/ui/ErrorAlert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { useFormValidation } from '@/app/_hooks/useFormValidation';
import {
  Lock,
  Mail,
  User,
  ArrowRight,
  CheckCircle,
  Github,
} from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { formData, handleInputChange, validateForm } = useFormValidation(
    {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    {
      name: { required: true, minLength: 2 },
      username: { required: true, minLength: 3 },
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      password: {
        required: true,
        minLength: 8,
        custom: (value: string) => {
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            return 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
          }
          return null;
        },
      },
      confirmPassword: {
        required: true,
        custom: (value: string) => {
          if (value !== formData.password) {
            return 'Passwords do not match';
          }
          return null;
        },
      },
    },
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Please fix the errors above.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push(
          '/auth/login?message=Registration successful! Please sign in.',
        );
      }, 2000);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <AuthLayout
        title="Welcome to the Community!"
        subtitle="Your account has been created successfully"
      >
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome to the Community!
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Your account has been created successfully. Redirecting to
                  login...
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Join Our Community"
      subtitle="Connect, collaborate, and grow with fellow software engineers"
    >
      <Card className="shadow-2xl border-0 bg-white/5 backdrop-blur-md hover:shadow-purple-500/10 transition-all duration-300 hover:border-white/20 slide-in">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-3xl font-bold text-center text-white mb-2">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-gray-200 text-sm">
            Start your journey with our software engineer community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <ErrorAlert message={error} />}

            <div className="grid grid-cols-2 gap-4">
              <FormField
                icon={User}
                label="Full Name"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <FormField
                icon={User}
                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <FormField
              icon={Mail}
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <FormField
              icon={Lock}
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleInputChange}
              helperText="Must be 8+ characters with uppercase, lowercase, and number"
              required
            />

            <FormField
              icon={Lock}
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <div className="text-xs text-gray-300 space-y-1 pt-2">
              <p>
                By creating an account, you agree to our{' '}
                <Link
                  href="/terms"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            <LoadingButton
              type="submit"
              isLoading={isLoading}
              loadingText="Creating account..."
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 mt-6"
            >
              <div className="flex items-center space-x-2">
                <span>Create Account</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </LoadingButton>
          </form>

          {/* Social Register */}
          <div className="mt-6">
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 text-gray-300 font-medium bg-black/80 backdrop-blur-sm rounded-md">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                type="button"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                type="button"
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <Link
                href="/auth/login"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors underline decoration-purple-400/50 hover:decoration-purple-300"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Community Benefits */}
      <div className="text-center space-y-4 mt-8 mb-12">
        <p className="text-sm text-gray-200 font-medium">
          What you&apos;ll get as a community member:
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">🚀</span>
            <span>Project Collaboration</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">💡</span>
            <span>Knowledge Sharing</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">🤝</span>
            <span>Networking</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">📚</span>
            <span>Learning Resources</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
