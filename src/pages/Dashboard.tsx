import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Flame, 
  Trophy, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Clock,
  ChevronRight,
  Star,
  Zap,
  Award,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    xp: 2450,
    level: 12,
    nextLevelXp: 3000,
    streak: 7,
    lessonsCompleted: 24,
    totalLessons: 120,
    badges: 8,
    hoursLearned: 18.5
  };

  const continuelearning = [
    {
      id: 1,
      title: "Understanding Candlestick Patterns",
      course: "Crypto Trading",
      progress: 65,
      duration: "12 min left",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Risk Management Fundamentals",
      course: "Stock Trading",
      progress: 30,
      duration: "25 min left",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Major Currency Pairs Explained",
      course: "Forex Trading",
      progress: 10,
      duration: "45 min left",
      image: "/placeholder.svg"
    }
  ];

  const achievements = [
    { id: 1, name: "First Lesson", icon: BookOpen, earned: true, description: "Complete your first lesson" },
    { id: 2, name: "Week Warrior", icon: Flame, earned: true, description: "7-day learning streak" },
    { id: 3, name: "Quick Learner", icon: Zap, earned: true, description: "Complete 5 lessons in one day" },
    { id: 4, name: "Crypto Expert", icon: Trophy, earned: false, description: "Complete the Crypto course" },
    { id: 5, name: "Trading Master", icon: Award, earned: false, description: "Complete all courses" },
    { id: 6, name: "Streak Legend", icon: Star, earned: false, description: "30-day learning streak" }
  ];

  const weeklyActivity = [
    { day: "Mon", lessons: 3, xp: 150 },
    { day: "Tue", lessons: 2, xp: 100 },
    { day: "Wed", lessons: 4, xp: 200 },
    { day: "Thu", lessons: 1, xp: 50 },
    { day: "Fri", lessons: 3, xp: 150 },
    { day: "Sat", lessons: 2, xp: 100 },
    { day: "Sun", lessons: 0, xp: 0 }
  ];

  const progressPercentage = (userStats.xp / userStats.nextLevelXp) * 100;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome back, Trader! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                You're on a {userStats.streak}-day streak. Keep it up!
              </p>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link to="/continue">
                Continue Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* XP & Level Card */}
            <div className="col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Level {userStats.level}</p>
                    <p className="text-2xl font-bold text-foreground">{userStats.xp.toLocaleString()} XP</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">Next Level</p>
                  <p className="text-foreground font-medium">{userStats.nextLevelXp.toLocaleString()} XP</p>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-3 bg-muted" />
              <p className="text-muted-foreground text-sm mt-2">
                {userStats.nextLevelXp - userStats.xp} XP to Level {userStats.level + 1}
              </p>
            </div>

            {/* Streak Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-muted-foreground text-sm">Current Streak</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{userStats.streak} days</p>
              <p className="text-muted-foreground text-sm mt-1">Personal best: 14 days</p>
            </div>

            {/* Lessons Completed Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Target className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-muted-foreground text-sm">Lessons Done</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{userStats.lessonsCompleted}/{userStats.totalLessons}</p>
              <p className="text-muted-foreground text-sm mt-1">{Math.round((userStats.lessonsCompleted / userStats.totalLessons) * 100)}% complete</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Learning */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Continue Learning</h2>
            <Button variant="ghost" asChild>
              <Link to="/lessons">View All</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {continuelearning.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-muted relative">
                  <img src={lesson.image} alt={lesson.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {lesson.duration}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-primary text-sm font-medium mb-1">{lesson.course}</p>
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} className="h-2 bg-muted" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Activity & Achievements */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Weekly Activity */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Weekly Activity</h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  This Week
                </div>
              </div>
              <div className="flex items-end justify-between gap-2 h-32">
                {weeklyActivity.map((day, index) => {
                  const maxXp = Math.max(...weeklyActivity.map(d => d.xp));
                  const height = maxXp > 0 ? (day.xp / maxXp) * 100 : 0;
                  const isToday = index === 6;
                  return (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className={`w-full rounded-t-lg transition-all ${
                          day.xp > 0 
                            ? 'bg-gradient-to-t from-primary to-accent' 
                            : 'bg-muted'
                        } ${isToday ? 'opacity-50' : ''}`}
                        style={{ height: `${Math.max(height, 8)}%` }}
                      />
                      <span className={`text-xs ${isToday ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                        {day.day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total XP this week</p>
                  <p className="text-foreground font-bold text-lg">
                    {weeklyActivity.reduce((sum, day) => sum + day.xp, 0)} XP
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Lessons completed</p>
                  <p className="text-foreground font-bold text-lg">
                    {weeklyActivity.reduce((sum, day) => sum + day.lessons, 0)} lessons
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Achievements</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/achievements">View All</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                      achievement.earned 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-muted/30 opacity-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-primary to-accent' 
                        : 'bg-muted'
                    }`}>
                      <achievement.icon className={`h-6 w-6 ${
                        achievement.earned ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <p className={`text-xs font-medium ${
                      achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/courses"
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <BookOpen className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Browse Courses</h3>
              <p className="text-muted-foreground text-sm">Explore all 8 asset classes</p>
            </Link>
            <Link
              to="/progress"
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <TrendingUp className="h-8 w-8 text-green-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">View Progress</h3>
              <p className="text-muted-foreground text-sm">Track your learning journey</p>
            </Link>
            <Link
              to="/leaderboard"
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <Trophy className="h-8 w-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Leaderboard</h3>
              <p className="text-muted-foreground text-sm">See top learners</p>
            </Link>
            <Link
              to="/certificates"
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <Award className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Certificates</h3>
              <p className="text-muted-foreground text-sm">Download your achievements</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
