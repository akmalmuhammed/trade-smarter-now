import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Brain, 
  Trophy, 
  TrendingUp, 
  Star, 
  Play,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  MessageSquare,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-trading.png";

const assetClasses = [
  { name: "Crypto", icon: "₿", color: "from-orange-500 to-yellow-500", href: "/crypto" },
  { name: "Stocks", icon: "📈", color: "from-green-500 to-emerald-500", href: "/stocks" },
  { name: "Forex", icon: "💱", color: "from-blue-500 to-cyan-500", href: "/forex" },
  { name: "Options", icon: "⚡", color: "from-purple-500 to-pink-500", href: "/options" },
  { name: "Futures", icon: "🚀", color: "from-red-500 to-orange-500", href: "/futures" },
  { name: "ETFs", icon: "📊", color: "from-indigo-500 to-purple-500", href: "/etfs" },
];

const features = [
  {
    icon: BookOpen,
    title: "Bite-sized Lessons",
    description: "Learn complex concepts through short, digestible text lessons with visuals. No boring 2-hour videos."
  },
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Explain concepts in your own words and get personalized feedback from AI. It's like having a tutor 24/7."
  },
  {
    icon: MessageSquare,
    title: "Quick Quizzes",
    description: "Test your knowledge with interactive quizzes after each lesson. Instant feedback keeps you engaged."
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Earn XP, unlock badges, and level up as you learn. Watch your trading skills grow visually."
  },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "100+", label: "Interactive Lessons" },
  { value: "8", label: "Asset Classes" },
  { value: "4.9★", label: "User Rating" },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Crypto Trader",
    avatar: "👨‍💻",
    content: "Finally a platform that doesn't talk down to me or try to sell me a $500 course. The AI feedback is insane - it's like having a mentor in my pocket."
  },
  {
    name: "Sarah Kim",
    role: "Day Trader",
    avatar: "👩‍🎓",
    content: "I went from knowing nothing about options to actually understanding Greeks in like 2 weeks. The gamification is lowkey addicting."
  },
  {
    name: "Marcus Johnson",
    role: "Stock Investor",
    avatar: "🧑‍💼",
    content: "The quizzes after each lesson really help cement the concepts. Way better than just passively watching YouTube videos."
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Learn trading the fun way</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-display-md sm:text-display-lg lg:text-display-xl font-bold mb-6">
              Master Trading{" "}
              <span className="gradient-text">Without the BS</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Interactive lessons, AI feedback, and gamified progress. 
              Learn crypto, stocks, forex & more—your way, at your pace.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/how-it-works">
                  <Play className="w-5 h-5" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {["🧑‍💻", "👩‍🎓", "🧑‍💼", "👨‍🚀", "👩‍🔬"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-xp text-xp" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">50,000+ learners love us</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-orange">
              <img 
                src={heroImage} 
                alt="Trading dashboard visualization" 
                className="w-full h-auto rounded-3xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-glass"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Level Up!</p>
                  <p className="font-display font-bold text-foreground">+250 XP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 glass-card rounded-2xl p-4 shadow-glass"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-xp/20 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Badge Unlocked</p>
                  <p className="font-display font-bold text-foreground">Chart Master</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AssetClassesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
            Trade <span className="gradient-text">Everything</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Bitcoin to bonds, we've got you covered. Pick your asset class and start learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {assetClasses.map((asset, index) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={asset.href}
                className="group block glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${asset.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {asset.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground">{asset.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
            Why Learners <span className="gradient-text">Love Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We built what we wished existed when we were learning to trade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksPreview() {
  const steps = [
    { icon: BookOpen, title: "Read", description: "Bite-sized lessons with visuals" },
    { icon: Target, title: "Quiz", description: "Test your understanding" },
    { icon: MessageSquare, title: "Explain", description: "Write it in your words" },
    { icon: Brain, title: "AI Feedback", description: "Get personalized guidance" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
            Learning That <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our 4-step method is scientifically designed to help you retain 90% of what you learn.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link to="/how-it-works">
              Learn More About Our Method
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
            Loved by <span className="gradient-text">Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their learning journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-xp text-xp" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 shadow-glow-lg">
              <Zap className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
              Ready to Start Your{" "}
              <span className="gradient-text">Trading Journey?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join 50,000+ learners who are mastering the markets with Lucidity. 
              Start with 10 free lessons—no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                10 Free Lessons
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                No Credit Card
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Cancel Anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AssetClassesSection />
      <FeaturesSection />
      <HowItWorksPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
