import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen } from "lucide-react";

const glossaryTerms = [
  { term: "Ask Price", definition: "The lowest price a seller is willing to accept for an asset. Also known as the offer price.", category: "Basics" },
  { term: "Bear Market", definition: "A market condition where prices are falling or expected to fall, typically by 20% or more from recent highs.", category: "Market" },
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay for an asset.", category: "Basics" },
  { term: "Bull Market", definition: "A market condition where prices are rising or expected to rise, characterized by optimism and investor confidence.", category: "Market" },
  { term: "Candlestick", definition: "A type of chart that displays the high, low, open, and close prices for a specific time period.", category: "Technical" },
  { term: "Day Trading", definition: "The practice of buying and selling securities within the same trading day, closing all positions before market close.", category: "Strategy" },
  { term: "Dividend", definition: "A portion of a company's earnings distributed to shareholders, usually paid quarterly.", category: "Fundamentals" },
  { term: "Dollar Cost Averaging", definition: "An investment strategy where you invest a fixed amount at regular intervals, regardless of price.", category: "Strategy" },
  { term: "ETF", definition: "Exchange-Traded Fund - a type of investment fund traded on stock exchanges, holding assets like stocks, bonds, or commodities.", category: "Instruments" },
  { term: "FOMO", definition: "Fear Of Missing Out - the anxiety that others are profiting while you're not participating in a trade.", category: "Psychology" },
  { term: "Fundamental Analysis", definition: "A method of evaluating securities by analyzing financial statements, industry trends, and economic factors.", category: "Fundamentals" },
  { term: "Going Long", definition: "Buying an asset with the expectation that its price will increase, allowing you to sell at a profit.", category: "Strategy" },
  { term: "Going Short", definition: "Selling an asset you don't own (borrowed) expecting the price to fall, then buying it back at a lower price.", category: "Strategy" },
  { term: "Hedge", definition: "An investment made to reduce the risk of adverse price movements in an asset.", category: "Risk" },
  { term: "Initial Public Offering (IPO)", definition: "The first time a company's stock is offered to the public for purchase on a stock exchange.", category: "Basics" },
  { term: "Leverage", definition: "Using borrowed capital to increase the potential return of an investment. Amplifies both gains and losses.", category: "Risk" },
  { term: "Limit Order", definition: "An order to buy or sell an asset at a specific price or better.", category: "Orders" },
  { term: "Liquidity", definition: "How easily an asset can be bought or sold without significantly affecting its price.", category: "Basics" },
  { term: "Margin", definition: "Borrowed money from a broker used to purchase securities. The collateral for the loan is the securities in your account.", category: "Risk" },
  { term: "Market Cap", definition: "Market Capitalization - the total value of a company's outstanding shares, calculated by multiplying share price by number of shares.", category: "Fundamentals" },
  { term: "Market Order", definition: "An order to buy or sell immediately at the current best available price.", category: "Orders" },
  { term: "Moving Average", definition: "A technical indicator that smooths price data by calculating the average price over a specified period.", category: "Technical" },
  { term: "P/E Ratio", definition: "Price-to-Earnings Ratio - a valuation metric comparing a company's stock price to its earnings per share.", category: "Fundamentals" },
  { term: "Portfolio", definition: "A collection of investments owned by an individual or institution.", category: "Basics" },
  { term: "Resistance", definition: "A price level where selling pressure may prevent further price increases.", category: "Technical" },
  { term: "Risk/Reward Ratio", definition: "A comparison of the potential profit of a trade to its potential loss. A 1:3 ratio means risking $1 to potentially make $3.", category: "Risk" },
  { term: "RSI", definition: "Relative Strength Index - a momentum oscillator measuring the speed and change of price movements on a scale of 0-100.", category: "Technical" },
  { term: "Spread", definition: "The difference between the bid and ask price of an asset.", category: "Basics" },
  { term: "Stop Loss", definition: "An order placed to sell an asset when it reaches a certain price, limiting potential losses.", category: "Orders" },
  { term: "Support", definition: "A price level where buying pressure may prevent further price decreases.", category: "Technical" },
  { term: "Swing Trading", definition: "A trading style that holds positions for days to weeks, capturing short to medium-term price movements.", category: "Strategy" },
  { term: "Take Profit", definition: "An order to close a position at a predetermined profit target.", category: "Orders" },
  { term: "Technical Analysis", definition: "A method of evaluating securities by analyzing statistics generated by market activity, such as past prices and volume.", category: "Technical" },
  { term: "Volatility", definition: "A measure of how much an asset's price fluctuates over time. High volatility means larger price swings.", category: "Risk" },
  { term: "Volume", definition: "The number of shares or contracts traded in a security or market during a given period.", category: "Technical" },
];

const categories = ["All", "Basics", "Market", "Technical", "Strategy", "Fundamentals", "Risk", "Orders", "Instruments", "Psychology"];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const letter = item.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <Layout>
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Learning Resource
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Trading <span className="gradient-text">Glossary</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master the language of trading. From basic terms to advanced concepts, find definitions for all trading terminology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-sm font-medium transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Terms List */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="font-display text-3xl font-bold mb-4 gradient-text">
                  {letter}
                </h2>
                <div className="space-y-4">
                  {groupedTerms[letter].map((item) => (
                    <Card key={item.term} className="glass-card border-border/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                          <div className="flex-1">
                            <h3 className="font-display font-semibold text-lg mb-1">
                              {item.term}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.definition}
                            </p>
                          </div>
                          <Badge variant="outline" className="self-start shrink-0">
                            {item.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">No terms found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
