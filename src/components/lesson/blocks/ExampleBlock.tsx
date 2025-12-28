import { motion } from "framer-motion";

interface ExampleStep {
  label: string;
  items: string[];
}

interface ExampleBlockProps {
  title: string;
  scenario: string;
  traditional: ExampleStep;
  crypto: ExampleStep;
  conclusion: string;
}

export const ExampleBlock = ({
  title,
  scenario,
  traditional,
  crypto,
  conclusion,
}: ExampleBlockProps) => {
  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border border-border p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-display font-semibold mb-4">
            📖 {title}
          </h3>
          
          <p className="text-foreground/90 mb-6">
            {scenario}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Traditional */}
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                {traditional.label}
              </h4>
              <ul className="space-y-2">
                {traditional.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Crypto */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-medium text-primary mb-3">
                {crypto.label}
              </h4>
              <ul className="space-y-2">
                {crypto.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-sm text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="text-success">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-primary font-medium">
            {conclusion}
          </p>
        </div>
      </div>
    </motion.section>
  );
};
