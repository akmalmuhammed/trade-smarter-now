import { Layout } from "@/components/layout/Layout";
import { 
  Trophy, 
  Flame, 
  BookOpen, 
  Zap, 
  Award, 
  Star,
  Target,
  Clock,
  Users,
  TrendingUp,
  Medal,
  Crown
} from "lucide-react";

const Achievements = () => {
  const categories = [
    {
      name: "Learning",
      badges: [
        { id: 1, name: "First Lesson", icon: BookOpen, description: "Complete your first lesson", earned: true, earnedDate: "Dec 15, 2025" },
        { id: 2, name: "Quick Learner", icon: Zap, description: "Complete 5 lessons in one day", earned: true, earnedDate: "Dec 18, 2025" },
        { id: 3, name: "Knowledge Seeker", icon: Target, description: "Complete 25 lessons", earned: false, progress: 24, total: 25 },
        { id: 4, name: "Scholar", icon: Award, description: "Complete 50 lessons", earned: false, progress: 24, total: 50 },
        { id: 5, name: "Master Trader", icon: Crown, description: "Complete 100 lessons", earned: false, progress: 24, total: 100 },
      ]
    },
    {
      name: "Streaks",
      badges: [
        { id: 6, name: "Week Warrior", icon: Flame, description: "7-day learning streak", earned: true, earnedDate: "Dec 20, 2025" },
        { id: 7, name: "Dedicated", icon: Flame, description: "14-day learning streak", earned: false, progress: 7, total: 14 },
        { id: 8, name: "Committed", icon: Flame, description: "30-day learning streak", earned: false, progress: 7, total: 30 },
        { id: 9, name: "Unstoppable", icon: Flame, description: "60-day learning streak", earned: false, progress: 7, total: 60 },
        { id: 10, name: "Legendary", icon: Star, description: "100-day learning streak", earned: false, progress: 7, total: 100 },
      ]
    },
    {
      name: "Courses",
      badges: [
        { id: 11, name: "Crypto Beginner", icon: Trophy, description: "Complete Crypto basics", earned: false, progress: 65, total: 100 },
        { id: 12, name: "Stock Trader", icon: Trophy, description: "Complete Stock basics", earned: false, progress: 40, total: 100 },
        { id: 13, name: "Forex Expert", icon: Trophy, description: "Complete Forex course", earned: false, progress: 20, total: 100 },
        { id: 14, name: "Options Pro", icon: Trophy, description: "Complete Options course", earned: false, progress: 0, total: 100 },
        { id: 15, name: "Complete Mastery", icon: Crown, description: "Complete all courses", earned: false, progress: 2, total: 8 },
      ]
    },
    {
      name: "Time",
      badges: [
        { id: 16, name: "Hour Hero", icon: Clock, description: "Spend 1 hour learning", earned: true, earnedDate: "Dec 15, 2025" },
        { id: 17, name: "Time Investor", icon: Clock, description: "Spend 10 hours learning", earned: true, earnedDate: "Dec 22, 2025" },
        { id: 18, name: "Dedicated Student", icon: Clock, description: "Spend 25 hours learning", earned: false, progress: 18, total: 25 },
        { id: 19, name: "Learning Machine", icon: Clock, description: "Spend 50 hours learning", earned: false, progress: 18, total: 50 },
        { id: 20, name: "Time Lord", icon: Clock, description: "Spend 100 hours learning", earned: false, progress: 18, total: 100 },
      ]
    },
    {
      name: "Community",
      badges: [
        { id: 21, name: "Social Trader", icon: Users, description: "Share a certificate", earned: false },
        { id: 22, name: "Helper", icon: Users, description: "Answer 5 community questions", earned: false },
        { id: 23, name: "Top Contributor", icon: Medal, description: "Reach top 10 on leaderboard", earned: false },
        { id: 24, name: "Rising Star", icon: TrendingUp, description: "Gain 1000 XP in a week", earned: false, progress: 750, total: 1000 },
        { id: 25, name: "Champion", icon: Crown, description: "Reach #1 on weekly leaderboard", earned: false },
      ]
    }
  ];

  const totalEarned = categories.reduce((sum, cat) => 
    sum + cat.badges.filter(b => b.earned).length, 0
  );
  const totalBadges = categories.reduce((sum, cat) => sum + cat.badges.length, 0);

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Achievements</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Your Badges
            </h1>
            <p className="text-muted-foreground">
              You've earned {totalEarned} of {totalBadges} badges
            </p>
          </div>

          {/* Progress Overview */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 mb-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Achievement Progress</p>
                <p className="text-3xl font-bold text-foreground">
                  {totalEarned}/{totalBadges} Badges
                </p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {Math.round((totalEarned / totalBadges) * 100)}%
                </p>
                <p className="text-muted-foreground">Complete</p>
              </div>
            </div>
            <div className="mt-4 w-full bg-background/30 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all"
                style={{ width: `${(totalEarned / totalBadges) * 100}%` }}
              />
            </div>
          </div>

          {/* Badge Categories */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`relative p-5 rounded-2xl text-center transition-all ${
                        badge.earned
                          ? 'bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30'
                          : 'bg-card/50 border border-border/50 opacity-60'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                        badge.earned
                          ? 'bg-gradient-to-br from-primary to-accent'
                          : 'bg-muted'
                      }`}>
                        <badge.icon className={`h-8 w-8 ${
                          badge.earned ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <h3 className={`font-semibold text-sm mb-1 ${
                        badge.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {badge.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {badge.description}
                      </p>
                      
                      {badge.earned && badge.earnedDate && (
                        <p className="text-xs text-primary mt-2">{badge.earnedDate}</p>
                      )}
                      
                      {!badge.earned && badge.progress !== undefined && (
                        <div className="mt-3">
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <div 
                              className="bg-primary h-1.5 rounded-full"
                              style={{ width: `${(badge.progress / badge.total!) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {badge.progress}/{badge.total}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
