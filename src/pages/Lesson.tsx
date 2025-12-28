import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Lightbulb, 
  Sparkles,
  Trophy,
  BookOpen,
  ArrowRight,
  Zap,
  Target,
  X,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Lesson content sections
const lessonSections = [
  {
    id: 1,
    type: "intro",
    title: "What is Cryptocurrency?",
    content: `Cryptocurrency is a **digital or virtual currency** that uses cryptography for security. Unlike traditional money issued by governments (called fiat currency), cryptocurrencies operate on **decentralized networks** based on blockchain technology.

Think of it like digital cash that doesn't need a bank to verify transactions. Instead, a network of computers around the world keeps track of who owns what.`,
    highlight: {
      term: "blockchain",
      definition: "A distributed digital ledger that records all transactions across a network of computers, making it nearly impossible to alter past records."
    }
  },
  {
    id: 2,
    type: "concept",
    title: "Key Characteristics",
    content: `Cryptocurrencies have several unique properties that make them different from traditional money:`,
    points: [
      {
        icon: "🔐",
        title: "Decentralized",
        description: "No single authority controls the network. Power is distributed across thousands of computers worldwide."
      },
      {
        icon: "🌐",
        title: "Borderless",
        description: "Send money anywhere in the world, 24/7, without needing permission from banks or governments."
      },
      {
        icon: "🔒",
        title: "Secure",
        description: "Cryptographic security makes it extremely difficult to counterfeit or double-spend."
      },
      {
        icon: "📖",
        title: "Transparent",
        description: "All transactions are recorded on a public ledger that anyone can verify."
      }
    ]
  },
  {
    id: 3,
    type: "insight",
    title: "Did You Know?",
    content: `The first Bitcoin transaction for a physical good happened on May 22, 2010, when Laszlo Hanyecz paid **10,000 BTC** for two pizzas.

At today's prices, those pizzas would be worth over **$400 million**! 🍕

This day is now celebrated as "Bitcoin Pizza Day" in the crypto community.`,
    callout: "This story illustrates how far crypto has come - and why early adopters wish they'd held onto their coins!"
  },
  {
    id: 4,
    type: "quiz",
    title: "Quick Check",
    question: "What makes cryptocurrency different from traditional money?",
    options: [
      { id: "a", text: "It's controlled by a central bank", correct: false },
      { id: "b", text: "It operates on a decentralized network", correct: true },
      { id: "c", text: "It can only be used online", correct: false },
      { id: "d", text: "It's backed by gold", correct: false }
    ],
    explanation: "Cryptocurrencies operate on decentralized networks, meaning no single authority (like a central bank) controls them. This is one of their defining characteristics!"
  },
  {
    id: 5,
    type: "concept",
    title: "How Transactions Work",
    content: `When you send cryptocurrency to someone, here's what happens behind the scenes:`,
    steps: [
      { step: 1, title: "Initiate", description: "You create a transaction using your private key (like a digital signature)" },
      { step: 2, title: "Broadcast", description: "The transaction is sent to the network of computers (nodes)" },
      { step: 3, title: "Verify", description: "Nodes check that you have enough balance and the signature is valid" },
      { step: 4, title: "Confirm", description: "The transaction is added to a block and permanently recorded" }
    ]
  },
  {
    id: 6,
    type: "summary",
    title: "Key Takeaways",
    points: [
      "Cryptocurrency is digital money secured by cryptography",
      "It operates on decentralized networks without central control",
      "Blockchain technology makes transactions transparent and secure",
      "Transactions are verified by a network of computers, not banks"
    ],
    xpEarned: 50
  }
];

