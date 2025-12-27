import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfitCalculator() {
  const [entryPrice, setEntryPrice] = useState<string>("");
  const [exitPrice, setExitPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [tradeType, setTradeType] = useState<string>("long");
  const [result, setResult] = useState<{
    profit: number;
    profitPercent: number;
    isProfit: boolean;
  } | null>(null);

  const calculateProfit = () => {
    const entry = parseFloat(entryPrice);
    const exit = parseFloat(exitPrice);
    const qty = parseFloat(quantity);

    if (isNaN(entry) || isNaN(exit) || isNaN(qty)) return;

    let profit: number;
    if (tradeType === "long") {
      profit = (exit - entry) * qty;
    } else {
      profit = (entry - exit) * qty;
    }

    const profitPercent = ((profit / (entry * qty)) * 100);
    
    setResult({
      profit,
      profitPercent,
      isProfit: profit >= 0,
    });
  };

  const resetCalculator = () => {
    setEntryPrice("");
    setExitPrice("");
    setQuantity("");
    setResult(null);
  };

  return (
    <Layout>
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Trading Tools
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Profit <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Calculate your potential profit or loss before entering a trade. Essential for risk management.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Calculate Your Trade
                </CardTitle>
                <CardDescription>
                  Enter your trade details to calculate profit/loss
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tradeType">Trade Type</Label>
                    <Select value={tradeType} onValueChange={setTradeType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trade type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="long">Long (Buy)</SelectItem>
                        <SelectItem value="short">Short (Sell)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity / Units</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="e.g., 100"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="entryPrice">Entry Price ($)</Label>
                    <Input
                      id="entryPrice"
                      type="number"
                      placeholder="e.g., 50.00"
                      value={entryPrice}
                      onChange={(e) => setEntryPrice(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exitPrice">Exit Price ($)</Label>
                    <Input
                      id="exitPrice"
                      type="number"
                      placeholder="e.g., 55.00"
                      value={exitPrice}
                      onChange={(e) => setExitPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculateProfit} className="flex-1">
                    Calculate
                  </Button>
                  <Button variant="outline" onClick={resetCalculator}>
                    Reset
                  </Button>
                </div>

                {result && (
                  <div className={`p-6 rounded-xl border ${
                    result.isProfit 
                      ? "bg-green-500/10 border-green-500/30" 
                      : "bg-red-500/10 border-red-500/30"
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      {result.isProfit ? (
                        <TrendingUp className="w-8 h-8 text-green-500" />
                      ) : (
                        <TrendingDown className="w-8 h-8 text-red-500" />
                      )}
                      <span className="font-display text-xl font-semibold">
                        {result.isProfit ? "Profit" : "Loss"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Amount</p>
                        <p className={`text-2xl font-bold ${
                          result.isProfit ? "text-green-500" : "text-red-500"
                        }`}>
                          {result.isProfit ? "+" : "-"}${Math.abs(result.profit).toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Percentage</p>
                        <p className={`text-2xl font-bold ${
                          result.isProfit ? "text-green-500" : "text-red-500"
                        }`}>
                          {result.isProfit ? "+" : "-"}{Math.abs(result.profitPercent).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Other Tools */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tools/position-size">
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Position Size Calculator</p>
                      <p className="text-sm text-muted-foreground">Calculate optimal position size</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/tools/risk-reward">
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Risk/Reward Calculator</p>
                      <p className="text-sm text-muted-foreground">Analyze trade risk/reward ratio</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
