import { motion } from "framer-motion";

interface MythBlockProps {
  myth: string;
  reality: string;
}

export const MythBlock = ({ myth, reality }: MythBlockProps) => {
  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="rounded-2xl border border-border overflow-hidden">
          {/* Myth */}
          <div className="p-6 bg-destructive/5 border-b border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <h4 className="text-sm font-semibold text-destructive mb-2">
                  Common Myth
                </h4>
                <p className="text-foreground italic">
                  "{myth}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Reality */}
          <div className="p-6 bg-success/5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="text-sm font-semibold text-success mb-2">
                  Reality
                </h4>
                <p className="text-foreground/90">
                  {reality}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
