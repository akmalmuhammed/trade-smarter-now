import { motion } from "framer-motion";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ImageBlock = ({ src, alt, caption }: ImageBlockProps) => {
  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <figure>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {caption && (
            <figcaption className="text-sm text-muted-foreground text-center mt-3">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </motion.section>
  );
};
