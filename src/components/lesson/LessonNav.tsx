import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface LessonNavProps {
  currentSection: string;
  onContinue: () => void;
  showContinue: boolean;
}

export const LessonNav = ({ currentSection, onContinue, showContinue }: LessonNavProps) => {
  return (
    <AnimatePresence>
      {showContinue && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border py-4 px-4"
        >
          <div className="max-w-3xl mx-auto flex justify-center">
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-5 rounded-full shadow-glow-lg gap-2"
            >
              Continue
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
