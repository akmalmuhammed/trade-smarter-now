import { ArrowLeftRight } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Forex = () => {
  return (
    <AssetClassTemplate
      name="Forex"
      tagline="Trade the world's largest financial market with confidence."
      description="The forex market trades over $6 trillion daily. Learn to profit from currency movements with strategies used by professional traders at banks and hedge funds."
      icon={ArrowLeftRight}
      gradient="from-blue-500 to-cyan-500"
      stats={{
        students: "4.8K+",
        lessons: "48",
        rating: "4.8"
      }}
      benefits={[
        "Understand currency pairs and pip values",
        "Learn to analyze economic indicators",
        "Master technical analysis for forex",
        "Trade major, minor, and exotic pairs",
        "Use leverage responsibly",
        "Develop a consistent trading strategy"
      ]}
      modules={{
        beginner: {
          title: "Forex Fundamentals",
          lessons: 10,
          duration: "3 hours",
          topics: [
            "What is forex trading?",
            "Currency pairs explained",
            "Pips, lots, and leverage",
            "Reading forex charts",
            "Your first forex trade"
          ]
        },
        intermediate: {
          title: "Technical Forex Trading",
          lessons: 16,
          duration: "5.5 hours",
          topics: [
            "Support & resistance",
            "Trend trading strategies",
            "Candlestick patterns",
            "Moving averages",
            "Risk:reward ratios"
          ]
        },
        advanced: {
          title: "Professional Forex",
          lessons: 22,
          duration: "7.5 hours",
          topics: [
            "Economic calendar trading",
            "Multi-timeframe analysis",
            "Position trading",
            "Correlation strategies",
            "Building a trading plan"
          ]
        }
      }}
      faqs={[
        {
          question: "What are the best forex pairs to trade?",
          answer: "We recommend starting with major pairs like EUR/USD, GBP/USD, and USD/JPY due to their liquidity and tighter spreads."
        },
        {
          question: "Is forex trading 24/7?",
          answer: "Forex trades 24 hours a day, 5 days a week. We teach you the best times to trade based on your timezone."
        },
        {
          question: "How much leverage should I use?",
          answer: "We strongly recommend low leverage (1:10 or less) for beginners. Higher leverage means higher risk."
        },
        {
          question: "Can I trade forex with a small account?",
          answer: "Yes! Many brokers offer micro accounts. We teach strategies that work with accounts of any size."
        }
      ]}
    />
  );
};

export default Forex;