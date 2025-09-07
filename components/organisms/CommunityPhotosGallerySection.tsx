import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { PhotoGalleryGrid } from '../molecules/PhotoGalleryGrid';

export default function CommunityPhotosGallerySection() {
  return (
    <ScrollAnimatedSection className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <SectionHeader
            title="Community Photos"
            highlightedWord="Gallery"
            subtitle="Moments from our tech community events and activities"
          />
        </div>
        <PhotoGalleryGrid />
      </div>
    </ScrollAnimatedSection>
  );
}
