import { motion } from "framer-motion";

interface KeyTakeawaysBlockProps {
  title?: string;
  takeaways: string[];
  cta?: string;
}

export const KeyTakeawaysBlock = ({
  title = "Key Takeaways So Far",
  takeaways,
  cta = "Got it? Let's keep going. 👇",
}: KeyTakeawaysBlockProps) => {
  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-display font-semibold mb-6">
            💡 {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            Before we move on, let's recap what you've learned:
          </p>
          
          <ul className="space-y-3 mb-6">
            {takeaways.map((takeaway, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-success mt-0.5">✓</span>
                <span className="text-sm">{takeaway}</span>
              </motion.li>
            ))}
          </ul>
          
          <p className="text-sm text-foreground/80">
            {cta}
          </p>
        </div>
      </div>
    </motion.section>
  );
};
