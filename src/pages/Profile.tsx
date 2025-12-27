import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Calendar, 
  Trophy, 
  Flame, 
  BookOpen,
  Award,
  Settings,
  Edit,
  Camera,
  MapPin,
  Link as LinkIcon,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Alex Trader",
    username: "@alextrader",
    email: "alex@example.com",
    avatar: "/placeholder.svg",
    bio: "Passionate about trading and continuous learning. Currently mastering crypto and forex markets.",
    location: "New York, USA",
    website: "alextrader.com",
    twitter: "@alextrader",
    joinedDate: "January 2025",
    stats: {
      xp: 2450,
      level: 12,
      streak: 7,
      lessonsCompleted: 24,
      coursesCompleted: 2,
      badges: 8,
      hoursLearned: 18.5
    }
  };

  const recentAchievements = [
    { id: 1, name: "Week Warrior", icon: Flame, date: "Dec 20, 2025" },
    { id: 2, name: "Quick Learner", icon: BookOpen, date: "Dec 18, 2025" },
    { id: 3, name: "First Lesson", icon: Trophy, date: "Dec 15, 2025" },
  ];

  const completedCourses = [
    { id: 1, name: "Crypto Trading Basics", progress: 100, badge: "Crypto Beginner" },
    { id: 2, name: "Technical Analysis 101", progress: 100, badge: "Chart Reader" },
  ];

  const inProgressCourses = [
    { id: 1, name: "Advanced Crypto Strategies", progress: 65 },
    { id: 2, name: "Forex Major Pairs", progress: 30 },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 md:h-48 bg-gradient-to-r from-primary/30 to-accent/30 relative">
              <button className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-12 gap-4">
                <div className="flex items-end gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-muted border-4 border-background overflow-hidden">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <button className="absolute bottom-1 right-1 p-1.5 bg-primary rounded-lg text-primary-foreground">
                      <Camera className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="pb-2">
                    <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                    <p className="text-muted-foreground">{user.username}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" asChild>
                    <Link to="/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/profile/edit">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Bio & Info */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">{user.bio}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <a href={`https://${user.website}`} className="text-primary hover:underline">
                        {user.website}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {user.joinedDate}
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{user.stats.level}</p>
                    <p className="text-xs text-muted-foreground">Level</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{user.stats.streak}</p>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <p className="text-2xl font-bold text-foreground">{user.stats.badges}</p>
                    <p className="text-xs text-muted-foreground">Badges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{user.stats.xp.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Total XP</p>
                </div>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{user.stats.lessonsCompleted}</p>
                  <p className="text-xs text-muted-foreground">Lessons Done</p>
                </div>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{user.stats.coursesCompleted}</p>
                  <p className="text-xs text-muted-foreground">Courses Done</p>
                </div>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{user.stats.hoursLearned}h</p>
                  <p className="text-xs text-muted-foreground">Time Learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Recent Achievements */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Recent Achievements</h2>
                <Link to="/achievements" className="text-sm text-primary hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{achievement.name}</p>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Progress */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Course Progress</h2>
                <Link to="/courses" className="text-sm text-primary hover:underline">View All</Link>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">In Progress</h3>
                {inProgressCourses.map((course) => (
                  <div key={course.id} className="p-3 bg-muted/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-foreground text-sm">{course.name}</p>
                      <span className="text-sm text-primary">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1.5 bg-muted" />
                  </div>
                ))}
                
                <h3 className="text-sm font-medium text-muted-foreground pt-2">Completed</h3>
                {completedCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="font-medium text-foreground text-sm">{course.name}</p>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded-full">
                      {course.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
