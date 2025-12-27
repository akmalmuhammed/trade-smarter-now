import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BookOpen, 
  Clock, 
  Flame,
  Trophy,
  Target,
  Calendar,
  ChevronRight,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Progress = () => {
  const stats = {
    totalXp: 2450,
    level: 12,
    streak: 7,
    lessonsCompleted: 24,
    totalLessons: 120,
    hoursLearned: 18.5,
    coursesStarted: 4,
    coursesCompleted: 1
  };

  const courseProgress = [
    { name: "Crypto Trading", progress: 65, lessons: "16/25", color: "from-orange-500 to-yellow-500" },
    { name: "Stock Trading", progress: 40, lessons: "9/22", color: "from-green-500 to-emerald-500" },
    { name: "Forex Trading", progress: 20, lessons: "4/20", color: "from-blue-500 to-cyan-500" },
    { name: "Commodities", progress: 0, lessons: "0/15", color: "from-yellow-500 to-amber-500" },
  ];

  const weeklyData = [
    { day: "Mon", xp: 150, lessons: 3 },
    { day: "Tue", xp: 100, lessons: 2 },
    { day: "Wed", xp: 200, lessons: 4 },
    { day: "Thu", xp: 50, lessons: 1 },
    { day: "Fri", xp: 150, lessons: 3 },
    { day: "Sat", xp: 100, lessons: 2 },
    { day: "Sun", xp: 0, lessons: 0 },
  ];

  const milestones = [
    { name: "First Lesson", completed: true, xp: 50 },
    { name: "Complete 10 Lessons", completed: true, xp: 200 },
    { name: "Complete 25 Lessons", completed: false, xp: 500, current: 24 },
    { name: "Complete First Course", completed: false, xp: 1000 },
    { name: "7-Day Streak", completed: true, xp: 300 },
    { name: "30-Day Streak", completed: false, xp: 1000, current: 7 },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Progress
            </h1>
            <p className="text-muted-foreground">
              Track your learning journey and achievements
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{stats.totalXp.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{stats.streak} days</p>
              <p className="text-sm text-muted-foreground">Current Streak</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{stats.lessonsCompleted}</p>
              <p className="text-sm text-muted-foreground">Lessons Done</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{stats.hoursLearned}h</p>
              <p className="text-sm text-muted-foreground">Time Learning</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Progress */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Course Progress</h2>
                  <Link to="/courses" className="text-sm text-primary hover:underline">View All</Link>
                </div>
                <div className="space-y-5">
                  {courseProgress.map((course) => (
                    <div key={course.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.color}`} />
                          <span className="font-medium text-foreground">{course.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{course.lessons} lessons</span>
                      </div>
                      <ProgressBar value={course.progress} className="h-2 bg-muted" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Activity */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Weekly Activity</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    This Week
                  </div>
                </div>
                
                <div className="flex items-end justify-between gap-2 h-40 mb-4">
                  {weeklyData.map((day, index) => {
                    const maxXp = Math.max(...weeklyData.map(d => d.xp));
                    const height = maxXp > 0 ? (day.xp / maxXp) * 100 : 0;
                    const isToday = index === weeklyData.length - 1;
                    return (
                      <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                        <div className="text-xs text-muted-foreground">{day.xp} XP</div>
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

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-muted-foreground text-sm">Total XP</p>
                    <p className="text-xl font-bold text-foreground">
                      {weeklyData.reduce((sum, d) => sum + d.xp, 0)} XP
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Lessons</p>
                    <p className="text-xl font-bold text-foreground">
                      {weeklyData.reduce((sum, d) => sum + d.lessons, 0)} completed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Level Progress */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-sm">Current Level</p>
                    <p className="text-3xl font-bold text-foreground">Level {stats.level}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{stats.level}</span>
                  </div>
                </div>
                <ProgressBar value={82} className="h-3 bg-background/30 mb-2" />
                <p className="text-sm text-muted-foreground">550 XP to Level 13</p>
              </div>

              {/* Milestones */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Milestones</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, i) => (
                    <div 
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl ${
                        milestone.completed 
                          ? 'bg-green-500/10 border border-green-500/20' 
                          : 'bg-muted/30'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {milestone.completed ? (
                          <Target className="h-4 w-4" />
                        ) : (
                          <span className="text-xs font-medium">
                            {milestone.current || 0}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          milestone.completed ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {milestone.name}
                        </p>
                        <p className="text-xs text-muted-foreground">+{milestone.xp} XP</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Progress;
