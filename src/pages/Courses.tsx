import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Bitcoin, 
  TrendingUp, 
  DollarSign, 
  Gem, 
  Target, 
  BarChart3, 
  Building2, 
  PieChart,
  BookOpen,
  Clock,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const courses = [
    {
      id: "crypto",
      title: "Crypto Trading",
      description: "Master cryptocurrency trading from Bitcoin to DeFi",
      icon: Bitcoin,
      color: "from-orange-500 to-yellow-500",
      lessons: 25,
      duration: "8 hours",
      level: "Beginner to Advanced",
      progress: 24,
      href: "/crypto"
    },
    {
      id: "stocks",
      title: "Stock Trading",
      description: "Learn to analyze and trade stocks profitably",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      lessons: 22,
      duration: "7 hours",
      level: "Beginner to Advanced",
      progress: 65,
      href: "/stocks"
    },
    {
      id: "forex",
      title: "Forex Trading",
      description: "Navigate the world's largest financial market",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500",
      lessons: 20,
      duration: "6.5 hours",
      level: "Beginner to Advanced",
      progress: 10,
      href: "/forex"
    },
    {
      id: "commodities",
      title: "Commodities Trading",
      description: "Trade gold, oil, and other commodities",
      icon: Gem,
      color: "from-yellow-500 to-amber-500",
      lessons: 15,
      duration: "5 hours",
      level: "Intermediate",
      progress: 0,
      href: "/commodities"
    },
    {
      id: "options",
      title: "Options Trading",
      description: "Master calls, puts, and advanced strategies",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      lessons: 18,
      duration: "6 hours",
      level: "Intermediate to Advanced",
      progress: 0,
      href: "/options"
    },
    {
      id: "futures",
      title: "Futures Trading",
      description: "Trade futures contracts with confidence",
      icon: BarChart3,
      color: "from-red-500 to-orange-500",
      lessons: 14,
      duration: "4.5 hours",
      level: "Advanced",
      progress: 0,
      href: "/futures"
    },
    {
      id: "bonds",
      title: "Bonds Trading",
      description: "Understand fixed income securities",
      icon: Building2,
      color: "from-slate-500 to-gray-500",
      lessons: 12,
      duration: "4 hours",
      level: "Intermediate",
      progress: 0,
      href: "/bonds"
    },
    {
      id: "etfs",
      title: "ETFs Trading",
      description: "Build wealth with exchange-traded funds",
      icon: PieChart,
      color: "from-teal-500 to-green-500",
      lessons: 10,
      duration: "3.5 hours",
      level: "Beginner",
      progress: 0,
      href: "/etfs"
    }
  ];

  const filters = [
    { id: "all", label: "All Courses" },
    { id: "in-progress", label: "In Progress" },
    { id: "not-started", label: "Not Started" },
    { id: "completed", label: "Completed" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    switch (activeFilter) {
      case "in-progress":
        return course.progress > 0 && course.progress < 100;
      case "not-started":
        return course.progress === 0;
      case "completed":
        return course.progress === 100;
      default:
        return true;
    }
  });

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              All{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master trading across 8 different asset classes with our comprehensive courses
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-card/50 border-border/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={course.href}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Course Header */}
                <div className={`h-32 bg-gradient-to-br ${course.color} p-6 relative`}>
                  <course.icon className="h-12 w-12 text-white/90" />
                  {course.progress > 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {course.progress}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>

                  {course.progress > 0 ? (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-primary font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-muted" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{course.level}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
