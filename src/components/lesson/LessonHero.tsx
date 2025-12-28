import { motion } from "framer-motion";
import { Clock, Trophy, BookOpen, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonHeroProps {
  title: string;
  description: string;
  learningPoints: string[];
  duration: number;
  xpReward: number;
  difficulty: string;
  completions: number;
  onStart: () => void;
}

export const LessonHero = ({
  title,
  description,
  learningPoints,
  duration,
  xpReward,
  difficulty,
  completions,
  onStart,
}: LessonHeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-accent/20 blur-xl pointer-events-none"
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Hero icon */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <div className="w-32 h-32 rounded-3xl bg-gradient-primary p-1 shadow-glow-lg">
          <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
            <span className="text-6xl">💎</span>
          </div>
        </div>
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-xp flex items-center justify-center text-xs font-bold text-background"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          ✨
        </motion.div>
      </motion.div>
      
      {/* Title */}
      <motion.h1
        className="text-display-md md:text-display-lg font-display font-bold text-center mb-4 gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>
      
      {/* Description */}
      <motion.p
        className="text-lg text-muted-foreground text-center max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>
      
      {/* Learning points */}
      <motion.div
        className="glass-card rounded-2xl p-6 mb-8 max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
          🎯 What You'll Learn:
        </h3>
        <ul className="space-y-2">
          {learningPoints.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-sm text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span className="text-success mt-0.5">•</span>
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      {/* Stats */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {duration} min
        </span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
        <span className="flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-xp" />
          {xpReward} XP
        </span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          {difficulty}
        </span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
        <span className="flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4" />
          {completions.toLocaleString()}
        </span>
      </motion.div>
      
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-2xl shadow-glow group"
        >
          Start Lesson
          <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
};
