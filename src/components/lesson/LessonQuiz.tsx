import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface LessonQuizProps {
  questions: QuizQuestion[];
  xpReward: number;
  onComplete: () => void;
}

export const LessonQuiz = ({ questions, xpReward, onComplete }: LessonQuizProps) => {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const allCorrect = answers.every(
      (answer, index) => answer === questions[index].correctIndex
    );
    if (!allCorrect) {
      setShowRetry(true);
    }
  };

  const handleRetry = () => {
    // Only reset wrong answers
    const newAnswers = answers.map((answer, index) =>
      answer === questions[index].correctIndex ? answer : null
    );
    setAnswers(newAnswers);
    setSubmitted(false);
    setShowRetry(false);
  };

  const correctCount = answers.filter(
    (answer, index) => answer === questions[index].correctIndex
  ).length;
  
  const allCorrect = correctCount === questions.length;
  const canSubmit = answers.every((a) => a !== null);

  return (
    <motion.section
      className="py-12 px-4 bg-card/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold mb-2">
            ✅ Knowledge Check
          </h2>
          <p className="text-muted-foreground">
            Let's test what you've learned. You need 100% to continue.
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((q, qIndex) => {
            const isCorrect = answers[qIndex] === q.correctIndex;
            const isAnswered = submitted && answers[qIndex] !== null;

            return (
              <motion.div
                key={qIndex}
                className="rounded-2xl border border-border p-6 bg-background"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qIndex * 0.1 }}
              >
                <p className="text-xs text-muted-foreground mb-2">
                  Question {qIndex + 1} of {questions.length}
                </p>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  {q.question}
                </h3>

                <div className="space-y-2">
                  {q.options.map((option, oIndex) => {
                    const isSelected = answers[qIndex] === oIndex;
                    const isThisCorrect = oIndex === q.correctIndex;

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleSelect(qIndex, oIndex)}
                        disabled={submitted && isCorrect}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          submitted
                            ? isThisCorrect
                              ? "border-success bg-success/10"
                              : isSelected
                              ? "border-destructive bg-destructive/10"
                              : "border-border opacity-50"
                            : isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              submitted
                                ? isThisCorrect
                                  ? "border-success bg-success"
                                  : isSelected
                                  ? "border-destructive bg-destructive"
                                  : "border-muted-foreground"
                                : isSelected
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {submitted && isThisCorrect && (
                              <Check className="w-3 h-3 text-success-foreground" />
                            )}
                            {submitted && isSelected && !isThisCorrect && (
                              <X className="w-3 h-3 text-destructive-foreground" />
                            )}
                          </div>
                          <span className="text-sm">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`text-sm mt-4 p-3 rounded-lg ${
                        isCorrect
                          ? "bg-success/10 text-success"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {isCorrect ? "✓ " : "✗ "}
                      {q.explanation}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="submit">
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full bg-gradient-primary hover:opacity-90 py-6"
                  size="lg"
                >
                  Submit Quiz
                </Button>
              </motion.div>
            ) : allCorrect ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 text-success rounded-full font-semibold mb-4">
                  🎉 Perfect Score! {correctCount}/{questions.length}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xp font-bold text-xl mb-4"
                >
                  +{xpReward} XP
                </motion.div>
                <Button
                  onClick={onComplete}
                  className="bg-gradient-primary hover:opacity-90"
                  size="lg"
                >
                  Continue to AI Feedback →
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="retry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-muted-foreground mb-4">
                  Almost there! {correctCount}/{questions.length} correct
                </p>
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
