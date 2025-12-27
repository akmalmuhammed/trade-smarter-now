import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Medal, 
  Crown,
  Flame,
  TrendingUp,
  Users
} from "lucide-react";
import { useState } from "react";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("global");

  const tabs = [
    { id: "global", label: "Global", icon: Users },
    { id: "weekly", label: "This Week", icon: TrendingUp },
    { id: "friends", label: "Friends", icon: Users },
  ];

  const leaders = [
    { rank: 1, name: "TradingMaster", xp: 15420, streak: 45, avatar: "/placeholder.svg", isYou: false },
    { rank: 2, name: "CryptoQueen", xp: 14280, streak: 32, avatar: "/placeholder.svg", isYou: false },
    { rank: 3, name: "ForexPro", xp: 13150, streak: 28, avatar: "/placeholder.svg", isYou: false },
    { rank: 4, name: "StockSavvy", xp: 11890, streak: 21, avatar: "/placeholder.svg", isYou: false },
    { rank: 5, name: "AlexTrader", xp: 10450, streak: 14, avatar: "/placeholder.svg", isYou: true },
    { rank: 6, name: "MarketMaven", xp: 9820, streak: 19, avatar: "/placeholder.svg", isYou: false },
    { rank: 7, name: "BullRunner", xp: 8940, streak: 12, avatar: "/placeholder.svg", isYou: false },
    { rank: 8, name: "ChartWizard", xp: 8210, streak: 9, avatar: "/placeholder.svg", isYou: false },
    { rank: 9, name: "TrendHunter", xp: 7650, streak: 7, avatar: "/placeholder.svg", isYou: false },
    { rank: 10, name: "TradeNinja", xp: 6890, streak: 5, avatar: "/placeholder.svg", isYou: false },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/30";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-400/30";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-600/30";
      default:
        return "bg-card/50 border-border/50";
    }
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Leaderboard</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Top Learners
            </h1>
            <p className="text-muted-foreground">
              See how you stack up against other traders
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center pt-8">
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden border-4 border-gray-400">
                  <img src={leaders[1].avatar} alt={leaders[1].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
              </div>
              <p className="font-semibold text-foreground text-sm">{leaders[1].name}</p>
              <p className="text-xs text-muted-foreground">{leaders[1].xp.toLocaleString()} XP</p>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center">
              <Crown className="h-8 w-8 text-yellow-500 mb-2" />
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full bg-muted overflow-hidden border-4 border-yellow-500 shadow-lg shadow-yellow-500/30">
                  <img src={leaders[0].avatar} alt={leaders[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
              </div>
              <p className="font-semibold text-foreground">{leaders[0].name}</p>
              <p className="text-sm text-muted-foreground">{leaders[0].xp.toLocaleString()} XP</p>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center pt-12">
              <div className="relative mb-3">
                <div className="w-14 h-14 rounded-full bg-muted overflow-hidden border-4 border-amber-600">
                  <img src={leaders[2].avatar} alt={leaders[2].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
              </div>
              <p className="font-semibold text-foreground text-sm">{leaders[2].name}</p>
              <p className="text-xs text-muted-foreground">{leaders[2].xp.toLocaleString()} XP</p>
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-border/50">
              <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                <div className="col-span-1">Rank</div>
                <div className="col-span-7">Trader</div>
                <div className="col-span-2 text-right">XP</div>
                <div className="col-span-2 text-right">Streak</div>
              </div>
            </div>
            <div className="divide-y divide-border/30">
              {leaders.map((leader) => (
                <div 
                  key={leader.rank}
                  className={`p-4 transition-colors ${
                    leader.isYou 
                      ? 'bg-primary/10 border-l-4 border-l-primary' 
                      : 'hover:bg-muted/30'
                  }`}
                >
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1 flex items-center justify-center">
                      {getRankIcon(leader.rank)}
                    </div>
                    <div className="col-span-7 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                        <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {leader.name}
                          {leader.isYou && (
                            <span className="ml-2 text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full">
                              You
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <p className="font-semibold text-foreground">{leader.xp.toLocaleString()}</p>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-1">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <span className="text-foreground">{leader.streak}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Position */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              You are ranked <span className="font-bold text-primary">#5</span> globally!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;
