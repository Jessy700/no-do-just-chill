import { motion } from "framer-motion";
import { Copy, Check, Tag, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  copiedId: number | null;
  onCopy: (code: string, postId: number) => Promise<void>;
}

export const BlogCard = ({ post, copiedId, onCopy }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-secondary/10"
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <Badge variant="secondary" className="capitalize">
            {post.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </div>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary/30 dark:bg-secondary/20 px-3 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {tag}
            </div>
          ))}
        </div>

        {post.code && (
          <div className="relative mt-6 mb-6">
            <pre className="bg-secondary dark:bg-secondary/10 p-6 rounded-lg overflow-x-auto text-foreground">
              <code className="text-sm font-mono">{post.code}</code>
            </pre>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-3 right-3 bg-secondary hover:bg-secondary/80 dark:bg-secondary/20 dark:hover:bg-secondary/30"
              onClick={() => onCopy(post.code!, post.id)}
            >
              {copiedId === post.id ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}

        <Button variant="link" className="group text-primary hover:text-primary/90 p-0 h-auto font-medium">
          Leer más
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.article>
  );
};