import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { LessonHero } from "@/components/lesson/LessonHero";
import { LessonRoadmap } from "@/components/lesson/LessonRoadmap";
import { LessonQuiz } from "@/components/lesson/LessonQuiz";
import { AIFeedback } from "@/components/lesson/AIFeedback";
import { LessonComplete } from "@/components/lesson/LessonComplete";
import { TextBlock } from "@/components/lesson/blocks/TextBlock";
import { DefinitionBlock } from "@/components/lesson/blocks/DefinitionBlock";
import { ComparisonBlock } from "@/components/lesson/blocks/ComparisonBlock";
import { QuestionBlock } from "@/components/lesson/blocks/QuestionBlock";
import { ExampleBlock } from "@/components/lesson/blocks/ExampleBlock";
import { KeyTakeawaysBlock } from "@/components/lesson/blocks/KeyTakeawaysBlock";
import { MythBlock } from "@/components/lesson/blocks/MythBlock";
import { InteractiveBlock } from "@/components/lesson/blocks/InteractiveBlock";

const Lesson = () => {
  const { id } = useParams();
  const [started, setStarted] = useState(false);
  const [xp, setXp] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [aiCompleted, setAiCompleted] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [aiScore, setAiScore] = useState<{ score: string; xp: number } | null>(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const lessonData = {
    title: "What is Cryptocurrency?",
    description: "Learn the basics of digital money in 12 minutes. No tech background needed.",
    learningPoints: [
      "What crypto actually is",
      "How it differs from regular money",
      "Why traders care about it",
    ],
    duration: 12,
    xpReward: 50,
    difficulty: "Beginner",
    completions: 1247,
  };

  const roadmapSteps = [
    { id: "intro", label: "Intro", completed: started, current: started && currentStep === 0 },
    { id: "what", label: "What is it", completed: questionsAnswered >= 1, current: started && questionsAnswered === 0 },
    { id: "why", label: "Why care", completed: questionsAnswered >= 2, current: questionsAnswered === 1 },
    { id: "how", label: "How works", completed: questionsAnswered >= 3, current: questionsAnswered === 2 },
    { id: "quiz", label: "Quiz", completed: quizCompleted, current: questionsAnswered >= 3 && !quizCompleted },
    { id: "finish", label: "Finish", completed: showComplete, current: quizCompleted && !showComplete },
  ];

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleQuestionCorrect = () => {
    setXp((x) => x + 5);
    setQuestionsAnswered((q) => q + 1);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setXp((x) => x + 25);
  };

  const handleAiComplete = (score: "basic" | "good" | "excellent", xpEarned: number) => {
    setAiCompleted(true);
    setAiScore({ score, xp: xpEarned });
    setXp((x) => x + xpEarned);
    setTimeout(() => setShowComplete(true), 500);
  };

  const progress = Math.min(
    100,
    (questionsAnswered / 3) * 50 + (quizCompleted ? 25 : 0) + (aiCompleted ? 25 : 0)
  );
  const timeLeft = Math.max(1, Math.round(12 - (progress / 100) * 12));

  return (
    <div className="min-h-screen bg-background">
      {started && (
        <LessonHeader
          courseTitle="Crypto Foundations"
          lessonNumber={1}
          totalLessons={10}
          progress={progress}
          timeLeft={timeLeft}
          xp={xp}
        />
      )}

      {!started && <LessonHero {...lessonData} onStart={handleStart} />}

      {started && (
        <>
          <LessonRoadmap steps={roadmapSteps} />

          <div ref={contentRef} className="pb-20">
            {/* Section 1: Hook */}
            <TextBlock
              icon="💡"
              heading="Here's Something Wild"
              paragraphs={[
                "Most people think cryptocurrency is just Bitcoin. Wrong.",
                "There are over 20,000 different cryptocurrencies, and understanding the difference could save you thousands of dollars.",
                "By the end of this lesson, you'll know exactly what crypto is, why it exists, and why traders care about it. Let's dive in.",
              ]}
            />

            {/* Section 2: Definition */}
            <DefinitionBlock
              icon="📖"
              term="What is Cryptocurrency?"
              definition="Cryptocurrency is digital money that exists only on the internet. You can't hold it in your hand, but you can buy, sell, and trade it just like regular money. The key difference? No bank controls it."
            />

            {/* Section 3: Comparison Table */}
            <ComparisonBlock
              title="Traditional Money vs Cryptocurrency"
              rows={[
                { feature: "Controlled by", traditional: "Banks/Govt", crypto: "No one" },
                { feature: "Physical form", traditional: true, crypto: false },
                { feature: "Send globally", traditional: "Slow, expensive", crypto: "Fast, cheap" },
                { feature: "Privacy", traditional: "Tracked", crypto: "More private" },
                { feature: "Can be frozen", traditional: true, crypto: false },
              ]}
              summary="See the difference? Crypto gives you more control."
            />

            {/* Section 4: Quick Check 1 */}
            {questionsAnswered < 1 && (
              <QuestionBlock
                question="Who controls cryptocurrency?"
                options={["Banks", "Governments", "Tech companies", "No single entity"]}
                correctIndex={3}
                explanation="Crypto is decentralized - no single authority controls it. This is what makes it revolutionary."
                xpReward={5}
                onCorrect={handleQuestionCorrect}
              />
            )}

            {questionsAnswered >= 1 && (
              <>
                {/* Section 5: Real World Example */}
                <ExampleBlock
                  title="Real-World Example"
                  scenario="Meet Sarah. She lives in California and wants to send $500 to her cousin in the Philippines."
                  traditional={{
                    label: "Traditional way:",
                    items: [
                      "Go to Western Union",
                      "Pay $35 transfer fee",
                      "Wait 3-5 days",
                      "Cousin receives $465 (after fees)",
                    ],
                  }}
                  crypto={{
                    label: "Using crypto:",
                    items: [
                      "Send from phone app",
                      "Pay $2 transaction fee",
                      "Arrives in 10 minutes",
                      "Cousin receives $498",
                    ],
                  }}
                  conclusion="That's $33 saved and 5 days faster. This is why millions use crypto for international transfers."
                />

                {/* Section 6: Quick Check 2 */}
                {questionsAnswered < 2 && (
                  <QuestionBlock
                    question="What is the main advantage of using crypto for international transfers?"
                    options={[
                      "It's more regulated",
                      "Faster and cheaper than banks",
                      "Guaranteed profit",
                      "No internet needed",
                    ]}
                    correctIndex={1}
                    explanation="Crypto transfers are typically faster (minutes vs days) and cheaper (low fees vs high bank fees) than traditional methods."
                    xpReward={5}
                    onCorrect={handleQuestionCorrect}
                  />
                )}
              </>
            )}

            {questionsAnswered >= 2 && (
              <>
                {/* Section 7: Interactive Price Chart */}
                <InteractiveBlock
                  title="Bitcoin Price Over Time"
                  data={[
                    { year: 2010, price: 0.08 },
                    { year: 2013, price: 1100 },
                    { year: 2015, price: 300 },
                    { year: 2017, price: 19000 },
                    { year: 2019, price: 7200 },
                    { year: 2021, price: 64000 },
                    { year: 2023, price: 45000 },
                  ]}
                  insight="See how volatile crypto is? This is why traders can make (or lose) money quickly."
                />

                {/* Section 8: Myth Buster */}
                <MythBlock
                  myth="Cryptocurrency is only used by criminals."
                  reality="While early crypto did attract illegal activity, today 99% of crypto transactions are legitimate. Major companies like Tesla, Microsoft, and PayPal now accept crypto. The blockchain is actually MORE transparent than cash - every transaction is recorded permanently."
                />

                {/* Section 9: Quick Check 3 */}
                {questionsAnswered < 3 && (
                  <QuestionBlock
                    question="Why is Bitcoin's price history important for traders?"
                    options={[
                      "It always goes up",
                      "It shows high volatility = opportunity and risk",
                      "Banks set the price",
                      "The price never changes",
                    ]}
                    correctIndex={1}
                    explanation="Bitcoin's volatile price history shows both the opportunity for gains and the risk of losses. Understanding this volatility is key for traders."
                    xpReward={5}
                    onCorrect={handleQuestionCorrect}
                  />
                )}
              </>
            )}

            {questionsAnswered >= 3 && (
              <>
                {/* Section 10: Key Takeaways */}
                <KeyTakeawaysBlock
                  takeaways={[
                    "Crypto is digital money that exists only online",
                    "No bank or government controls it (decentralized)",
                    "Uses blockchain technology for security",
                    "Faster and cheaper than traditional transfers",
                    "Bitcoin is just one of 20,000+ cryptocurrencies",
                    "High volatility means opportunity AND risk",
                  ]}
                />

                {/* Section 11: Final Quiz */}
                {!quizCompleted && (
                  <LessonQuiz
                    questions={[
                      {
                        question: "What is the main advantage of cryptocurrency over traditional banking?",
                        options: [
                          "It's completely anonymous",
                          "No intermediaries needed for transactions",
                          "Guaranteed to increase in value",
                          "It's backed by gold",
                        ],
                        correctIndex: 1,
                        explanation: "Cutting out intermediaries (banks) is the key benefit of crypto.",
                      },
                      {
                        question: "How many cryptocurrencies exist today?",
                        options: ["Just Bitcoin", "About 100", "Over 20,000", "Exactly 1,000"],
                        correctIndex: 2,
                        explanation: "There are over 20,000 different cryptocurrencies available today.",
                      },
                      {
                        question: "What technology powers cryptocurrency?",
                        options: ["Cloud computing", "Blockchain", "Artificial Intelligence", "5G networks"],
                        correctIndex: 1,
                        explanation: "Blockchain is the underlying technology that makes crypto secure and decentralized.",
                      },
                    ]}
                    xpReward={25}
                    onComplete={handleQuizComplete}
                  />
                )}

                {/* Section 12: AI Feedback */}
                {quizCompleted && !aiCompleted && (
                  <AIFeedback
                    prompt="Imagine your friend asks: 'What is cryptocurrency and why should I care about it?' Write your explanation below (like you're texting them):"
                    minChars={100}
                    maxChars={1000}
                    xpRewards={{ basic: 50, good: 75, excellent: 100 }}
                    onComplete={handleAiComplete}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}

      {/* Completion Modal */}
      {showComplete && (
        <LessonComplete
          totalXp={xp}
          lessonXp={50}
          quizXp={25}
          aiXp={aiScore?.xp || 0}
          currentLevel={1}
          xpToNextLevel={1000}
          currentXpInLevel={xp}
          badge={{ name: "First Steps", description: "Complete your first lesson", emoji: "🎯" }}
          courseProgress={10}
          totalLessons={10}
          completedLessons={1}
          nextLessonTitle="How Blockchain Works"
          nextLessonId="blockchain-basics"
        />
      )}
    </div>
  );
};

export default Lesson;
