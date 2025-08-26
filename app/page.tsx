import PageLayout from './_components/layouts/PageLayout';
import HeroSection from './_components/organisms/HeroSection';
import CommunityPhotosGallerySection from './_components/organisms/CommunityPhotosGallerySection';
import PlatformFeaturesSection from './_components/organisms/PlatformFeaturesSection';
import ActivitiesSection from './_components/organisms/ActivitiesSection';
import CommunityGallerySection from './_components/organisms/CommunityGallerySection';
import CollaborationSection from './_components/organisms/CollaborationSection';
import StatsSection from './_components/organisms/StatsSection';
import FAQSection from './_components/organisms/FAQSection';

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
