import { Landmark } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Bonds = () => {
  return (
    <AssetClassTemplate
      name="Bond"
      tagline="Master fixed income investing for stable returns."
      description="Bonds are the foundation of any balanced portfolio. Learn to analyze government and corporate bonds, understand interest rate dynamics, and generate consistent income from fixed income investments."
      icon={Landmark}
      gradient="from-slate-500 to-zinc-600"
      stats={{
        students: "1.8K+",
        lessons: "32",
        rating: "4.7"
      }}
      benefits={[
        "Understand how bonds work",
        "Analyze yield curves and rates",
        "Trade government and corporate bonds",
        "Build a fixed income portfolio",
        "Hedge against market volatility",
        "Generate consistent income"
      ]}
      modules={{
        beginner: {
          title: "Bond Basics",
          lessons: 10,
          duration: "3 hours",
          topics: [
            "What are bonds?",
            "Yield and price relationship",
            "Types of bonds",
            "Credit ratings",
            "Buying your first bond"
          ]
        },
        intermediate: {
          title: "Bond Strategies",
          lessons: 12,
          duration: "4 hours",
          topics: [
            "Yield curve analysis",
            "Duration and convexity",
            "Bond laddering",
            "Corporate bond selection",
            "Municipal bonds"
          ]
        },
        advanced: {
          title: "Advanced Fixed Income",
          lessons: 10,
          duration: "3.5 hours",
          topics: [
            "Interest rate forecasting",
            "Bond ETF strategies",
            "High-yield bonds",
            "International bonds",
            "Portfolio construction"
          ]
        }
      }}
      faqs={[
        {
          question: "Are bonds boring?",
          answer: "They're stable, not boring! Bond trading can be very profitable, especially during rate changes."
        },
        {
          question: "Why should I learn about bonds?",
          answer: "Bonds balance your portfolio. In stock crashes, bonds often rise. Every serious investor understands bonds."
        },
        {
          question: "What's a good bond for beginners?",
          answer: "Treasury bonds are the safest. We also cover bond ETFs which are easier to buy than individual bonds."
        },
        {
          question: "How do interest rates affect bonds?",
          answer: "When rates rise, bond prices fall (and vice versa). We teach you to profit from these movements."
        }
      ]}
    />
  );
};

export default Bonds;