import { Layers } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Options = () => {
  return (
    <AssetClassTemplate
      name="Options"
      tagline="Unlock the power of leverage with defined risk."
      description="Options give you the ability to profit in any market direction with limited risk. Learn strategies from basic calls and puts to advanced multi-leg spreads used by professional traders."
      icon={Layers}
      gradient="from-purple-500 to-violet-600"
      stats={{
        students: "3.6K+",
        lessons: "55",
        rating: "4.9"
      }}
      benefits={[
        "Understand calls, puts, and options basics",
        "Learn the Greeks (Delta, Theta, Gamma, Vega)",
        "Master income-generating strategies",
        "Trade directional plays with limited risk",
        "Build multi-leg option spreads",
        "Manage positions and adjust trades"
      ]}
      modules={{
        beginner: {
          title: "Options Basics",
          lessons: 12,
          duration: "4 hours",
          topics: [
            "What are options?",
            "Calls vs puts",
            "Strike prices & expiration",
            "Intrinsic vs extrinsic value",
            "Your first options trade"
          ]
        },
        intermediate: {
          title: "Options Strategies",
          lessons: 18,
          duration: "6 hours",
          topics: [
            "The Greeks explained",
            "Covered calls",
            "Cash-secured puts",
            "Vertical spreads",
            "Iron condors"
          ]
        },
        advanced: {
          title: "Advanced Options",
          lessons: 25,
          duration: "8.5 hours",
          topics: [
            "Volatility trading",
            "Calendar spreads",
            "Ratio spreads",
            "Position management",
            "Portfolio hedging"
          ]
        }
      }}
      faqs={[
        {
          question: "Are options riskier than stocks?",
          answer: "Options can be used to reduce risk! Strategies like covered calls and protective puts are actually conservative."
        },
        {
          question: "How much money do I need to trade options?",
          answer: "You can start with a few hundred dollars, but we recommend at least $2,000 for meaningful position sizes."
        },
        {
          question: "What are the Greeks?",
          answer: "Greeks measure how options prices change. Don't worry - we break them down into simple, understandable concepts."
        },
        {
          question: "Can I lose more than I invest?",
          answer: "With buying options, your max loss is what you paid. We teach you to avoid undefined-risk strategies as a beginner."
        }
      ]}
    />
  );
};

export default Options;