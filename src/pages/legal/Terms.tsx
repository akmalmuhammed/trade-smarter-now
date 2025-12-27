import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Lucidity Trading ("the Platform"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lucidity Trading provides educational content, courses, and resources related to trading various financial instruments including but not limited to cryptocurrencies, stocks, forex, commodities, options, futures, bonds, and ETFs. Our service includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Interactive video lessons and tutorials</li>
                <li>AI-powered learning assistance and feedback</li>
                <li>Progress tracking and gamification features</li>
                <li>Community features and discussion forums</li>
                <li>Certificates of completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Educational Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">IMPORTANT:</strong> The content provided on Lucidity Trading is for educational and informational purposes only. It does not constitute financial advice, investment advice, trading advice, or any other sort of advice. We do not recommend that any cryptocurrency, security, or other financial instrument should be bought, sold, or held by you.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Trading financial instruments carries a high level of risk and may not be suitable for all investors. Before making any investment decisions, you should seek advice from an independent financial advisor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Subscription and Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some features require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Pay all fees associated with your chosen plan</li>
                <li>Automatic renewal unless cancelled before the billing date</li>
                <li>Our refund policy as outlined in our <Link to="/legal/refunds" className="text-primary hover:underline">Refund Policy</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Platform, including but not limited to text, graphics, logos, videos, and software, is the property of Lucidity Trading and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Share your account credentials with others</li>
                <li>Download, copy, or redistribute course content</li>
                <li>Use the Platform for any unlawful purpose</li>
                <li>Interfere with or disrupt the Platform's operation</li>
                <li>Attempt to gain unauthorized access to any systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Lucidity Trading shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Platform. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-foreground mt-2">
                Email: legal@lucidity.io<br />
                Address: 123 Trading Street, Financial District, NY 10004
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              See also: <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link> | <Link to="/legal/refunds" className="text-primary hover:underline">Refund Policy</Link> | <Link to="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
