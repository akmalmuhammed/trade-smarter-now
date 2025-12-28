import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AIFeedbackProps {
  prompt: string;
  minChars: number;
  maxChars: number;
  xpRewards: {
    basic: number;
    good: number;
    excellent: number;
  };
  onComplete: (score: "basic" | "good" | "excellent", xp: number) => void;
}

export const AIFeedback = ({
  prompt,
  minChars,
  maxChars,
  xpRewards,
  onComplete,
}: AIFeedbackProps) => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    score: "basic" | "good" | "excellent";
    strengths: string[];
    improvements: string[];
    summary: string;
    xp: number;
  } | null>(null);
  const [attempts, setAttempts] = useState(0);

  const canSubmit = response.length >= minChars;

  const handleSubmit = async () => {
    setIsLoading(true);
    setAttempts((a) => a + 1);

    // Simulate AI feedback (in real implementation, call API)
    await new Promise((r) => setTimeout(r, 2500));

    // Simple scoring based on response length and keywords
    const hasKeywords = [
      "decentralized",
      "blockchain",
      "digital",
      "no bank",
      "peer",
      "secure",
    ].some((kw) => response.toLowerCase().includes(kw));

    const wordCount = response.split(/\s+/).length;
    
    let score: "basic" | "good" | "excellent";
    if (wordCount > 50 && hasKeywords) {
      score = "excellent";
    } else if (wordCount > 30 || hasKeywords) {
      score = "good";
    } else {
      score = "basic";
    }

    setFeedback({
      score,
      strengths: [
        "Clear explanation of the core concept",
        "Good use of everyday language",
        score === "excellent" ? "Excellent real-world connection" : "",
      ].filter(Boolean),
      improvements:
        score !== "excellent"
          ? [
              "Consider adding WHY decentralization matters",
              "You could mention the limited supply aspect",
            ]
          : [],
      summary:
        score === "excellent"
          ? "Great work! You clearly understand the fundamentals. Your explanation shows deep comprehension of the topic."
          : score === "good"
          ? "Good effort! You've grasped the main concepts. Adding more detail would make your explanation even stronger."
          : "You're on the right track! Try to expand on your answer with more specific details.",
      xp: xpRewards[score],
    });

    setIsLoading(false);
  };

  const handleRetry = () => {
    setFeedback(null);
    setResponse("");
  };

  const handleComplete = () => {
    if (feedback) {
      onComplete(feedback.score, feedback.xp);
    }
  };

  const scoreLabels = {
    basic: { text: "GOOD START", emoji: "⭐", color: "text-warning" },
    good: { text: "SOLID", emoji: "⭐⭐", color: "text-primary" },
    excellent: { text: "EXCELLENT", emoji: "⭐⭐⭐", color: "text-success" },
  };

  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-primary/20 p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-display font-bold mb-2">
              ✨ Now It's Your Turn
            </h2>
            <p className="text-muted-foreground">
              Explain what you learned in YOUR words and get personalized AI feedback.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!feedback ? (
              <motion.div key="input" exit={{ opacity: 0 }}>
                <div className="bg-card rounded-xl p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2">📝 Your Task:</p>
                  <p className="text-foreground font-medium">{prompt}</p>
                </div>

                <div className="relative">
                  <Textarea
                    value={response}
                    onChange={(e) => setResponse(e.target.value.slice(0, maxChars))}
                    placeholder="Crypto is basically digital money that..."
                    className="min-h-[180px] resize-none text-base"
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                    {response.length} / {maxChars}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-2 mb-4">
                  Min: {minChars} characters • Pro tip: The more detail, the better feedback!
                </p>

                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit || isLoading}
                  className="w-full bg-gradient-primary hover:opacity-90 gap-2"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      AI is analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get AI Feedback 🤖
                    </>
                  )}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Score badge */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-current ${scoreLabels[feedback.score].color} font-bold text-lg`}
                  >
                    Score: {scoreLabels[feedback.score].text}{" "}
                    {scoreLabels[feedback.score].emoji}
                  </motion.div>
                </div>

                {/* Strengths */}
                {feedback.strengths.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-success mb-2">
                      ✅ What You Nailed:
                    </h4>
                    <ul className="space-y-1">
                      {feedback.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-foreground/80">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Improvements */}
                {feedback.improvements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      💡 To Level Up:
                    </h4>
                    <ul className="space-y-1">
                      {feedback.improvements.map((s, i) => (
                        <li key={i} className="text-sm text-foreground/80">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Summary */}
                <div className="p-4 bg-card rounded-xl mb-6">
                  <p className="text-sm text-foreground/90">{feedback.summary}</p>
                </div>

                {/* XP reward */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-xp/10 rounded-full text-xp font-bold">
                    <Sparkles className="w-4 h-4" />
                    +{feedback.xp} XP
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Attempts: {attempts}/3
                  </p>
                </motion.div>

                {/* Actions */}
                <div className="flex gap-3">
                  {attempts < 3 && feedback.score !== "excellent" && (
                    <Button
                      onClick={handleRetry}
                      variant="outline"
                      className="flex-1 gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </Button>
                  )}
                  <Button
                    onClick={handleComplete}
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                  >
                    Mark Complete & Continue →
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
