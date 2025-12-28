import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

interface LessonCompleteProps {
  totalXp: number;
  lessonXp: number;
  quizXp: number;
  aiXp: number;
  currentLevel: number;
  xpToNextLevel: number;
  currentXpInLevel: number;
  badge?: {
    name: string;
    description: string;
    emoji: string;
  };
  courseProgress: number;
  totalLessons: number;
  completedLessons: number;
  nextLessonTitle?: string;
  nextLessonId?: string;
}

export const LessonComplete = ({
  totalXp,
  lessonXp,
  quizXp,
  aiXp,
  currentLevel,
  xpToNextLevel,
  currentXpInLevel,
  badge,
  courseProgress,
  totalLessons,
  completedLessons,
  nextLessonTitle,
  nextLessonId,
}: LessonCompleteProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Confetti effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ["#FF6B35", "#A855F7", "#22C55E", "#FBBF24"][
                Math.floor(Math.random() * 4)
              ],
            }}
            initial={{ y: -20, opacity: 1, scale: 0 }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [1, 1, 0],
              scale: [0, 1, 1],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative max-w-md w-full bg-card rounded-3xl border border-border p-8 text-center"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        {/* Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-lg">
            <span className="text-4xl">🎉</span>
          </div>
          <h1 className="text-2xl font-display font-bold mb-2">
            Lesson Complete!
          </h1>
        </motion.div>

        {/* XP Breakdown */}
        <motion.div
          className="bg-muted/50 rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-3xl font-display font-bold text-xp mb-2">
            +{totalXp} XP
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>Lesson</span>
              <span>+{lessonXp}</span>
            </div>
            <div className="flex justify-between">
              <span>Quiz</span>
              <span>+{quizXp}</span>
            </div>
            <div className="flex justify-between">
              <span>AI Feedback</span>
              <span>+{aiXp}</span>
            </div>
          </div>
        </motion.div>

        {/* Level progress */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-xp" />
              Level {currentLevel}
            </span>
            <span className="text-muted-foreground">
              {xpToNextLevel - currentXpInLevel} XP to Level {currentLevel + 1}
            </span>
          </div>
          <Progress
            value={(currentXpInLevel / xpToNextLevel) * 100}
            className="h-3"
          />
        </motion.div>

        {/* Badge */}
        {badge && (
          <motion.div
            className="mb-6 p-4 rounded-xl border-2 border-xp/30 bg-xp/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-xp/20 flex items-center justify-center text-2xl">
                {badge.emoji}
              </div>
              <div className="text-left">
                <p className="text-xs text-xp font-medium">New Badge Unlocked!</p>
                <p className="font-semibold">{badge.name}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Course progress */}
        <motion.div
          className="mb-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Course Progress</span>
            <span>
              {completedLessons}/{totalLessons} lessons
            </span>
          </div>
          <Progress value={courseProgress} className="h-2" />
        </motion.div>

        {/* Streak callout */}
        <motion.p
          className="text-primary font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          🔥 Keep the streak going!
        </motion.p>

        {/* Actions */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          {nextLessonTitle && nextLessonId && (
            <Link to={`/lessons/${nextLessonId}`} className="block">
              <Button className="w-full bg-gradient-primary hover:opacity-90 gap-2" size="lg">
                Continue to Lesson {completedLessons + 1}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          )}
          <Link to="/courses/crypto" className="block">
            <Button variant="outline" className="w-full gap-2">
              <Home className="w-4 h-4" />
              Back to Course
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
