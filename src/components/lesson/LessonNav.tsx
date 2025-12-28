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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
        >
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-5 rounded-full shadow-glow-lg gap-2"
          >
            Continue
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
