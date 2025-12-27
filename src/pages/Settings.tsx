import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  Palette,
  ChevronRight,
  Mail,
  Lock,
  Trash2,
  Download,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    weeklyReport: true
  });
  const [theme, setTheme] = useState("dark");

  const tabs = [
    { id: "account", label: "Account", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Palette },
    { id: "privacy", label: "Privacy", icon: Shield },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Settings</h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Account Settings */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Account Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                        <Input defaultValue="Alex Trader" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Username</label>
                        <Input defaultValue="alextrader" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                        <Input defaultValue="alex@example.com" type="email" className="bg-background/50" />
                      </div>
                      <Button>Save Changes</Button>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Change Password</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Current Password</label>
                        <Input type="password" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">New Password</label>
                        <Input type="password" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Confirm New Password</label>
                        <Input type="password" className="bg-background/50" />
                      </div>
                      <Button variant="outline">
                        <Lock className="h-4 w-4 mr-2" />
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-2">Danger Zone</h2>
                    <p className="text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              )}

              {/* Billing Settings */}
              {activeTab === "billing" && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-foreground">Pro Plan</h2>
                        <p className="text-muted-foreground">$19/month • Renews Jan 15, 2026</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">Active</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline">Change Plan</Button>
                      <Button variant="ghost" className="text-red-500 hover:text-red-400">Cancel Subscription</Button>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Payment Method</h2>
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/26</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <Button variant="outline">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Billing History</h2>
                    <div className="space-y-3">
                      {[
                        { date: "Dec 15, 2025", amount: "$19.00", status: "Paid" },
                        { date: "Nov 15, 2025", amount: "$19.00", status: "Paid" },
                        { date: "Oct 15, 2025", amount: "$19.00", status: "Paid" },
                      ].map((invoice, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                          <div>
                            <p className="font-medium text-foreground">{invoice.date}</p>
                            <p className="text-sm text-muted-foreground">Pro Plan - Monthly</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-foreground">{invoice.amount}</span>
                            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded-full">{invoice.status}</span>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border/30">
                      <div>
                        <p className="font-medium text-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your progress</p>
                      </div>
                      <Switch 
                        checked={notifications.email} 
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border/30">
                      <div>
                        <p className="font-medium text-foreground">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Get notified on your device</p>
                      </div>
                      <Switch 
                        checked={notifications.push} 
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border/30">
                      <div>
                        <p className="font-medium text-foreground">Weekly Progress Report</p>
                        <p className="text-sm text-muted-foreground">Receive a summary every week</p>
                      </div>
                      <Switch 
                        checked={notifications.weeklyReport} 
                        onCheckedChange={(checked) => setNotifications({...notifications, weeklyReport: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <p className="font-medium text-foreground">Marketing Emails</p>
                        <p className="text-sm text-muted-foreground">Receive tips, offers and updates</p>
                      </div>
                      <Switch 
                        checked={notifications.marketing} 
                        onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Settings */}
              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Appearance</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setTheme("light")}
                        className={`p-4 rounded-xl border-2 transition-colors ${
                          theme === "light" ? "border-primary" : "border-border/50 hover:border-border"
                        }`}
                      >
                        <div className="w-full h-20 bg-white rounded-lg mb-3 border" />
                        <p className="font-medium text-foreground">Light</p>
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`p-4 rounded-xl border-2 transition-colors ${
                          theme === "dark" ? "border-primary" : "border-border/50 hover:border-border"
                        }`}
                      >
                        <div className="w-full h-20 bg-gray-900 rounded-lg mb-3" />
                        <p className="font-medium text-foreground">Dark</p>
                      </button>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Language</h2>
                    <select className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground">
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Privacy Controls</h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-4 border-b border-border/30">
                        <div>
                          <p className="font-medium text-foreground">Public Profile</p>
                          <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-4 border-b border-border/30">
                        <div>
                          <p className="font-medium text-foreground">Show on Leaderboard</p>
                          <p className="text-sm text-muted-foreground">Display your name on rankings</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <div>
                          <p className="font-medium text-foreground">Activity Status</p>
                          <p className="text-sm text-muted-foreground">Show when you're online</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Data Management</h2>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-between">
                        <span className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Export My Data
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        <span className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          View Privacy Policy
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">Sessions</h2>
                    <p className="text-muted-foreground mb-4">
                      You're currently logged in on 2 devices.
                    </p>
                    <Button variant="outline" className="text-red-500 hover:text-red-400">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out All Devices
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
