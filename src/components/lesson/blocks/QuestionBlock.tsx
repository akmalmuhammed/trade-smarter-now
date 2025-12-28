import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuestionBlockProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpReward: number;
  onCorrect: () => void;
}

export const QuestionBlock = ({
  question,
  options,
  correctIndex,
  explanation,
  xpReward,
  onCorrect,
}: QuestionBlockProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showXp, setShowXp] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedIndex(index);
  };

  const handleCheck = () => {
    if (selectedIndex === null) return;
    setIsAnswered(true);
    
    if (selectedIndex === correctIndex) {
      setShowXp(true);
      setTimeout(() => {
        onCorrect();
      }, 1500);
    }
  };

  const isCorrect = selectedIndex === correctIndex;

  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
          <div className="flex items-center gap-2 text-primary font-semibold mb-4">
            <span className="text-xl">⚡</span>
            <span>Quick Check</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Before we continue, quick question:
          </p>
          
          <h3 className="text-lg font-medium text-foreground mb-6">
            {question}
          </h3>
          
          <div className="space-y-3 mb-6">
            {options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  isAnswered
                    ? index === correctIndex
                      ? "border-success bg-success/10"
                      : index === selectedIndex
                      ? "border-destructive bg-destructive/10"
                      : "border-border opacity-50"
                    : selectedIndex === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-muted-foreground"
                }`}
                whileHover={!isAnswered ? { scale: 1.01 } : {}}
                whileTap={!isAnswered ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isAnswered
                          ? index === correctIndex
                            ? "border-success bg-success"
                            : index === selectedIndex
                            ? "border-destructive bg-destructive"
                            : "border-muted-foreground"
                          : selectedIndex === index
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {isAnswered && index === correctIndex && (
                        <Check className="w-3 h-3 text-success-foreground" />
                      )}
                      {isAnswered && index === selectedIndex && index !== correctIndex && (
                        <X className="w-3 h-3 text-destructive-foreground" />
                      )}
                    </div>
                    <span className="text-sm text-foreground">{option}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            {!isAnswered ? (
              <motion.div key="check">
                <Button
                  onClick={handleCheck}
                  disabled={selectedIndex === null}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Check Answer
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${
                  isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">
                    {isCorrect ? "✅" : "❌"}
                  </span>
                  <div>
                    <p className={`font-medium ${isCorrect ? "text-success" : "text-destructive"}`}>
                      {isCorrect ? "Correct!" : "Not quite"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {explanation}
                    </p>
                  </div>
                </div>
                
                {showXp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mt-4 text-xp font-semibold"
                  >
                    <Sparkles className="w-4 h-4" />
                    +{xpReward} XP
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
