import PageLayout from '@/components/layouts/PageLayout';
import ActivitiesSection from '@/components/organisms/ActivitiesSection';
import CollaborationSection from '@/components/organisms/CollaborationSection';
import CommunityGallerySection from '@/components/organisms/CommunityGallerySection';
import CommunityPhotosGallerySection from '@/components/organisms/CommunityPhotosGallerySection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlatformFeaturesSection from '@/components/organisms/PlatformFeaturesSection';
import StatsSection from '@/components/organisms/StatsSection';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <CommunityPhotosGallerySection />
      <PlatformFeaturesSection />
      <ActivitiesSection />
      <CommunityGallerySection />
      <CollaborationSection />
      <StatsSection />
      <FAQSection />
    </PageLayout>
  );
}
