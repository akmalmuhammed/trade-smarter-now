import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Sparkles, ArrowRight, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    highlight: false,
    features: [
      { text: "10 beginner lessons", included: true },
      { text: "Basic quizzes", included: true },
      { text: "Progress tracking", included: true },
      { text: "Community access", included: true },
      { text: "AI feedback", included: false },
      { text: "All asset classes", included: false },
      { text: "Advanced lessons", included: false },
      { text: "Certificates", included: false },
    ],
    cta: "Start Free",
    href: "/signup",
  },
  {
    name: "Pro",
    description: "For serious learners",
    price: "$19",
    period: "/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "100+ lessons across all levels", included: true },
      { text: "Advanced quizzes", included: true },
      { text: "Detailed analytics", included: true },
      { text: "Priority community access", included: true },
      { text: "Unlimited AI feedback", included: true },
      { text: "All 8 asset classes", included: true },
      { text: "Intermediate & Advanced", included: true },
      { text: "Completion certificates", included: true },
    ],
    cta: "Go Pro",
    href: "/signup?plan=pro",
  },
];

const faqs = [
  {
    question: "What asset classes are covered?",
    answer: "We cover Crypto, Stocks, Forex, Commodities, Options, Futures, Bonds, and ETFs. Each has its own structured learning path."
  },
  {
    question: "How does AI feedback work?",
    answer: "After lessons, you'll be asked to explain concepts in your own words. Our AI analyzes your response and provides personalized feedback on accuracy, clarity, and areas to improve."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely! No contracts, no commitments. Cancel your Pro subscription anytime and you'll keep access until the end of your billing period."
  },
  {
    question: "Is the free plan really free?",
    answer: "Yes! No credit card required. Get 10 full lessons to experience our learning method before deciding to upgrade."
  },
  {
    question: "Do you offer team or student discounts?",
    answer: "Yes! Contact us for team pricing (5+ seats) or student discounts with a valid .edu email."
  },
];

function PricingHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Simple, transparent pricing</span>
          </motion.div>

          <h1 className="font-display text-display-md sm:text-display-lg font-bold mb-6">
            Invest in Your{" "}
            <span className="gradient-text">Trading Education</span>
          </h1>

          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCards() {
  return (
    <section className="py-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlight 
                  ? "glass-card gradient-border shadow-glow" 
                  : "glass-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to={plan.href}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Instant access
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-xp" />
              4.9/5 rating
            </span>
            <span>🔒 Secure payment via Stripe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Reach out anytime.
          </p>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const Pricing = () => {
  return (
    <Layout>
      <PricingHero />
      <PricingCards />
      <FAQSection />
      <PricingCTA />
    </Layout>
  );
};

export default Pricing;
