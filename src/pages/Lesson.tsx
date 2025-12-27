import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2,
  Maximize,
  CheckCircle,
  Clock,
  BookOpen,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  ThumbsUp,
  Sparkles
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Lesson = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [showAiFeedback, setShowAiFeedback] = useState(false);

  // Mock lesson data
  const lesson = {
    id: "what-is-cryptocurrency",
    title: "What is Cryptocurrency?",
    description: "Learn the fundamentals of cryptocurrency, including how it works, why it matters, and the technology behind it.",
    course: "Crypto Trading",
    module: "Beginner",
    duration: "12 min",
    completed: false,
    videoUrl: "/placeholder.svg",
    transcript: `
      Welcome to your first lesson on cryptocurrency. In this video, we'll cover the basics of what cryptocurrency is and how it works.
      
      Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.
      
      The first and most well-known cryptocurrency is Bitcoin, created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto...
    `
  };

  const lessonContent = [
    { id: 1, title: "Introduction to Crypto", duration: "2:00", completed: true },
    { id: 2, title: "What is Blockchain?", duration: "3:30", completed: true },
    { id: 3, title: "How Transactions Work", duration: "4:00", completed: false, current: true },
    { id: 4, title: "Types of Cryptocurrencies", duration: "2:30", completed: false },
  ];

  const relatedLessons = [
    { id: "blockchain-basics", title: "Blockchain Basics", duration: "15 min" },
    { id: "bitcoin-history", title: "History of Bitcoin", duration: "10 min" },
    { id: "crypto-wallets", title: "Setting Up Your First Wallet", duration: "8 min" },
  ];

  return (
    <Layout>
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/courses" className="hover:text-primary">Courses</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/crypto" className="hover:text-primary">{lesson.course}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{lesson.title}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group">
                <img 
                  src={lesson.videoUrl} 
                  alt={lesson.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-primary-foreground" />
                    ) : (
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    )}
                  </button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <Progress value={progress} className="h-1 bg-white/20" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-primary">
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </button>
                      <button className="text-white hover:text-primary">
                        <SkipBack className="h-5 w-5" />
                      </button>
                      <button className="text-white hover:text-primary">
                        <SkipForward className="h-5 w-5" />
                      </button>
                      <span className="text-white text-sm">4:12 / 12:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-white hover:text-primary">
                        <Volume2 className="h-5 w-5" />
                      </button>
                      <button className="text-white hover:text-primary">
                        <Maximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson Info */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {lesson.module}
                      </span>
                      <span className="text-muted-foreground text-sm">{lesson.course}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">{lesson.title}</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{lesson.description}</p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{lesson.duration}</span>
                  </div>
                  <Button 
                    onClick={() => setShowAiFeedback(!showAiFeedback)}
                    variant="outline"
                    className="gap-2"
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                    Get AI Feedback
                  </Button>
                  <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                    <CheckCircle className="h-4 w-4" />
                    Mark Complete
                  </Button>
                </div>
              </div>

              {/* AI Feedback Section */}
              {showAiFeedback && (
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI Learning Assistant</h3>
                      <p className="text-sm text-muted-foreground">Ask questions about this lesson</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-4 mb-4">
                    <p className="text-muted-foreground text-sm">
                      👋 Hi! I've analyzed this lesson on cryptocurrency basics. Here are some key takeaways:
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>• Cryptocurrency is a digital currency using cryptography for security</li>
                      <li>• Bitcoin was the first cryptocurrency, created in 2009</li>
                      <li>• Blockchain is the underlying technology that makes crypto possible</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Ask a question about this lesson..."
                      className="flex-1 px-4 py-2 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                    <Button className="bg-primary hover:bg-primary/90">Ask</Button>
                  </div>
                </div>
              )}

              {/* Lesson Content */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Lesson Content</h2>
                <div className="space-y-2">
                  {lessonContent.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        item.current 
                          ? 'bg-primary/10 border border-primary/30' 
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.completed 
                            ? 'bg-green-500/20 text-green-500' 
                            : item.current 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-medium">{index + 1}</span>
                          )}
                        </div>
                        <span className={item.current ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Previous Lesson
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-primary to-accent">
                  Next Lesson
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Your Progress</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Course Progress</span>
                    <span className="text-foreground font-medium">24%</span>
                  </div>
                  <Progress value={24} className="h-2 bg-muted" />
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>6/25 lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>2.5 hrs left</span>
                  </div>
                </div>
              </div>

              {/* Related Lessons */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Up Next</h3>
                <div className="space-y-3">
                  {relatedLessons.map((related) => (
                    <Link
                      key={related.id}
                      to={`/lessons/${related.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Play className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary truncate">
                          {related.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{related.duration}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Feedback */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Was this helpful?</h3>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Yes
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Feedback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lesson;
