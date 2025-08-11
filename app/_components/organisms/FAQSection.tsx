import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { Accordion, AccordionItem } from '../ui/accordion';

export default function FAQSection() {
  return (
    <ScrollAnimatedSection
      id="faq"
      className="mt-12"
      animationType="fade-up"
      delay={700}
    >
      <SectionHeader
        title="Frequently Asked "
        highlightedWord="Questions"
        subtitle="Find answers to common questions about Tegal Dev community and platform"
      />

      <div className="max-w-5xl mx-auto mt-8">
        <Accordion>
          <AccordionItem title="What is Tegal Dev and how can I join?">
            <p className="text-start">
              Tegal Dev is a curated software engineer community based in Tegal,
              Central Java, Indonesia. We focus on improving educational
              activities and fostering innovation in technology. To join, simply
              register on our platform and start participating in our events,
              workshops, and community activities. We welcome developers of all
              skill levels!
            </p>
          </AccordionItem>

          <AccordionItem title="What types of events and activities do you organize?">
            <p className="text-start">
              We organize a variety of activities including tech meetups,
              workshops, coding challenges, tech talks, sharing sessions, and
              networking events. Our events cover various technologies and
              development practices, from beginner-friendly workshops to
              advanced technical discussions. We also collaborate with other
              tech communities worldwide to bring diverse perspectives and
              opportunities.
            </p>
          </AccordionItem>

          <AccordionItem title="How can I contribute to the community?">
            <p className="text-start">
              There are many ways to contribute! You can share your knowledge
              through tech talks or workshops, participate in coding challenges,
              mentor other developers, contribute to open-source projects, or
              help organize events. We also welcome collaboration on projects
              and initiatives that benefit the broader tech community.
            </p>
          </AccordionItem>

          <AccordionItem title="Do I need to be from Tegal to join the community?">
            <p className="text-start">
              Not at all! While we&apos;re based in Tegal, our community is open
              to software engineers from anywhere in Indonesia and around the
              world. We believe in the power of diverse perspectives and welcome
              members from different backgrounds and locations to enrich our
              community.
            </p>
          </AccordionItem>

          <AccordionItem title="How can I stay updated with community activities?">
            <p className="text-start">
              You can stay updated by subscribing to our newsletter, following
              our social media channels, joining our community platforms, and
              regularly checking our website for upcoming events. We also send
              regular updates about workshops, challenges, and collaboration
              opportunities.
            </p>
          </AccordionItem>

          <AccordionItem title="Are there any membership fees or costs?">
            <p className="text-start">
              Most of our community activities and events are free to attend.
              However, some specialized workshops or events may have a small fee
              to cover materials or venue costs. We always strive to keep our
              events accessible and affordable for all members of our community.
            </p>
          </AccordionItem>

          <AccordionItem
            title="How can companies or organizations collaborate with Tegal Dev?"
            className="text-start"
          >
            <p>
              We welcome collaborations with companies and organizations! You
              can sponsor events, provide venues for meetups, offer internship
              or job opportunities to our members, or collaborate on educational
              initiatives. Contact us through our collaboration email to discuss
              potential partnerships.
            </p>
          </AccordionItem>

          <AccordionItem title="What resources and learning materials are available?">
            <p className="text-start">
              We provide access to various learning resources including workshop
              materials, recorded tech talks, coding challenge solutions, and
              curated learning paths. Our community also shares knowledge
              through blogs, podcasts, and video content. Members can access
              these resources through our platform and community channels.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollAnimatedSection>
  );
}
