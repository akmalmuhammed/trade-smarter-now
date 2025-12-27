import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CreditCard, 
  Lock, 
  Check,
  Shield,
  ArrowLeft
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Checkout = () => {
  const { plan } = useParams();
  const isAnnual = plan === "annual";
  
  const pricing = {
    monthly: { price: 19, period: "month", total: 19 },
    annual: { price: 12, period: "month", total: 144 }
  };

  const selected = isAnnual ? pricing.annual : pricing.monthly;

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/upgrade" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to plans
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Lucidity Pro</p>
                      <p className="text-sm text-muted-foreground">
                        {isAnnual ? "Annual" : "Monthly"} subscription
                      </p>
                    </div>
                    <p className="font-medium text-foreground">${selected.price}/{selected.period}</p>
                  </div>
                  
                  {isAnnual && (
                    <div className="flex items-center justify-between text-green-500">
                      <p>Annual discount</p>
                      <p>-$84.00</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between py-4 border-t border-border/30 mb-6">
                  <p className="text-lg font-bold text-foreground">Total</p>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">${selected.total}</p>
                    <p className="text-sm text-muted-foreground">
                      {isAnnual ? "per year" : "per month"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Access to all 120+ lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>AI-powered feedback</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Completion certificates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Your payment is secured with SSL encryption</span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment Details</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Name on Card
                    </label>
                    <Input 
                      type="text" 
                      placeholder="John Doe"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <Input 
                        type="text" 
                        placeholder="1234 5678 9012 3456"
                        className="bg-background/50 pr-12"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Expiry Date
                      </label>
                      <Input 
                        type="text" 
                        placeholder="MM/YY"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        CVC
                      </label>
                      <div className="relative">
                        <Input 
                          type="text" 
                          placeholder="123"
                          className="bg-background/50 pr-10"
                        />
                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Country
                    </label>
                    <select className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground">
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6 text-lg"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Pay ${selected.total}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By subscribing, you agree to our{" "}
                    <Link to="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
