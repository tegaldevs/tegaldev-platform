'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthLayout } from '@/app/_components/layouts/AuthLayout';
import { FormField } from '@/app/_components/molecules/FormField';
import { LoadingButton } from '@/app/_components/molecules/LoadingButton';
import { ErrorAlert } from '@/app/_components/molecules/ErrorAlert';
import { Button } from '@/app/_components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { useFormValidation } from '@/app/_hooks/useFormValidation';
import { Lock, Mail, ArrowRight, Github } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const { formData, handleInputChange, validateForm } = useFormValidation(
    { credential: '', password: '' },
    {
      credential: { required: true },
      password: { required: true, minLength: 1 },
    },
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        credential: formData.credential,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid credentials. Please try again.');
      } else {
        router.push('/');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to join our thriving community of software engineers"
    >
      <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 slide-in hover:shadow-purple-500/10 transition-all duration-300">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-3xl font-bold text-center text-white mb-2">
            Sign In
          </CardTitle>
          <CardDescription className="text-center text-gray-200 text-sm">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <ErrorAlert message={error} />

            <FormField
              id="credential"
              label="Username, Email, or Phone"
              type="text"
              placeholder="Enter your username, email, or phone"
              value={formData.credential}
              onChange={handleInputChange}
              icon={Mail}
              required
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              icon={Lock}
              required
            />

            <div className="flex items-center justify-between">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <LoadingButton
              type="submit"
              isLoading={isLoading}
              loadingText="Signing in..."
              icon={ArrowRight}
            >
              Sign In
            </LoadingButton>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 text-gray-200 font-medium bg-black/80 backdrop-blur-sm rounded-md">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-11 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                onClick={() => signIn('github')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="h-11 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                onClick={() => signIn('google')}
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

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-200">
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/register"
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors underline decoration-purple-400/50 hover:decoration-purple-300"
              >
                Join our community
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Community Benefits */}
      <div className="text-center space-y-4 mt-8 mb-12">
        <p className="text-sm text-gray-200 font-medium">
          Join 10,000+ software engineers in our community
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">🚀</span>
            <span>Active Projects</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">💡</span>
            <span>Knowledge Sharing</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">🤝</span>
            <span>Collaboration</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 rounded-md p-2 backdrop-blur-sm">
            <span className="text-base">🌟</span>
            <span>Career Growth</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
