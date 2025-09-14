import PageLayout from '@/components/layouts/PageLayout';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform and services.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  By accessing and using the Tegal Dev Community platform, you accept and agree to be 
                  bound by the terms and provision of this agreement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Permission is granted to temporarily access the materials on Tegal Dev Community&apos;s 
                  platform for personal, non-commercial transitory viewing only.
                </p>
                <p>This license shall automatically terminate if you violate any of these restrictions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software on the platform</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Community Guidelines</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  As a member of our community, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Treat all members with respect and professionalism</li>
                  <li>Share knowledge and help others learn and grow</li>
                  <li>Avoid spam, harassment, or inappropriate content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow local laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">User Content</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  You retain ownership of any content you submit to our platform. However, by 
                  submitting content, you grant us a worldwide, non-exclusive, royalty-free license 
                  to use, reproduce, and distribute your content in connection with our services.
                </p>
                <p>
                  You are responsible for ensuring that your content does not violate any third-party 
                  rights or applicable laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Account Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We reserve the right to terminate or suspend your account at any time for 
                  violations of these terms or for any other reason we deem appropriate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The materials on Tegal Dev Community&apos;s platform are provided on an &apos;as is&apos; basis. 
                  Tegal Dev Community makes no warranties, expressed or implied, and hereby disclaims 
                  and negates all other warranties including without limitation, implied warranties or 
                  conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  In no event shall Tegal Dev Community or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on our platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of Indonesia and you irrevocably submit to the exclusive jurisdiction of the 
                  courts in that State or location.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-medium">
                  Email: legal@tegal.dev<br />
                  Address: Tegal, Central Java, Indonesia
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We reserve the right to revise these terms of service at any time without notice. 
                  By using this platform, you are agreeing to be bound by the then current version 
                  of these terms of service.
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
  title: 'Terms of Service | Tegal Dev Community',
  description: 'Terms of Service for Tegal Dev Community - Read our terms and conditions for using our platform.',
};