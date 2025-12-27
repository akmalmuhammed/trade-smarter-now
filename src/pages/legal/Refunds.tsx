import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Refunds = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 27, 2025</p>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Lucidity Trading, we want you to be completely satisfied with your learning experience. If you're not happy with your subscription, we offer a straightforward refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a <strong className="text-foreground">30-day money-back guarantee</strong> on all new subscriptions. If you're not satisfied with Lucidity Trading within the first 30 days of your subscription, you can request a full refund.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Eligibility Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request must be made within 30 days of initial purchase</li>
                  <li>Applies to first-time subscribers only</li>
                  <li>Account must not have been previously refunded</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Subscription Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can cancel your subscription at any time. Here's what happens when you cancel:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Your access continues until the end of your current billing period</li>
                <li>No partial refunds for unused time within a billing period</li>
                <li>Your progress and achievements are saved if you decide to resubscribe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Annual Subscriptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                For annual subscription plans:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>30-day money-back guarantee applies from the date of purchase</li>
                <li>After 30 days, no refunds for annual plans</li>
                <li>You may downgrade to monthly at your next renewal date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed">
                To request a refund, follow these steps:
              </p>
              <ol className="list-decimal pl-6 mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Contact Support:</strong> Email us at support@lucidity.io or use the in-app support chat
                </li>
                <li>
                  <strong className="text-foreground">Provide Details:</strong> Include your account email and reason for the refund request
                </li>
                <li>
                  <strong className="text-foreground">Wait for Confirmation:</strong> We'll process your request within 2-3 business days
                </li>
                <li>
                  <strong className="text-foreground">Receive Refund:</strong> Refunds are issued to the original payment method within 5-10 business days
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed">The following are not eligible for refunds:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Requests made after the 30-day guarantee period</li>
                <li>Accounts that have violated our Terms of Service</li>
                <li>Promotional or discounted subscriptions (unless otherwise stated)</li>
                <li>Gift subscriptions (refunds go to the purchaser)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Issues</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you experience technical issues that prevent you from using the Platform:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Contact our support team first — we often can resolve issues quickly</li>
                <li>If we cannot resolve the issue, we may offer a prorated refund or account credit</li>
                <li>Extended access time may be provided for documented downtime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Chargebacks</h2>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to contact us before initiating a chargeback with your bank or credit card company. Chargebacks can result in:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Immediate account suspension</li>
                <li>Loss of all course progress and achievements</li>
                <li>Potential additional fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund requests or questions about this policy:
              </p>
              <p className="text-foreground mt-2">
                Email: support@lucidity.io<br />
                Response time: Within 24-48 hours
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              See also: <Link to="/legal/terms" className="text-primary hover:underline">Terms of Service</Link> | <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link> | <Link to="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Refunds;
