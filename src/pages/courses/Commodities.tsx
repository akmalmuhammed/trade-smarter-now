import { Gem } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Commodities = () => {
  return (
    <AssetClassTemplate
      name="Commodities"
      tagline="Trade gold, oil, and agricultural products like a pro."
      description="Commodities have been traded for thousands of years. Learn to profit from precious metals, energy, and agricultural products using time-tested strategies and modern analysis techniques."
      icon={Gem}
      gradient="from-yellow-500 to-amber-600"
      stats={{
        students: "2.4K+",
        lessons: "38",
        rating: "4.8"
      }}
      benefits={[
        "Understand commodity market dynamics",
        "Trade gold and silver effectively",
        "Analyze oil and energy markets",
        "Learn seasonal trading patterns",
        "Hedge against inflation",
        "Diversify your trading portfolio"
      ]}
      modules={{
        beginner: {
          title: "Commodities 101",
          lessons: 10,
          duration: "3 hours",
          topics: [
            "What are commodities?",
            "Precious metals basics",
            "Energy market overview",
            "Agricultural commodities",
            "Ways to trade commodities"
          ]
        },
        intermediate: {
          title: "Commodity Strategies",
          lessons: 14,
          duration: "4.5 hours",
          topics: [
            "Gold trading strategies",
            "Oil price analysis",
            "Supply & demand factors",
            "Seasonal patterns",
            "ETF vs futures"
          ]
        },
        advanced: {
          title: "Advanced Commodities",
          lessons: 14,
          duration: "5 hours",
          topics: [
            "Macro analysis",
            "Spread trading",
            "Geopolitical impacts",
            "Hedging strategies",
            "Portfolio allocation"
          ]
        }
      }}
      faqs={[
        {
          question: "Do I need to take physical delivery of commodities?",
          answer: "No! We focus on trading commodity ETFs, CFDs, and futures which are all cash-settled."
        },
        {
          question: "Is gold a good investment?",
          answer: "Gold can be great for diversification and inflation hedging. We teach you when and how to trade it."
        },
        {
          question: "What affects commodity prices?",
          answer: "Supply, demand, geopolitics, weather, and currency movements. Our course covers all these factors."
        },
        {
          question: "Which commodities are best for beginners?",
          answer: "We recommend starting with gold and oil due to their liquidity and abundant analysis resources."
        }
      ]}
    />
  );
};

export default Commodities;