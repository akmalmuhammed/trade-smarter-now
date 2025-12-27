import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  Zap, 
  Crown,
  Sparkles,
  BookOpen,
  Trophy,
  MessageSquare,
  Download,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Upgrade = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = {
    free: {
      name: "Free",
      price: 0,
      description: "Get started with the basics",
      features: [
        { text: "5 free lessons", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Community access", included: true },
        { text: "All 8 asset classes", included: false },
        { text: "AI feedback", included: false },
        { text: "Certificates", included: false },
        { text: "Offline access", included: false },
        { text: "Priority support", included: false },
      ]
    },
    pro: {
      name: "Pro",
      monthlyPrice: 19,
      annualPrice: 12,
      description: "Everything you need to master trading",
      popular: true,
      features: [
        { text: "All 120+ lessons", included: true },
        { text: "All 8 asset classes", included: true },
        { text: "AI-powered feedback", included: true },
        { text: "Advanced progress tracking", included: true },
        { text: "Completion certificates", included: true },
        { text: "Offline access", included: true },
        { text: "Priority support", included: true },
        { text: "Early access to new content", included: true },
      ]
    }
  };

  const proPrice = billingCycle === "annual" ? plans.pro.annualPrice : plans.pro.monthlyPrice;
  const savings = billingCycle === "annual" ? (plans.pro.monthlyPrice - plans.pro.annualPrice) * 12 : 0;

  const benefits = [
    {
      icon: BookOpen,
      title: "120+ Expert Lessons",
      description: "Deep-dive into 8 different asset classes with comprehensive video lessons"
    },
    {
      icon: Sparkles,
      title: "AI Learning Assistant",
      description: "Get personalized feedback and answers to your trading questions"
    },
    {
      icon: Trophy,
      title: "Certificates & Badges",
      description: "Earn verifiable certificates to showcase your trading knowledge"
    },
    {
      icon: MessageSquare,
      title: "Priority Support",
      description: "Get help when you need it with our dedicated support team"
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Crown className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Upgrade to Pro</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unlock Your Full{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trading Potential
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get unlimited access to all courses, AI-powered feedback, and exclusive features to accelerate your trading journey.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors"
            >
              <div
                className={`w-5 h-5 rounded-full bg-primary transition-transform ${
                  billingCycle === "annual" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}>
              Annual
            </span>
            {billingCycle === "annual" && (
              <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                Save ${savings}/year
              </span>
            )}
          </div>

          {/* Plans Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Free Plan */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">{plans.free.name}</h3>
              <p className="text-muted-foreground mb-6">{plans.free.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button variant="outline" className="w-full mb-8" disabled>
                Current Plan
              </Button>
              <ul className="space-y-3">
                {plans.free.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{plans.pro.name}</h3>
              <p className="text-muted-foreground mb-6">{plans.pro.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${proPrice}</span>
                <span className="text-muted-foreground">/month</span>
                {billingCycle === "annual" && (
                  <span className="block text-sm text-muted-foreground">Billed annually</span>
                )}
              </div>
              <Button asChild className="w-full mb-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Link to={`/checkout/${billingCycle}`}>
                  <Zap className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Link>
              </Button>
              <ul className="space-y-3">
                {plans.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Everything You Get with Pro
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is there a money-back guarantee?</h3>
                <p className="text-muted-foreground">Absolutely. We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards (Visa, Mastercard, Amex) and PayPal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Upgrade;
