import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Target, 
  MessageSquare, 
  Brain, 
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Read Bite-sized Lessons",
    description: "No more 2-hour boring videos. Our lessons are short, visual, and packed with actionable insights. Each lesson takes 5-10 minutes and focuses on one concept.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    number: "02",
    icon: Target,
    title: "Take Quick Quizzes",
    description: "After each lesson, test your understanding with interactive quizzes. Instant feedback helps you identify gaps in your knowledge before moving on.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Explain in Your Words",
    description: "The best way to learn is to teach. Write explanations of concepts in your own words. This forces active recall and deeper understanding.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    icon: Brain,
    title: "Get AI Feedback",
    description: "Our AI analyzes your explanations and provides personalized feedback on accuracy, clarity, and areas to improve. It's like having a tutor 24/7.",
    color: "from-green-500 to-emerald-500",
  },
];

const benefits = [
  "90% knowledge retention (vs. 10% with passive video)",
  "Learn at your own pace, on your schedule",
  "Personalized feedback accelerates improvement",
  "Gamification keeps you motivated and engaged",
  "Real-world examples from actual markets",
  "Community support when you get stuck",
];

function HowItWorksHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Learning Method</span>
          </motion.div>

          <h1 className="font-display text-display-md sm:text-display-lg font-bold mb-6">
            Learn Trading the{" "}
            <span className="gradient-text">Smart Way</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our 4-step method is backed by learning science. It's designed to help you 
            actually remember and apply what you learn.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-6xl font-bold text-muted-foreground/20">
                    {step.number}
                  </span>
                </div>
                <h2 className="font-display text-display-sm font-bold mb-4 text-foreground">
                  {step.title}
                </h2>
                <p className="text-lg text-muted-foreground">{step.description}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                  <div className="relative">
                    <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GamificationSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
            Stay Motivated with{" "}
            <span className="gradient-text">Gamification</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learning should feel like progress, not punishment. Our gamification system keeps you engaged.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Zap, title: "Earn XP", description: "Get experience points for every lesson completed and quiz passed." },
            { icon: TrendingUp, title: "Level Up", description: "Watch your trader level grow from Novice to Master." },
            { icon: Award, title: "Unlock Badges", description: "Collect badges for achievements and milestones." },
            { icon: Trophy, title: "Leaderboard", description: "Compete with friends and the community." },
            { icon: Target, title: "Daily Streaks", description: "Build habits with daily learning streaks." },
            { icon: CheckCircle, title: "Progress Tracking", description: "Visual progress maps show how far you've come." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-6">
              Why Our Method <span className="gradient-text">Works</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 text-success mb-4">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">9x Better Retention</span>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="font-display text-4xl font-bold text-muted-foreground">10%</p>
                  <p className="text-sm text-muted-foreground mt-1">Passive Video Learning</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold gradient-text">90%</p>
                  <p className="text-sm text-muted-foreground mt-1">Lucidity Method</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Based on learning science research on active recall and spaced repetition.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-4">
              Ready to Experience It{" "}
              <span className="gradient-text">Yourself?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Start with 10 free lessons and see why 50,000+ learners chose Lucidity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const HowItWorks = () => {
  return (
    <Layout>
      <HowItWorksHero />
      <StepsSection />
      <GamificationSection />
      <BenefitsSection />
      <HowItWorksCTA />
    </Layout>
  );
};

export default HowItWorks;
