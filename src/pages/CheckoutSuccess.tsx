import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CheckoutSuccess = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="h-12 w-12 text-green-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lucidity Pro!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your payment was successful. You now have full access to all premium features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">What's unlocked for you:</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-xl">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">120+ Lessons</p>
                <p className="text-sm text-muted-foreground">All asset classes</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-xl">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">AI Feedback</p>
                <p className="text-sm text-muted-foreground">Personalized learning</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-xl">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">Certificates</p>
                <p className="text-sm text-muted-foreground">Verify your skills</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link to="/dashboard">
                Go to Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">
                Browse Courses
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-muted-foreground mt-8"
          >
            A confirmation email has been sent to your inbox.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutSuccess;
