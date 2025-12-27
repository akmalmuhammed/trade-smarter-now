import { TrendingUp } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Stocks = () => {
  return (
    <AssetClassTemplate
      name="Stock"
      tagline="Build wealth through smart stock market investing."
      description="The stock market has created more millionaires than any other asset class. Learn proven strategies for day trading, swing trading, and long-term investing that work in any market condition."
      icon={TrendingUp}
      gradient="from-green-500 to-emerald-500"
      stats={{
        students: "8.1K+",
        lessons: "52",
        rating: "4.9"
      }}
      benefits={[
        "Understand how the stock market works",
        "Learn fundamental and technical analysis",
        "Master day trading and swing trading strategies",
        "Build a long-term investment portfolio",
        "Analyze company financials and earnings",
        "Manage risk with stop-losses and position sizing"
      ]}
      modules={{
        beginner: {
          title: "Stock Market Basics",
          lessons: 10,
          duration: "3.5 hours",
          topics: [
            "How stocks work",
            "Market orders & types",
            "Reading stock charts",
            "Understanding indices",
            "Your first stock purchase"
          ]
        },
        intermediate: {
          title: "Active Trading",
          lessons: 18,
          duration: "6 hours",
          topics: [
            "Day trading strategies",
            "Swing trading setups",
            "Technical indicators",
            "Earnings plays",
            "Sector rotation"
          ]
        },
        advanced: {
          title: "Professional Trading",
          lessons: 24,
          duration: "8 hours",
          topics: [
            "Advanced pattern recognition",
            "Algorithmic trading basics",
            "Market psychology",
            "Institutional flow analysis",
            "Building trading systems"
          ]
        }
      }}
      faqs={[
        {
          question: "How much money do I need to start trading stocks?",
          answer: "You can start with as little as $100 with fractional shares. We recommend starting small while learning."
        },
        {
          question: "Is day trading profitable?",
          answer: "It can be, but it requires skill and discipline. Our course teaches you proper risk management first."
        },
        {
          question: "What broker should I use?",
          answer: "We cover popular brokers and help you choose one based on your trading style and location."
        },
        {
          question: "Will I learn about both US and international stocks?",
          answer: "The course focuses on US markets but the strategies apply globally. We touch on international markets too."
        }
      ]}
    />
  );
};

export default Stocks;