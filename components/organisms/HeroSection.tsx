'use client';

import { useEffect, useState } from 'react';
import {
  HeroDescription,
  HeroDescriptionHighlight,
} from '../molecules/HeroDescription';
import { HeroActionButtons } from '../molecules/HeroActionButtons';
import { PhotoGalleryGrid } from '../molecules/PhotoGalleryGrid';
import StatsSection from './StatsSection';

export default function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timeoutHero = setTimeout(() => setHeroVisible(true), 100);
    return () => {
      clearTimeout(timeoutHero);
    };
  }, []);

  return (
    <div>
      <div
        className={
          `flex justify-center items-center transition-all duration-1000 ease-out ` +
          (heroVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8')
        }
      >
        <div className="flex-1 pr-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-gray-300 font-bold text-5xl lg:text-6xl leading-tight">
              Software Engineers Community based in Tegal
            </h1>
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
            <div className="mt-4">
              <HeroActionButtons />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <PhotoGalleryGrid />
        </div>
      </div>
      <StatsSection />
    </div>
  );
}
