import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  CreditCard, 
  Settings, 
  HelpCircle,
  MessageCircle,
  Mail,
  ChevronRight,
  Play,
  Users,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using Lucidity",
      articles: 8,
      href: "/help/getting-started"
    },
    {
      icon: Play,
      title: "Using the Platform",
      description: "How lessons, quizzes, and AI feedback work",
      articles: 12,
      href: "/help/platform"
    },
    {
      icon: CreditCard,
      title: "Account & Billing",
      description: "Manage your subscription and payments",
      articles: 10,
      href: "/help/account"
    },
    {
      icon: Settings,
      title: "Troubleshooting",
      description: "Fix common issues and problems",
      articles: 15,
      href: "/help/troubleshooting"
    }
  ];

  const popularArticles = [
    { title: "How to Sign Up", href: "/help/getting-started/signup" },
    { title: "How Lessons Work", href: "/help/platform/lessons" },
    { title: "Cancel Subscription", href: "/help/account/cancel" },
    { title: "Request a Refund", href: "/help/account/refund" },
    { title: "Login Issues", href: "/help/troubleshooting/login" },
    { title: "Video Not Loading", href: "/help/troubleshooting/video" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How can we{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Search our knowledge base or browse categories below
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-card/50 border-border/50 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {category.articles} articles
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Popular Articles</h2>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <Link
                    key={article.title}
                    to={article.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Live Chat</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Chat with our support team in real-time. Available Mon-Fri, 9am-6pm EST.
                    </p>
                    <Button>Start Chat</Button>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Send us an email and we'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Ask questions and get help from other traders.
                    </p>
                    <Button variant="outline">Join Community</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our frequently asked questions for quick answers
            </p>
            <Button asChild>
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
