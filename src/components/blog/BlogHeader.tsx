import { motion } from "framer-motion";

export const BlogHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-4 text-foreground">Blog</h2>
      <p className="text-muted-foreground text-lg">Compartiendo conocimiento sobre .NET y Azure</p>
    </motion.div>
  );
};