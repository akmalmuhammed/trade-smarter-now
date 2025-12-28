import { motion } from "framer-motion";

interface DefinitionBlockProps {
  icon: string;
  term: string;
  definition: string;
}

export const DefinitionBlock = ({ icon, term, definition }: DefinitionBlockProps) => {
  return (
    <motion.section
      className="py-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <div className="relative rounded-2xl border-l-4 border-primary bg-gradient-to-r from-primary/10 via-card to-card p-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">{icon}</span>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {term}
              </h3>
              <p className="text-base text-foreground/90 leading-relaxed">
                {definition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
