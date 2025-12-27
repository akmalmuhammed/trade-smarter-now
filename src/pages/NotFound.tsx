import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout showFooter={false}>
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="font-display text-[8rem] sm:text-[12rem] font-bold gradient-text leading-none mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Looks like this page went to the moon without us. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" asChild>
              <Link to="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="glass" asChild>
              <Link to="/pricing">
                <ArrowLeft className="w-4 h-4" />
                View Pricing
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
