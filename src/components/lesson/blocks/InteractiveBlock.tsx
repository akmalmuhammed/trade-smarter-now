import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

interface DataPoint {
  year: number;
  price: number;
}

interface InteractiveBlockProps {
  title: string;
  data: DataPoint[];
  insight: string;
}

export const InteractiveBlock = ({ title, data, insight }: InteractiveBlockProps) => {
  const [selectedIndex, setSelectedIndex] = useState(Math.floor(data.length / 2));
  const currentData = data[selectedIndex];

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price.toFixed(2)}`;
  };

  const minPrice = Math.min(...data.map(d => d.price));
  const maxPrice = Math.max(...data.map(d => d.price));
  const pricePercentage = ((currentData.price - minPrice) / (maxPrice - minPrice)) * 100;

  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-display font-semibold mb-6">
            🎮 {title}
          </h3>
          
          {/* Chart visualization */}
          <div className="relative h-40 mb-6 bg-muted/30 rounded-xl p-4 overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-4 flex flex-col justify-between">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-t border-border/50 w-full" />
              ))}
            </div>
            
            {/* Price bar */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 h-8 rounded-lg bg-muted overflow-hidden"
              initial={false}
            >
              <motion.div
                className="h-full bg-gradient-primary rounded-lg"
                initial={false}
                animate={{ width: `${pricePercentage}%` }}
                transition={{ type: "spring", damping: 20 }}
              />
            </motion.div>
            
            {/* Price display */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="text-3xl font-display font-bold gradient-text">
                {formatPrice(currentData.price)}
              </span>
              <span className="text-sm text-muted-foreground">
                Year: {currentData.year}
              </span>
            </div>
          </div>
          
          {/* Year slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{data[0].year}</span>
              <span>{data[data.length - 1].year}</span>
            </div>
            <Slider
              value={[selectedIndex]}
              min={0}
              max={data.length - 1}
              step={1}
              onValueChange={([value]) => setSelectedIndex(value)}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground text-center">
              Drag to see price history
            </p>
          </div>
          
          <p className="text-sm text-primary mt-6 pt-4 border-t border-border">
            {insight}
          </p>
        </div>
      </div>
    </motion.section>
  );
};
