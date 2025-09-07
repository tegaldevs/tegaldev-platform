import PageLayout from '@/components/layouts/PageLayout';
import HeroSection from '@/components/organisms/HeroSection';
import CommunityPhotosGallerySection from '@/components/organisms/CommunityPhotosGallerySection';
import PlatformFeaturesSection from '@/components/organisms/PlatformFeaturesSection';
import ActivitiesSection from '@/components/organisms/ActivitiesSection';
import CommunityGallerySection from '@/components/organisms/CommunityGallerySection';
import CollaborationSection from '@/components/organisms/CollaborationSection';
import StatsSection from '@/components/organisms/StatsSection';
import FAQSection from '@/components/organisms/FAQSection';

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
