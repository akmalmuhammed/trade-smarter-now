import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Target, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function PositionSizeCalculator() {
  const [accountSize, setAccountSize] = useState<string>("");
  const [riskPercent, setRiskPercent] = useState<string>("2");
  const [entryPrice, setEntryPrice] = useState<string>("");
  const [stopLoss, setStopLoss] = useState<string>("");
  const [result, setResult] = useState<{
    positionSize: number;
    riskAmount: number;
    totalValue: number;
  } | null>(null);

  const calculatePositionSize = () => {
    const account = parseFloat(accountSize);
    const risk = parseFloat(riskPercent);
    const entry = parseFloat(entryPrice);
    const stop = parseFloat(stopLoss);

    if (isNaN(account) || isNaN(risk) || isNaN(entry) || isNaN(stop)) return;

    const riskAmount = (account * risk) / 100;
    const riskPerShare = Math.abs(entry - stop);
    const positionSize = riskAmount / riskPerShare;
    const totalValue = positionSize * entry;

    setResult({
      positionSize: Math.floor(positionSize),
      riskAmount,
      totalValue,
    });
  };

  const resetCalculator = () => {
    setAccountSize("");
    setRiskPercent("2");
    setEntryPrice("");
    setStopLoss("");
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
              Position Size <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Calculate the optimal position size based on your risk tolerance and stop loss placement.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Risk-Based Position Sizing
                </CardTitle>
                <CardDescription>
                  Never risk more than you're comfortable losing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountSize">Account Size ($)</Label>
                    <Input
                      id="accountSize"
                      type="number"
                      placeholder="e.g., 10000"
                      value={accountSize}
                      onChange={(e) => setAccountSize(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="riskPercent">Risk Per Trade (%)</Label>
                    <Input
                      id="riskPercent"
                      type="number"
                      placeholder="e.g., 2"
                      value={riskPercent}
                      onChange={(e) => setRiskPercent(e.target.value)}
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
                    <Label htmlFor="stopLoss">Stop Loss Price ($)</Label>
                    <Input
                      id="stopLoss"
                      type="number"
                      placeholder="e.g., 48.00"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculatePositionSize} className="flex-1">
                    Calculate Position Size
                  </Button>
                  <Button variant="outline" onClick={resetCalculator}>
                    Reset
                  </Button>
                </div>

                {result && (
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-primary" />
                      <span className="font-display text-xl font-semibold">
                        Recommended Position
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Shares/Units</p>
                        <p className="text-2xl font-bold text-primary">
                          {result.positionSize}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Risk Amount</p>
                        <p className="text-2xl font-bold text-foreground">
                          ${result.riskAmount.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                        <p className="text-2xl font-bold text-foreground">
                          ${result.totalValue.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tips */}
                <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                  <h4 className="font-medium text-sm">Position Sizing Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Most traders risk 1-2% per trade</li>
                    <li>• Never risk more than 5% on a single trade</li>
                    <li>• Adjust stop loss based on market volatility</li>
                    <li>• Consider commissions and fees in your calculations</li>
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
              <Link to="/tools/risk-reward">
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Risk/Reward Calculator</p>
                      <p className="text-sm text-muted-foreground">Analyze trade R:R ratio</p>
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
