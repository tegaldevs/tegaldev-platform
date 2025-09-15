import PageLayout from '@/components/layouts/PageLayout';
import ActivitiesSection from '@/components/organisms/ActivitiesSection';
import BlogsSection from '@/components/organisms/BlogsSection';
import CollaborationSection from '@/components/organisms/CollaborationSection';
import CommunityGallerySection from '@/components/organisms/CommunityGallerySection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import { LeaderboardSection } from '@/components/organisms/LeaderboardSection';
import PlatformFeaturesSection from '@/components/organisms/PlatformFeaturesSection';
import PodcastsSection from '@/components/organisms/PodcastsSection';
import VideosSection from '@/components/organisms/VideosSection';

export default function Home() {
  return (
    <PageLayout className='flex flex-col gap-12'>
      <HeroSection />
      <PlatformFeaturesSection />
      <ActivitiesSection />
      <CommunityGallerySection />
      <LeaderboardSection />
      <BlogsSection />
      <PodcastsSection />
      <VideosSection />
      <CollaborationSection />
      <FAQSection />
    </PageLayout>
  );
}
