import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  User, 
  Calendar,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock post data - would be fetched based on slug
  const post = {
    title: "The Complete Guide to Cryptocurrency Trading in 2025",
    excerpt: "Everything you need to know about trading Bitcoin, Ethereum, and other cryptocurrencies.",
    category: "Crypto",
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg",
      bio: "Senior Trading Analyst at Lucidity with 10+ years of experience in cryptocurrency markets."
    },
    date: "December 20, 2025",
    readTime: "15 min read",
    image: "/placeholder.svg",
    content: `
      <p>Cryptocurrency trading has evolved significantly over the past decade, transforming from a niche hobby into a mainstream financial activity. In this comprehensive guide, we'll explore everything you need to know to start trading cryptocurrencies effectively in 2025.</p>

      <h2>Understanding the Basics</h2>
      <p>Before diving into trading strategies, it's crucial to understand what cryptocurrencies are and how they work. At their core, cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on decentralized networks based on blockchain technology.</p>

      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Blockchain:</strong> A distributed ledger that records all transactions across a network of computers.</li>
        <li><strong>Wallet:</strong> A digital tool that allows you to store, send, and receive cryptocurrencies.</li>
        <li><strong>Exchange:</strong> A platform where you can buy, sell, and trade cryptocurrencies.</li>
        <li><strong>Market Cap:</strong> The total value of a cryptocurrency, calculated by multiplying the current price by the total supply.</li>
      </ul>

      <h2>Getting Started with Trading</h2>
      <p>Starting your cryptocurrency trading journey requires careful preparation. Here are the essential steps to begin:</p>

      <h3>1. Choose a Reputable Exchange</h3>
      <p>Select an exchange that offers strong security measures, a user-friendly interface, and supports the cryptocurrencies you want to trade. Consider factors like fees, available trading pairs, and customer support.</p>

      <h3>2. Set Up Security Measures</h3>
      <p>Protect your assets by enabling two-factor authentication (2FA), using strong passwords, and considering hardware wallets for long-term storage.</p>

      <h3>3. Start with Education</h3>
      <p>Before risking real money, invest time in learning about technical analysis, market indicators, and trading psychology. Many successful traders spend months studying before making their first trade.</p>

      <h2>Essential Trading Strategies</h2>
      <p>There are several approaches to cryptocurrency trading, each with its own risk profile and time commitment:</p>

      <h3>Day Trading</h3>
      <p>Day traders buy and sell within the same day, taking advantage of short-term price movements. This strategy requires constant attention and quick decision-making.</p>

      <h3>Swing Trading</h3>
      <p>Swing traders hold positions for days or weeks, aiming to profit from price "swings" in the market. This approach requires less time than day trading but still demands regular market monitoring.</p>

      <h3>HODLing</h3>
      <p>Long-term holding (or "HODLing") involves buying and holding cryptocurrencies for months or years, based on the belief in their long-term value appreciation.</p>

      <h2>Risk Management</h2>
      <p>Perhaps the most crucial aspect of trading is managing risk effectively:</p>

      <ul>
        <li>Never invest more than you can afford to lose</li>
        <li>Use stop-loss orders to limit potential losses</li>
        <li>Diversify your portfolio across different cryptocurrencies</li>
        <li>Keep emotions in check and stick to your trading plan</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Cryptocurrency trading offers exciting opportunities but comes with significant risks. By educating yourself, starting small, and practicing proper risk management, you can navigate the crypto markets more effectively. Remember that consistent learning and adaptation are key to long-term success in this dynamic market.</p>
    `,
    tags: ["Cryptocurrency", "Bitcoin", "Trading", "Beginner Guide", "2025"],
    relatedPosts: [
      {
        title: "Understanding Candlestick Patterns",
        slug: "understanding-candlestick-patterns",
        category: "Trading Tips"
      },
      {
        title: "Bitcoin Halving: What It Means for Traders",
        slug: "bitcoin-halving-traders-guide",
        category: "Crypto"
      },
      {
        title: "Risk Management Strategies",
        slug: "risk-management-strategies",
        category: "Trading Tips"
      }
    ]
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-medium text-foreground">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Share Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 flex lg:flex-col items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <LinkIcon className="h-4 w-4" />
                </button>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-11 prose prose-invert prose-lg max-w-none">
              <div 
                className="text-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:my-4 [&>ul]:pl-6 [&>ul>li]:text-muted-foreground [&>ul>li]:mb-2 [&>ul>li>strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted overflow-hidden flex-shrink-0">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Written by</p>
                <h4 className="text-lg font-bold text-foreground mb-2">{post.author.name}</h4>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all"
              >
                <span className="text-primary text-xs font-medium">{related.category}</span>
                <h3 className="text-foreground font-semibold mt-2 group-hover:text-primary transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
