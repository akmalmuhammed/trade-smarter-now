import { PieChart } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const ETFs = () => {
  return (
    <AssetClassTemplate
      name="ETF"
      tagline="Build wealth with diversified, low-cost investments."
      description="ETFs combine the best of stocks and mutual funds. Learn to build a diversified portfolio, trade sector rotations, and use ETFs for both investing and active trading strategies."
      icon={PieChart}
      gradient="from-teal-500 to-emerald-500"
      stats={{
        students: "3.2K+",
        lessons: "35",
        rating: "4.8"
      }}
      benefits={[
        "Understand how ETFs work",
        "Build a diversified portfolio",
        "Trade sector and thematic ETFs",
        "Learn asset allocation strategies",
        "Compare expense ratios and tracking",
        "Use leveraged and inverse ETFs safely"
      ]}
      modules={{
        beginner: {
          title: "ETF Essentials",
          lessons: 10,
          duration: "3 hours",
          topics: [
            "What are ETFs?",
            "ETFs vs mutual funds",
            "Index ETFs explained",
            "Reading ETF data",
            "Your first ETF purchase"
          ]
        },
        intermediate: {
          title: "ETF Strategies",
          lessons: 12,
          duration: "4 hours",
          topics: [
            "Sector rotation",
            "Asset allocation",
            "Factor investing",
            "Dividend ETFs",
            "International exposure"
          ]
        },
        advanced: {
          title: "Advanced ETF Trading",
          lessons: 13,
          duration: "4.5 hours",
          topics: [
            "Leveraged ETFs",
            "Inverse ETFs",
            "Options on ETFs",
            "Thematic investing",
            "Tax optimization"
          ]
        }
      }}
      faqs={[
        {
          question: "What's the difference between ETFs and mutual funds?",
          answer: "ETFs trade like stocks throughout the day, have lower fees, and offer more tax efficiency."
        },
        {
          question: "Are ETFs good for beginners?",
          answer: "Absolutely! ETFs offer instant diversification. SPY or VOO are perfect first investments."
        },
        {
          question: "What about leveraged ETFs?",
          answer: "They're for experienced traders only. We cover them in advanced lessons with proper risk warnings."
        },
        {
          question: "How many ETFs do I need?",
          answer: "You can build a complete portfolio with 3-5 ETFs. We teach you exactly which ones to choose."
        }
      ]}
    />
  );
};

export default ETFs;