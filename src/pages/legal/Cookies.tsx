import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lucidity Trading uses cookies for various purposes to enhance your experience on our platform.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies are necessary for the Platform to function properly. They enable:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>User authentication and session management</li>
                <li>Security features and fraud prevention</li>
                <li>Basic platform functionality</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Functional Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                These cookies remember your preferences and choices:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Theme preferences (dark/light mode)</li>
                <li>Language settings</li>
                <li>Video player preferences</li>
                <li>Last viewed lesson position</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use analytics cookies to understand how users interact with our Platform:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Pages visited and time spent</li>
                <li>Navigation patterns</li>
                <li>Error tracking and performance monitoring</li>
                <li>Feature usage statistics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                With your consent, we may use marketing cookies to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Show relevant advertisements</li>
                <li>Track the effectiveness of our marketing campaigns</li>
                <li>Limit how often you see certain ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use services from third parties that set their own cookies:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 text-foreground font-semibold">Provider</th>
                      <th className="text-left py-3 text-foreground font-semibold">Purpose</th>
                      <th className="text-left py-3 text-foreground font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/30">
                      <td className="py-3">Google Analytics</td>
                      <td className="py-3">Usage analytics</td>
                      <td className="py-3">Analytics</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-3">Stripe</td>
                      <td className="py-3">Payment processing</td>
                      <td className="py-3">Essential</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-3">Intercom</td>
                      <td className="py-3">Customer support</td>
                      <td className="py-3">Functional</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-3">Hotjar</td>
                      <td className="py-3">User behavior analysis</td>
                      <td className="py-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have control over cookies on our Platform:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cookie Settings</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you first visit our Platform, you'll see a cookie consent banner where you can:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Browser Settings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through settings. You can:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>View and delete existing cookies</li>
                <li>Block all or certain cookies</li>
                <li>Set notifications when cookies are being set</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Note: Blocking essential cookies may affect the functionality of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Duration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies on our Platform have different lifespans:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong className="text-foreground">Persistent Cookies:</strong> Remain for a set period (e.g., 30 days to 1 year)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy to reflect changes in our practices or for legal reasons. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies:
              </p>
              <p className="text-foreground mt-2">
                Email: privacy@lucidity.io<br />
                Address: 123 Trading Street, Financial District, NY 10004
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              See also: <Link to="/legal/terms" className="text-primary hover:underline">Terms of Service</Link> | <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link> | <Link to="/legal/refunds" className="text-primary hover:underline">Refund Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
