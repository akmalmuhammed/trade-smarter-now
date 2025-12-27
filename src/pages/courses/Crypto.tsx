import { Bitcoin } from "lucide-react";
import { AssetClassTemplate } from "@/components/AssetClassTemplate";

const Crypto = () => {
  return (
    <AssetClassTemplate
      name="Crypto"
      tagline="Learn to trade Bitcoin, Ethereum, and altcoins like a pro."
      description="Cryptocurrency is the future of finance. Our comprehensive course covers everything from blockchain basics to advanced DeFi strategies, giving you the skills to navigate the volatile but lucrative world of crypto trading."
      icon={Bitcoin}
      gradient="from-orange-500 to-yellow-500"
      stats={{
        students: "5.2K+",
        lessons: "45",
        rating: "4.9"
      }}
      benefits={[
        "Understand blockchain technology and how crypto works",
        "Learn to analyze crypto charts and identify trends",
        "Master risk management for volatile markets",
        "Explore DeFi, NFTs, and emerging crypto sectors",
        "Build a diversified crypto portfolio",
        "Use technical indicators specific to crypto markets"
      ]}
      modules={{
        beginner: {
          title: "Crypto Foundations",
          lessons: 10,
          duration: "3 hours",
          topics: [
            "What is cryptocurrency?",
            "How blockchain works",
            "Setting up wallets",
            "Reading crypto charts",
            "Your first trade"
          ]
        },
        intermediate: {
          title: "Crypto Strategies",
          lessons: 15,
          duration: "5 hours",
          topics: [
            "Technical analysis for crypto",
            "Trading altcoins",
            "DeFi fundamentals",
            "Risk management",
            "Portfolio diversification"
          ]
        },
        advanced: {
          title: "Pro Crypto Trading",
          lessons: 20,
          duration: "7 hours",
          topics: [
            "Advanced chart patterns",
            "Leverage trading",
            "Yield farming strategies",
            "Market cycles",
            "Institutional analysis"
          ]
        }
      }}
      faqs={[
        {
          question: "Do I need to own crypto to take this course?",
          answer: "No! We start from the very basics. You'll learn how to buy, store, and trade crypto as part of the course."
        },
        {
          question: "Is crypto trading risky?",
          answer: "Yes, crypto is volatile. That's why our course heavily emphasizes risk management and teaches you to protect your capital."
        },
        {
          question: "Which cryptocurrencies will I learn to trade?",
          answer: "We cover Bitcoin, Ethereum, and major altcoins. The strategies you learn apply to any cryptocurrency."
        },
        {
          question: "How is this different from YouTube tutorials?",
          answer: "Our course is structured, interactive, and includes AI feedback on your understanding. No more random videos!"
        }
      ]}
    />
  );
};

export default Crypto;