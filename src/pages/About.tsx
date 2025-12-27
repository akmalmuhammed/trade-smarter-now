import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Target, 
  Heart, 
  Users, 
  Sparkles, 
  ArrowRight,
  Globe,
  BookOpen,
  Brain,
  Award
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Learning First",
    description: "Every feature we build starts with one question: will this help someone actually learn better?"
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Quality financial education shouldn't cost thousands. We believe everyone deserves access."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're not afraid to challenge traditional education methods. If there's a better way, we'll find it."
  },
  {
    icon: Users,
    title: "Community",
    description: "Learning is better together. Our community supports each other through every market cycle."
  },
];

const team = [
  { name: "Jordan Chen", role: "CEO & Co-founder", emoji: "👨‍💻" },
  { name: "Maya Patel", role: "CTO & Co-founder", emoji: "👩‍🔬" },
  { name: "Alex Rivera", role: "Head of Education", emoji: "🧑‍🏫" },
  { name: "Sam Kim", role: "Head of AI", emoji: "🤖" },
];

const milestones = [
  { year: "2023", event: "Founded with a mission to democratize trading education" },
  { year: "2023", event: "Launched beta with 20 crypto lessons" },
  { year: "2024", event: "Reached 10,000 learners" },
  { year: "2024", event: "Expanded to 8 asset classes" },
  { year: "2025", event: "50,000+ active learners worldwide" },
];

function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />

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
            <span className="text-sm font-medium">Our Story</span>
          </motion.div>

          <h1 className="font-display text-display-md sm:text-display-lg font-bold mb-6">
            Making Trading Education{" "}
            <span className="gradient-text">Actually Fun</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We were tired of boring video courses and scammy YouTube gurus. 
            So we built what we wished existed when we started learning to trade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-sm sm:text-display-md font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Financial literacy is a superpower in the 21st century, but most educational content is either 
              too boring to finish or designed to sell you expensive courses that don't work.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to make trading education <span className="text-foreground font-medium">engaging, 
              effective, and accessible</span> to everyone. Through interactive lessons, AI-powered feedback, 
              and gamification, we've created a learning experience that actually sticks.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-4xl font-bold gradient-text">50K+</p>
                <p className="text-sm text-muted-foreground">Learners</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold gradient-text">8</p>
                <p className="text-sm text-muted-foreground">Asset Classes</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold gradient-text">100+</p>
                <p className="text-sm text-muted-foreground">Lessons</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, label: "Interactive Lessons" },
                  { icon: Brain, label: "AI Feedback" },
                  { icon: Award, label: "Gamification" },
                  { icon: Globe, label: "Global Community" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="font-medium text-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
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
            What We <span className="gradient-text">Stand For</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
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
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate group of traders, educators, and technologists.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
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
            Our <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="pt-3">
                <p className="text-foreground">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Ready to Join <span className="gradient-text">50,000+ Learners?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Start your trading journey today with 10 free lessons.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <AboutCTA />
    </Layout>
  );
};

export default About;
