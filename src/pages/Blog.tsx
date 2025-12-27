import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Tag
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", slug: "all", count: 45 },
    { name: "Crypto", slug: "crypto", count: 12 },
    { name: "Stocks", slug: "stocks", count: 10 },
    { name: "Forex", slug: "forex", count: 8 },
    { name: "Trading Tips", slug: "tips", count: 9 },
    { name: "Beginner Guides", slug: "beginner", count: 6 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Complete Guide to Cryptocurrency Trading in 2025",
    excerpt: "Everything you need to know about trading Bitcoin, Ethereum, and other cryptocurrencies. From setting up your first wallet to advanced trading strategies.",
    category: "Crypto",
    author: "Alex Morgan",
    date: "Dec 20, 2025",
    readTime: "15 min read",
    image: "/placeholder.svg",
    slug: "complete-guide-cryptocurrency-trading-2025"
  };

  const posts = [
    {
      id: 2,
      title: "Understanding Candlestick Patterns for Better Trading",
      excerpt: "Learn how to read and interpret candlestick patterns to make more informed trading decisions.",
      category: "Trading Tips",
      author: "Sarah Chen",
      date: "Dec 18, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      slug: "understanding-candlestick-patterns"
    },
    {
      id: 3,
      title: "Top 10 Mistakes Beginner Traders Make",
      excerpt: "Avoid these common pitfalls that can cost new traders significant losses in their first year.",
      category: "Beginner",
      author: "Mike Johnson",
      date: "Dec 15, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg",
      slug: "top-10-beginner-trading-mistakes"
    },
    {
      id: 4,
      title: "How to Build a Diversified Stock Portfolio",
      excerpt: "A step-by-step guide to creating a balanced portfolio that manages risk while maximizing returns.",
      category: "Stocks",
      author: "Emma Williams",
      date: "Dec 12, 2025",
      readTime: "12 min read",
      image: "/placeholder.svg",
      slug: "build-diversified-stock-portfolio"
    },
    {
      id: 5,
      title: "Forex Trading: Major vs Minor Currency Pairs",
      excerpt: "Understanding the differences between major, minor, and exotic currency pairs in forex trading.",
      category: "Forex",
      author: "David Lee",
      date: "Dec 10, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      slug: "forex-major-minor-currency-pairs"
    },
    {
      id: 6,
      title: "Risk Management Strategies Every Trader Should Know",
      excerpt: "Protect your capital with these essential risk management techniques used by professional traders.",
      category: "Trading Tips",
      author: "Alex Morgan",
      date: "Dec 8, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      slug: "risk-management-strategies"
    },
    {
      id: 7,
      title: "Bitcoin Halving: What It Means for Traders",
      excerpt: "An in-depth look at Bitcoin halving events and their historical impact on cryptocurrency markets.",
      category: "Crypto",
      author: "Sarah Chen",
      date: "Dec 5, 2025",
      readTime: "11 min read",
      image: "/placeholder.svg",
      slug: "bitcoin-halving-traders-guide"
    }
  ];

  const trendingTopics = [
    "Bitcoin ETF",
    "Day Trading",
    "Technical Analysis",
    "Market Psychology",
    "Swing Trading",
    "Options Strategies"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trading Insights &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Market Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead of the markets with expert analysis, trading tips, and educational content
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-card/50 border-border/50 rounded-xl"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.slug === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-primary/20 hover:text-primary border border-border/50"
                }`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video md:aspect-auto bg-muted relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-2">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                  >
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-primary text-xs font-medium">{post.category}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Trending Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Link
                      key={topic}
                      to={`/blog/tag/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest trading insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background/50 border-border/50"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.slug}
                      to={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-muted/50 px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </Link>
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

export default Blog;
