import { motion } from "framer-motion";
import { Check, Trophy } from "lucide-react";

interface RoadmapStep {
  id: string;
  label: string;
  completed: boolean;
  current: boolean;
}

interface LessonRoadmapProps {
  steps: RoadmapStep[];
}

export const LessonRoadmap = ({ steps }: LessonRoadmapProps) => {
  return (
    <section className="py-8 px-4 border-b border-border bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-sm font-medium text-muted-foreground text-center mb-6">
          Your Journey Through This Lesson
        </h3>
        
        <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide pb-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`flex flex-col items-center ${
                  step.current ? "scale-110" : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                    step.completed
                      ? "bg-success text-success-foreground"
                      : step.current
                      ? "bg-gradient-primary text-primary-foreground shadow-glow animate-pulse-glow"
                      : index === steps.length - 1
                      ? "bg-xp/20 text-xp border border-xp/30"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-4 h-4" />
                  ) : index === steps.length - 1 ? (
                    <Trophy className="w-4 h-4" />
                  ) : step.current ? (
                    "→"
                  ) : (
                    ""
                  )}
                </div>
                <span
                  className={`text-[10px] sm:text-xs mt-1.5 max-w-[60px] text-center truncate ${
                    step.current
                      ? "text-foreground font-medium"
                      : step.completed
                      ? "text-success"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div
                  className={`w-6 sm:w-10 h-0.5 mx-1 ${
                    step.completed ? "bg-success" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
