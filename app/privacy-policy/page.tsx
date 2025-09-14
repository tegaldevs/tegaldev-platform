import PageLayout from '@/components/layouts/PageLayout';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <ScrollAnimatedSection
        className="py-20 px-4 sm:px-6 lg:px-8"
        animationType="fade-up"
        delay={200}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  participate in our community activities, or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (name, email, username)</li>
                  <li>Profile information and contributions</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  including to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and deliver the services you request</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about events, challenges, and community updates</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect and prevent fraudulent or illegal activity</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  You have the right to access, update, or delete your personal information. 
                  You may also opt out of certain communications from us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="font-medium">
                  Email: privacy@tegal.dev<br />
                  Address: Tegal, Central Java, Indonesia
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the 
                  &quot;Last Updated&quot; date.
                </p>
                <p className="text-sm text-gray-400">
                  Last Updated: January 2024
                </p>
              </div>
            </section>
          </div>
        </div>
      </ScrollAnimatedSection>
    </PageLayout>
  );
}

export const metadata = {
  title: 'Privacy Policy | Tegal Dev Community',
  description: 'Privacy Policy for Tegal Dev Community - Learn how we collect, use, and protect your information.',
};