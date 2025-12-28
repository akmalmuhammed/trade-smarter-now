import { motion } from "framer-motion";

interface TextBlockProps {
  icon?: string;
  heading?: string;
  paragraphs: string[];
}

export const TextBlock = ({ icon, heading, paragraphs }: TextBlockProps) => {
  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        {(icon || heading) && (
          <div className="flex items-center gap-3 mb-4">
            {icon && <span className="text-2xl">{icon}</span>}
            {heading && (
              <h2 className="text-xl font-display font-semibold text-foreground">
                {heading}
              </h2>
            )}
          </div>
        )}
        
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg leading-relaxed text-foreground/90"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
