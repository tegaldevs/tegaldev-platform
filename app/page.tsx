import PageLayout from './_components/layouts/PageLayout';
import ActivitiesSection from './_components/organisms/ActivitiesSection';
import CollaborationSection from './_components/organisms/CollaborationSection';
import CommunityGallerySection from './_components/organisms/CommunityGallerySection';
import CommunityPhotosGallerySection from './_components/organisms/CommunityPhotosGallerySection';
import FAQSection from './_components/organisms/FAQSection';
import HeroSection from './_components/organisms/HeroSection';
import PlatformFeaturesSection from './_components/organisms/PlatformFeaturesSection';
import StatsSection from './_components/organisms/StatsSection';

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
