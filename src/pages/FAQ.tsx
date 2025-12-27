import { useState } from "react";
import { motion } from "framer-motion";
import { Search, HelpCircle, CreditCard, BookOpen, Zap, Shield, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "getting-started", label: "Getting Started", icon: Zap },
    { id: "courses", label: "Courses & Learning", icon: BookOpen },
    { id: "billing", label: "Billing & Pricing", icon: CreditCard },
    { id: "account", label: "Account & Security", icon: Shield },
  ];

  const faqs = [
    {
      category: "getting-started",
      question: "What is Lucidity Trading?",
      answer: "Lucidity Trading is an interactive trading education platform that teaches you how to trade crypto, stocks, forex, and more through bite-sized lessons, quizzes, and AI-powered feedback. Unlike passive video courses, we focus on active learning where you explain concepts in your own words and get personalized guidance."
    },
    {
      category: "getting-started",
      question: "How is this different from YouTube or Udemy?",
      answer: "Three key differences: 1) Interactive learning - you don't just watch, you practice and get AI feedback. 2) Structured curriculum - lessons build on each other logically. 3) Gamification - XP, badges, and streaks keep you motivated. No more falling asleep during 3-hour videos!"
    },
    {
      category: "getting-started",
      question: "Do I need any prior trading experience?",
      answer: "Nope! Our Beginner track starts from absolute zero. We'll teach you what a candlestick is before we show you patterns. If you already have experience, you can skip ahead to Intermediate or Advanced content."
    },
    {
      category: "courses",
      question: "What assets do you cover?",
      answer: "We cover 8 major asset classes: Cryptocurrency, Stocks, Forex, Commodities, Options, Futures, Bonds, and ETFs. Each has its own dedicated curriculum with beginner, intermediate, and advanced modules."
    },
    {
      category: "courses",
      question: "How do the AI-powered explanations work?",
      answer: "After each lesson, you'll explain a concept in your own words. Our AI analyzes your response for accuracy, completeness, and common misconceptions, then gives you personalized feedback. It's like having a trading mentor available 24/7."
    },
    {
      category: "courses",
      question: "Can I learn at my own pace?",
      answer: "Absolutely! There are no deadlines or schedules. Learn for 5 minutes or 5 hours - it's entirely up to you. Your progress is always saved, and you can pick up exactly where you left off."
    },
    {
      category: "courses",
      question: "How long does it take to complete a course?",
      answer: "It depends on the asset class and your experience level. Beginner modules typically take 2-4 weeks at 15-20 minutes per day. The full curriculum for one asset class takes about 2-3 months of consistent learning."
    },
    {
      category: "billing",
      question: "Is there a free trial?",
      answer: "Yes! Our entire Beginner track (10 lessons per asset class) is completely free. No credit card required. You can start learning right now without paying anything."
    },
    {
      category: "billing",
      question: "How much does Pro cost?",
      answer: "Pro is $19/month or $149/year (save 35%). This gives you unlimited access to all 100+ lessons across all asset classes, including intermediate and advanced content."
    },
    {
      category: "billing",
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime from your account settings. You'll keep access until the end of your billing period. No questions asked, no hidden fees."
    },
    {
      category: "billing",
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee. If Pro isn't for you within the first week, just email us and we'll refund you in full. After 7 days, refunds are handled on a case-by-case basis."
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a reset link. The link expires in 1 hour for security reasons."
    },
    {
      category: "account",
      question: "Is my data secure?",
      answer: "Yes! We use industry-standard encryption, never store payment details on our servers (Stripe handles that), and never sell your data to third parties. See our Privacy Policy for details."
    },
    {
      category: "account",
      question: "Can I delete my account?",
      answer: "Yes, you can request account deletion from Settings > Privacy > Delete Account. This permanently removes all your data within 30 days. This action cannot be undone."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about Lucidity Trading. 
              Can't find what you're looking for? Contact our team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background/50 border-border/50 focus:border-primary rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8 justify-center"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border-border/50 data-[state=open]:bg-muted/30 rounded-xl px-4 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No questions found matching your search.</p>
                </div>
              )}
            </motion.div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <Button asChild>
                  <a href="/contact">Contact Support</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
