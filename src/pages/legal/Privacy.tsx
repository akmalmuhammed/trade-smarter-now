import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Lucidity Trading, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Name and email address</li>
                <li>Billing information and payment details</li>
                <li>Profile information (username, avatar, bio)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Usage Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information when you use the Platform:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Course progress and learning patterns</li>
                <li>Pages visited and features used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Provide and maintain our services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Personalize your learning experience</li>
                <li>Track progress and generate certificates</li>
                <li>Send important updates and promotional content</li>
                <li>Improve our platform and develop new features</li>
                <li>Detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Service Providers:</strong> Third parties that help us operate the Platform (payment processors, hosting providers)</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encrypted storage for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience. For more details, please see our <Link to="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in compliance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the Platform. Your continued use after changes indicates acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or to exercise your rights, contact our Data Protection Officer:
              </p>
              <p className="text-foreground mt-2">
                Email: privacy@lucidity.io<br />
                Address: 123 Trading Street, Financial District, NY 10004
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              See also: <Link to="/legal/terms" className="text-primary hover:underline">Terms of Service</Link> | <Link to="/legal/refunds" className="text-primary hover:underline">Refund Policy</Link> | <Link to="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
