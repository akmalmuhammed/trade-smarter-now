import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calculator, Target, TrendingUp, TrendingDown, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState<string>("");
  const [stopLoss, setStopLoss] = useState<string>("");
  const [takeProfit, setTakeProfit] = useState<string>("");
  const [result, setResult] = useState<{
    riskAmount: number;
    rewardAmount: number;
    ratio: number;
    riskPercent: number;
    rewardPercent: number;
    isGoodTrade: boolean;
  } | null>(null);

  const calculateRiskReward = () => {
    const entry = parseFloat(entryPrice);
    const stop = parseFloat(stopLoss);
    const target = parseFloat(takeProfit);

    if (isNaN(entry) || isNaN(stop) || isNaN(target)) return;

    const riskAmount = Math.abs(entry - stop);
    const rewardAmount = Math.abs(target - entry);
    const ratio = rewardAmount / riskAmount;
    const riskPercent = (riskAmount / entry) * 100;
    const rewardPercent = (rewardAmount / entry) * 100;

    setResult({
      riskAmount,
      rewardAmount,
      ratio,
      riskPercent,
      rewardPercent,
      isGoodTrade: ratio >= 2,
    });
  };

  const resetCalculator = () => {
    setEntryPrice("");
    setStopLoss("");
    setTakeProfit("");
    setResult(null);
  };

  const getRatioColor = (ratio: number) => {
    if (ratio >= 3) return "text-green-500";
    if (ratio >= 2) return "text-primary";
    if (ratio >= 1) return "text-yellow-500";
    return "text-red-500";
  };

  const getRatioLabel = (ratio: number) => {
    if (ratio >= 3) return "Excellent";
    if (ratio >= 2) return "Good";
    if (ratio >= 1) return "Fair";
    return "Poor";
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
              Risk/Reward <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Evaluate your trade's risk-to-reward ratio before entering. Aim for at least 1:2 R:R.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Analyze Your Trade Setup
                </CardTitle>
                <CardDescription>
                  Enter your entry, stop loss, and target prices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="entryPrice">Entry Price ($)</Label>
                    <Input
                      id="entryPrice"
                      type="number"
                      placeholder="e.g., 100.00"
                      value={entryPrice}
                      onChange={(e) => setEntryPrice(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stopLoss" className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      Stop Loss ($)
                    </Label>
                    <Input
                      id="stopLoss"
                      type="number"
                      placeholder="e.g., 95.00"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="takeProfit" className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      Take Profit ($)
                    </Label>
                    <Input
                      id="takeProfit"
                      type="number"
                      placeholder="e.g., 115.00"
                      value={takeProfit}
                      onChange={(e) => setTakeProfit(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculateRiskReward} className="flex-1">
                    Analyze Trade
                  </Button>
                  <Button variant="outline" onClick={resetCalculator}>
                    Reset
                  </Button>
                </div>

                {result && (
                  <div className="space-y-6">
                    {/* Ratio Display */}
                    <div className={`p-6 rounded-xl border ${
                      result.isGoodTrade 
                        ? "bg-green-500/10 border-green-500/30" 
                        : "bg-yellow-500/10 border-yellow-500/30"
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {result.isGoodTrade ? (
                            <CheckCircle className="w-8 h-8 text-green-500" />
                          ) : (
                            <XCircle className="w-8 h-8 text-yellow-500" />
                          )}
                          <span className="font-display text-xl font-semibold">
                            Risk/Reward Ratio
                          </span>
                        </div>
                        <span className={`text-3xl font-bold ${getRatioColor(result.ratio)}`}>
                          1:{result.ratio.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Trade Quality:</span>
                        <span className={`font-semibold ${getRatioColor(result.ratio)}`}>
                          {getRatioLabel(result.ratio)}
                        </span>
                      </div>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            <TrendingDown className="w-4 h-4 text-red-500" />
                            Risk
                          </span>
                          <span className="text-sm font-medium text-red-500">
                            ${result.riskAmount.toFixed(2)} ({result.riskPercent.toFixed(2)}%)
                          </span>
                        </div>
                        <Progress value={Math.min(result.riskPercent * 10, 100)} className="h-3 bg-red-500/20" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            Reward
                          </span>
                          <span className="text-sm font-medium text-green-500">
                            ${result.rewardAmount.toFixed(2)} ({result.rewardPercent.toFixed(2)}%)
                          </span>
                        </div>
                        <Progress value={Math.min(result.rewardPercent * 10, 100)} className="h-3 bg-green-500/20" />
                      </div>
                    </div>

                    {/* Recommendation */}
                    <div className={`p-4 rounded-lg ${
                      result.isGoodTrade ? "bg-green-500/10" : "bg-yellow-500/10"
                    }`}>
                      <p className="text-sm">
                        {result.isGoodTrade 
                          ? "✓ This trade meets the minimum 1:2 risk/reward requirement. Consider taking it if it aligns with your strategy."
                          : "⚠️ This trade has a low risk/reward ratio. Consider adjusting your target or stop loss to improve the setup."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tips */}
                <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                  <h4 className="font-medium text-sm">Risk/Reward Guidelines:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimum recommended R:R is 1:2 (risk $1 to make $2)</li>
                    <li>• With 1:3 R:R, you only need 25% win rate to break even</li>
                    <li>• Higher R:R trades are harder to hit but more forgiving</li>
                    <li>• Always factor in fees and slippage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Other Tools */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tools/profit">
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Profit Calculator</p>
                      <p className="text-sm text-muted-foreground">Calculate potential P&L</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/tools/position-size">
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Position Size Calculator</p>
                      <p className="text-sm text-muted-foreground">Calculate optimal position</p>
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
