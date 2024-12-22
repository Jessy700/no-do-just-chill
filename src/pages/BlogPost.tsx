import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl text-foreground">Artículo no encontrado</h1>
          <Button onClick={() => navigate("/blog")} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 max-w-4xl"
      >
        <Button 
          variant="ghost" 
          onClick={() => navigate("/blog")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Button>

        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="secondary" className="capitalize">
              {post.category}
            </Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <div 
                key={tag} 
                className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary/30 dark:bg-secondary/20 px-3 py-1 rounded-full"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </div>
            ))}
          </div>

          <div className="text-muted-foreground leading-relaxed">
            {post.content}
          </div>

          {post.code && (
            <pre className="bg-secondary/50 dark:bg-secondary/10 p-6 rounded-lg overflow-x-auto my-6">
              <code className="text-sm font-mono text-foreground">{post.code}</code>
            </pre>
          )}
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;