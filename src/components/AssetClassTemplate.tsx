import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, BookOpen, Trophy, Clock, Zap, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Module {
  title: string;
  lessons: number;
  duration: string;
  topics: string[];
}

interface AssetClassTemplateProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  stats: {
    students: string;
    lessons: string;
    rating: string;
  };
  benefits: string[];
  modules: {
    beginner: Module;
    intermediate: Module;
    advanced: Module;
  };
  faqs: { question: string; answer: string }[];
}

export function AssetClassTemplate({
  name,
  tagline,
  description,
  icon: Icon,
  gradient,
  stats,
  benefits,
  modules,
  faqs
}: AssetClassTemplateProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-radial ${gradient} opacity-30`} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{name} Trading Course</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {name}
                </span>{" "}
                Trading
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {tagline}
              </p>
              
              <p className="text-muted-foreground mb-8">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link to="/signup">
                    Start Learning Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#curriculum">View Curriculum</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{stats.students}</span>
                  <span className="text-muted-foreground text-sm">students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{stats.lessons}</span>
                  <span className="text-muted-foreground text-sm">lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{stats.rating}</span>
                  <span className="text-muted-foreground text-sm">rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">What you'll learn</h3>
                
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full"
              >
                <span className="text-sm font-medium text-primary">Free to start!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete {name} Curriculum
            </h2>
            <p className="text-muted-foreground">
              From absolute beginner to advanced trader. Learn at your own pace with 
              interactive lessons and AI-powered feedback.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { level: "Beginner", data: modules.beginner, color: "from-green-500 to-emerald-500", free: true },
              { level: "Intermediate", data: modules.intermediate, color: "from-primary to-orange-500", free: false },
              { level: "Advanced", data: modules.advanced, color: "from-accent to-purple-600", free: false }
            ].map((module, index) => (
              <motion.div
                key={module.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${module.color} text-white`}>
                      {module.level}
                    </span>
                    {module.free && (
                      <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                        FREE
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{module.data.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {module.data.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {module.data.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {module.data.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={module.free ? "default" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/signup">
                      {module.free ? "Start Free" : "Unlock with Pro"}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why learn {name} trading with us?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Interactive Learning",
                    description: "Don't just watch videos. Practice concepts and get instant AI feedback."
                  },
                  {
                    icon: Trophy,
                    title: "Gamified Experience",
                    description: "Earn XP, unlock badges, and track your progress with streaks."
                  },
                  {
                    icon: BookOpen,
                    title: "Bite-sized Lessons",
                    description: "Learn in 5-10 minute sessions that fit into your busy schedule."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to start?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>10 free lessons to get started</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Learn at your own pace</span>
                </div>
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link to="/signup">
                  Start Learning {name} Trading
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}