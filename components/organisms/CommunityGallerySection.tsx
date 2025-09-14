import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { GalleryCard } from '../molecules/GalleryCard';

const galleryItems = [
  {
    iconType: 'calendar' as const,
    title: 'Meetups',
    description: 'Community gatherings, networking events, and tech meetups',
    href: 'https://drive.google.com/drive/folders/meetups',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-500',
    hoverColor: 'text-blue-300',
    linkColor: 'text-blue-400',
  },
  {
    iconType: 'wrench' as const,
    title: 'Workshops',
    description: 'Hands-on learning sessions and technical workshops',
    href: 'https://drive.google.com/drive/folders/workshops',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
    hoverColor: 'text-green-300',
    linkColor: 'text-green-400',
  },
  {
    iconType: 'mic' as const,
    title: 'Tech Talks',
    description: 'Expert presentations and knowledge sharing sessions',
    href: 'https://drive.google.com/drive/folders/techtalks',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-500',
    hoverColor: 'text-orange-300',
    linkColor: 'text-orange-400',
  },
  {
    iconType: 'users2' as const,
    title: 'Sharing Sessions',
    description: 'Sharing sessions on topics like project management, and knowledge exchange.',
    href: 'https://drive.google.com/drive/folders/collaborations',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
    hoverColor: 'text-purple-300',
    linkColor: 'text-purple-400',
  },
];

export default function CommunityGallerySection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={400}
    >
      <SectionHeader
        title="Community "
        highlightedWord="Gallery"
        subtitle="Browse our photo collections from events, workshops, and community gatherings"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryCard
            key={index}
            iconType={item.iconType}
            title={item.title}
            description={item.description}
            href={item.href}
            gradientFrom={item.gradientFrom}
            gradientTo={item.gradientTo}
            hoverColor={item.hoverColor}
            linkColor={item.linkColor}
          />
        ))}
      </div>
    </ScrollAnimatedSection>
  );
}
