'use client';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { LoadingButton } from './LoadingButton';
import { Mail } from 'lucide-react';
import { useState } from 'react';

interface HeroSubscriptionFormProps {
  onSubmit?: (email: string) => void;
  isLoading?: boolean;
  className?: string;
  successMessage?: string | null;
  errorMessage?: string | null;
}

export function HeroSubscriptionForm({ 
  onSubmit, 
  isLoading = false, 
  className = '',
  successMessage,
  errorMessage
}: HeroSubscriptionFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
    }
  };

  return (
    <form
      className={`mt-12 max-w-lg mx-auto flex flex-col gap-2 items-center ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="hero-email" className="sr-only">
          Email address
        </Label>
        <Input
          id="hero-email"
          type="email"
          placeholder="Enter your email to subscribe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
          required
        />
      </div>
      <LoadingButton
        isLoading={isLoading}
        loadingText="Subscribing..."
        type="submit"
        className="w-full h-12 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 rounded-xl text-lg font-semibold"
        icon={Mail}
      >
        Subscribe
      </LoadingButton>
      {successMessage && (
        <div className="w-full mt-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm text-center">
          ✅ {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="w-full mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm text-center">
          ❌ {errorMessage}
        </div>
      )}
      {!successMessage && !errorMessage && (
        <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
          🚀 Stay updated with the latest tech events, workshops, and opportunities
        </p>
      )}
    </form>
  );
}