import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Tag, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { BlogPost, blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog/BlogCard";
import { BlogHeader } from "./blog/BlogHeader";
import { TagFilter } from "./blog/TagFilter";

const BlogSection = () => {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const copyToClipboard = async (code: string, postId: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(postId);
      toast({
        title: "Código copiado",
        description: "El código ha sido copiado al portapapeles",
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el código",
        variant: "destructive",
      });
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTags.length > 0
    ? blogPosts.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      )
    : blogPosts;

  return (
    <section className="section-padding bg-background transition-colors duration-300" id="blog">
      <div className="container-width">
        <BlogHeader />
        <TagFilter 
          allTags={allTags} 
          selectedTags={selectedTags} 
          onTagToggle={toggleTag} 
        />
        <div className="grid grid-cols-1 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard 
              key={post.id}
              post={post}
              copiedId={copiedId}
              onCopy={copyToClipboard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;