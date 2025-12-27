import { Timer } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Futures = () => {
  return (
    <AssetClassTemplate
      name="Futures"
      tagline="Trade index and commodity futures with institutional-grade strategies."
      description="Futures markets offer unparalleled leverage and liquidity. Learn to trade S&P 500 futures, crude oil, gold, and more using the same techniques as professional traders."
      icon={Timer}
      gradient="from-red-500 to-rose-600"
      stats={{
        students: "2.1K+",
        lessons: "42",
        rating: "4.8"
      }}
      benefits={[
        "Understand futures contracts and margin",
        "Trade index futures (ES, NQ, YM)",
        "Learn commodity futures strategies",
        "Master order flow and tape reading",
        "Use leverage responsibly",
        "Develop a futures trading plan"
      ]}
      modules={{
        beginner: {
          title: "Futures Fundamentals",
          lessons: 10,
          duration: "3.5 hours",
          topics: [
            "What are futures?",
            "Margin and leverage",
            "Contract specifications",
            "Trading hours",
            "Your first futures trade"
          ]
        },
        intermediate: {
          title: "Futures Trading",
          lessons: 14,
          duration: "5 hours",
          topics: [
            "Index futures strategies",
            "Volume profile",
            "Market structure",
            "Order flow basics",
            "Risk management"
          ]
        },
        advanced: {
          title: "Professional Futures",
          lessons: 18,
          duration: "6.5 hours",
          topics: [
            "Tape reading mastery",
            "Spread trading",
            "Roll dates and contango",
            "Algorithmic concepts",
            "Position sizing models"
          ]
        }
      }}
      faqs={[
        {
          question: "What's the difference between futures and stocks?",
          answer: "Futures are contracts to buy/sell at a future date. They offer more leverage and trade nearly 24 hours."
        },
        {
          question: "How much capital do I need for futures?",
          answer: "Micro futures let you start with as little as $500, but we recommend $5,000+ for proper risk management."
        },
        {
          question: "Are futures suitable for beginners?",
          answer: "We recommend understanding stocks first. Our futures course assumes you know basic trading concepts."
        },
        {
          question: "Which futures should I start with?",
          answer: "Micro E-mini S&P 500 (MES) is perfect for learning due to its smaller size and high liquidity."
        }
      ]}
    />
  );
};

export default Futures;