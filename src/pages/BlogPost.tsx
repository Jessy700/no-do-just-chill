import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl">Artículo no encontrado</h1>
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
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-muted-foreground mb-8">
            <span>{post.date}</span>
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
          <div className="mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="leading-relaxed">
            {post.content}
          </div>
          {post.code && (
            <pre className="bg-secondary/20 p-6 rounded-lg overflow-x-auto my-6">
              <code className="text-sm font-mono">{post.code}</code>
            </pre>
          )}
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;