import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  BarChart3,
  Settings,
  FileText,
  MessageSquare,
  Plus,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Users", value: "12,847", change: "+12.5%", icon: Users, color: "text-blue-500" },
    { label: "Active Subscribers", value: "3,241", change: "+8.2%", icon: DollarSign, color: "text-green-500" },
    { label: "Total Lessons", value: "124", change: "+3", icon: BookOpen, color: "text-purple-500" },
    { label: "Monthly Revenue", value: "$61,558", change: "+15.3%", icon: TrendingUp, color: "text-primary" },
  ];

  const recentActivity = [
    { type: "user", message: "New user registered: alex@example.com", time: "2 min ago" },
    { type: "payment", message: "New subscription: Pro Annual - $144", time: "15 min ago" },
    { type: "lesson", message: "Lesson completed: 'Bitcoin Basics' by 23 users", time: "1 hour ago" },
    { type: "support", message: "New support ticket: Payment issue #1247", time: "2 hours ago" },
    { type: "user", message: "User upgraded to Pro: sarah@gmail.com", time: "3 hours ago" },
  ];

  const quickActions = [
    { label: "Create Lesson", icon: Plus, href: "/admin/lessons/new" },
    { label: "View Users", icon: Users, href: "/admin/users" },
    { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Admin</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link to="/admin/analytics">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Link>
              </Button>
              <Button asChild>
                <Link to="/admin/lessons/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Lesson
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'user' ? 'bg-blue-500/20' :
                      activity.type === 'payment' ? 'bg-green-500/20' :
                      activity.type === 'lesson' ? 'bg-purple-500/20' :
                      'bg-orange-500/20'
                    }`}>
                      {activity.type === 'user' && <Users className="h-5 w-5 text-blue-500" />}
                      {activity.type === 'payment' && <DollarSign className="h-5 w-5 text-green-500" />}
                      {activity.type === 'lesson' && <BookOpen className="h-5 w-5 text-purple-500" />}
                      {activity.type === 'support' && <MessageSquare className="h-5 w-5 text-orange-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">
                View All Activity
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Quick Actions & Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.href}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <action.icon className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium text-foreground">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Management</h2>
                <nav className="space-y-2">
                  <Link to="/admin/lessons" className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Lessons</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link to="/admin/users" className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Users</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link to="/admin/blog" className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Blog Posts</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link to="/admin/support" className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">Support</span>
                    </div>
                    <span className="px-2 py-0.5 bg-orange-500/20 text-orange-500 text-xs rounded-full">3</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
