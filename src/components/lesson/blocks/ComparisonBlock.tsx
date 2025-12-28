import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  traditional: string | boolean;
  crypto: string | boolean;
}

interface ComparisonBlockProps {
  title: string;
  rows: ComparisonRow[];
  summary?: string;
}

export const ComparisonBlock = ({ title, rows, summary }: ComparisonBlockProps) => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-success" />
      ) : (
        <X className="w-5 h-5 text-destructive" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[680px] mx-auto">
        <h3 className="flex items-center gap-2 text-lg font-display font-semibold mb-4">
          🆚 {title}
        </h3>
        
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">
                    Traditional $
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-primary">
                    Crypto
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-4 py-3 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {renderCell(row.traditional)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {renderCell(row.crypto)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {summary && (
          <p className="mt-4 text-sm text-primary flex items-center gap-2">
            💡 {summary}
          </p>
        )}
      </div>
    </motion.section>
  );
};