function LessonIntro({ section, onContinue }: { section: typeof lessonSections[0]; onContinue: () => void }) {
  const [showHighlight, setShowHighlight] = useState(false);

  const renderContent = (text: string) => {
    // Parse markdown-style bold text
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? (
        <span 
          key={i} 
          className="font-semibold text-primary cursor-pointer hover:underline"
          onClick={() => section.highlight?.term === part.toLowerCase() && setShowHighlight(true)}
        >
          {part}
        </span>
      ) : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="prose prose-lg prose-invert max-w-none">
        {section.content?.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-lg text-muted-foreground leading-relaxed">
            {renderContent(paragraph)}
          </p>
        ))}
      </div>

      {/* Highlight tooltip */}
      <AnimatePresence>
        {showHighlight && section.highlight && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card rounded-xl p-4 border-primary/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground capitalize">{section.highlight.term}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{section.highlight.definition}</p>
                </div>
              </div>
              <button onClick={() => setShowHighlight(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button onClick={onContinue} className="gap-2">
        Continue <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

function LessonConcept({ section, onContinue }: { section: typeof lessonSections[0]; onContinue: () => void }) {
  const [revealedPoints, setRevealedPoints] = useState<number[]>([]);
  
  const points = section.points || [];
  const steps = section.steps || [];
  const allRevealed = points.length > 0 
    ? revealedPoints.length === points.length 
    : revealedPoints.length === steps.length;

  const revealNext = () => {
    const nextIndex = revealedPoints.length;
    const maxItems = points.length || steps.length;
    if (nextIndex < maxItems) {
      setRevealedPoints([...revealedPoints, nextIndex]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <p className="text-lg text-muted-foreground">{section.content}</p>

      {/* Points grid */}
      {points.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: revealedPoints.includes(index) ? 1 : 0.3,
                scale: revealedPoints.includes(index) ? 1 : 0.95
              }}
              className={cn(
                "glass-card rounded-xl p-5 transition-all cursor-pointer",
                revealedPoints.includes(index) ? "border-primary/30" : "border-transparent"
              )}
              onClick={() => !revealedPoints.includes(index) && revealNext()}
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Steps timeline */}
      {steps.length > 0 && (
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: revealedPoints.includes(index) ? 1 : 0.3,
                x: revealedPoints.includes(index) ? 0 : -10
              }}
              className={cn(
                "flex gap-4 cursor-pointer",
                !revealedPoints.includes(index) && "hover:opacity-50"
              )}
              onClick={() => !revealedPoints.includes(index) && revealNext()}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors",
                revealedPoints.includes(index) 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {step.step}
              </div>
              <div className={cn(
                "glass-card rounded-xl p-4 flex-1 transition-all",
                revealedPoints.includes(index) && "border-primary/30"
              )}>
                <h4 className="font-semibold text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {!allRevealed ? (
        <Button variant="outline" onClick={revealNext} className="gap-2">
          <Zap className="w-4 h-4" /> Tap to reveal next
        </Button>
      ) : (
        <Button onClick={onContinue} className="gap-2">
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </motion.div>
  );
}

function LessonInsight({ section, onContinue }: { section: typeof lessonSections[0]; onContinue: () => void }) {
  const renderContent = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? <span key={i} className="font-semibold text-primary">{part}</span> : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          {section.content?.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {renderContent(paragraph)}
            </p>
          ))}
        </div>

        {section.callout && (
          <div className="mt-4 p-4 rounded-xl bg-background/50 border border-border/50">
            <p className="text-sm text-muted-foreground italic">💡 {section.callout}</p>
          </div>
        )}
      </div>

      <Button onClick={onContinue} className="gap-2">
        Continue <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

function LessonQuiz({ section, onContinue }: { section: typeof lessonSections[0]; onContinue: () => void }) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const options = section.options || [];
  const isCorrect = options.find(o => o.id === selectedOption)?.correct;

  const handleSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedOption(optionId);
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-card rounded-2xl p-6 border-accent/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
            <Target className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <span className="text-sm text-accent font-medium">Knowledge Check</span>
            <h3 className="text-xl font-bold text-foreground">{section.question}</h3>
          </div>
        </div>

        <div className="space-y-3">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const showCorrectness = showResult && isSelected;
            
            return (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                whileHover={{ scale: showResult ? 1 : 1.01 }}
                whileTap={{ scale: showResult ? 1 : 0.99 }}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all flex items-center gap-3",
                  "border-2",
                  !showResult && !isSelected && "border-border/50 hover:border-primary/50 bg-card/50",
                  !showResult && isSelected && "border-primary bg-primary/10",
                  showResult && isSelected && option.correct && "border-green-500 bg-green-500/10",
                  showResult && isSelected && !option.correct && "border-red-500 bg-red-500/10",
                  showResult && !isSelected && option.correct && "border-green-500/50 bg-green-500/5"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                  !showResult && !isSelected && "bg-muted text-muted-foreground",
                  !showResult && isSelected && "bg-primary text-primary-foreground",
                  showResult && option.correct && "bg-green-500 text-white",
                  showResult && isSelected && !option.correct && "bg-red-500 text-white"
                )}>
                  {showCorrectness ? (
                    option.correct ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />
                  ) : (
                    option.id.toUpperCase()
                  )}
                </div>
                <span className="text-foreground">{option.text}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Result feedback */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6"
            >
              <div className={cn(
                "p-4 rounded-xl",
                isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"
              )}>
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-green-500">Correct! +10 XP</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-red-500">Not quite!</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{section.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!showResult ? (
        <Button onClick={handleCheck} disabled={!selectedOption} className="gap-2">
          Check Answer
        </Button>
      ) : (
        <Button onClick={onContinue} className="gap-2">
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </motion.div>
  );
}

function LessonSummary({ section, onComplete }: { section: typeof lessonSections[0]; onComplete: () => void }) {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleComplete = () => {
    setShowCelebration(true);
    setTimeout(onComplete, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
        </div>

        <ul className="space-y-3">
          {section.points?.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* XP Earned */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Lesson Complete!</h3>
        <p className="text-muted-foreground mb-4">You've earned</p>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 text-primary font-bold text-xl">
          <Sparkles className="w-5 h-5" />
          +{section.xpEarned} XP
        </div>
      </motion.div>

      <Button onClick={handleComplete} size="lg" className="w-full gap-2">
        <ArrowRight className="w-5 h-5" />
        Continue to Next Lesson
      </Button>

      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-foreground">Great job!</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Lesson = () => {
  const { id } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  
  const section = lessonSections[currentSection];
  const progress = ((currentSection + 1) / lessonSections.length) * 100;

  const goToNext = () => {
    if (currentSection < lessonSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleComplete = () => {
    // Navigate to next lesson or courses page
    window.location.href = "/courses";
  };

  const renderSection = () => {
    switch (section.type) {
      case "intro":
        return <LessonIntro section={section} onContinue={goToNext} />;
      case "concept":
        return <LessonConcept section={section} onContinue={goToNext} />;
      case "insight":
        return <LessonInsight section={section} onContinue={goToNext} />;
      case "quiz":
        return <LessonQuiz section={section} onContinue={goToNext} />;
      case "summary":
        return <LessonSummary section={section} onComplete={handleComplete} />;
      default:
        return <LessonIntro section={section} onContinue={goToNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/crypto" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Exit</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  {currentSection + 1} / {lessonSections.length}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-primary font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>0 XP</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="pb-3">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-28 pb-24 px-4">
        <div className="container max-w-2xl mx-auto">
          {/* Section title */}
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 capitalize">
              {section.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {section.title}
            </h1>
          </motion.div>

          {/* Section content */}
          <AnimatePresence mode="wait">
            <div key={section.id}>
              {renderSection()}
            </div>
          </AnimatePresence>
        </div>
      </main>

      {/* Navigation dots */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-t border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            {lessonSections.map((_, index) => (
              <button
                key={index}
                onClick={() => index <= currentSection && setCurrentSection(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentSection && "w-8 bg-primary",
                  index < currentSection && "bg-primary/50",
                  index > currentSection && "bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lesson;
