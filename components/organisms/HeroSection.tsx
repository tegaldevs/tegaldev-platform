'use client';

import { useEffect, useState } from 'react';
import { HeroLogo } from '../atoms/HeroLogo';
import { HeroDescription, HeroDescriptionHighlight } from '../molecules/HeroDescription';
import { HeroSubscriptionForm } from '../molecules/HeroSubscriptionForm';
import { HeroActionButtons } from '../molecules/HeroActionButtons';
import { subscribeEmail } from '@/lib/subscription-service';

export default function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState<string | null>(null);
  const [subscriptionError, setSubscriptionError] = useState<string | null>(null);

  useEffect(() => {
    const timeoutHero = setTimeout(() => setHeroVisible(true), 100);
    return () => {
      clearTimeout(timeoutHero);
    };
  }, []);

  const handleSubscription = async (email: string) => {
    setIsSubscribing(true);
    setSubscriptionMessage(null);
    setSubscriptionError(null);

    try {
      const response = await subscribeEmail(email);
      setSubscriptionMessage(response.message);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubscriptionMessage(null), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Subscription failed';
      setSubscriptionError(errorMessage);
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubscriptionError(null), 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div
      className={
        `max-w-6xl space-y-10 relative z-10 transition-all duration-1000 ease-out ` +
        (heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
      }
    >
      <div className="space-y-12">
        <div className="flex flex-col items-center space-y-8">
          <HeroLogo
            src="/Tegal.dev-AAA.png"
            alt="Tegaldev Logo"
            width={280}
            height={280}
          />
          <div className="space-y-4">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>
        <HeroDescription>
          The curated software engineer community based in{' '}
          <HeroDescriptionHighlight variant="blue">
            Tegal, Central Java, Indonesia.{' '}
          </HeroDescriptionHighlight>
          <HeroDescriptionHighlight variant="white">
            Tegal Dev
          </HeroDescriptionHighlight>{' '}
          is collaborating with various tech communities worldwide.{' '}
          <HeroDescriptionHighlight variant="purple">
            We aim to improve educational activities
          </HeroDescriptionHighlight>{' '}
          and{' '}
          <HeroDescriptionHighlight variant="purple">
            foster innovation in technology.
          </HeroDescriptionHighlight>
        </HeroDescription>
        <HeroSubscriptionForm
          onSubmit={handleSubscription}
          isLoading={isSubscribing}
          successMessage={subscriptionMessage}
          errorMessage={subscriptionError}
        />
      </div>
      <HeroActionButtons />
    </div>
  );
}
