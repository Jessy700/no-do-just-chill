import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Tag, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  code?: string;
  date: string;
  readingTime?: string;
  tags: string[];
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Implementando una arquitectura de microservicios en Azure",
    excerpt: "Una guía práctica sobre cómo implementar microservicios en Azure usando las mejores prácticas y patrones de diseño modernos.",
    content: "Los microservicios son una arquitectura que permite desarrollar aplicaciones como un conjunto de pequeños servicios...",
    code: `
// Ejemplo de un microservicio en .NET
public class WeatherForecastController : ControllerBase
{
    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        var rng = new Random();
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = rng.Next(-20, 55),
            Summary = Summaries[rng.Next(Summaries.Length)]
        })
        .ToArray();
    }
}`,
    date: "2024-03-15",
    readingTime: "5 min",
    tags: ["Microservicios", "Azure", ".NET Core", "API"],
    category: "Azure"
  },
  {
    id: 2,
    title: "Optimización de rendimiento en aplicaciones .NET",
    excerpt: "Descubre las mejores técnicas para optimizar el rendimiento de tus aplicaciones .NET y mejorar la experiencia del usuario.",
    content: "La optimización del rendimiento es crucial para mantener una buena experiencia de usuario...",
    date: "2024-03-14",
    readingTime: "4 min",
    tags: [".NET Core", "Performance", "Best Practices"],
    category: ".NET"
  }
];

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
    <section className="section-padding bg-[#F1F0FB]" id="blog">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Blog</h2>
          <p className="text-muted-foreground text-lg">Compartiendo conocimiento sobre .NET y Azure</p>
        </motion.div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Filtrar por etiquetas:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </div>
                  ))}
                </div>

                {post.code && (
                  <div className="relative mt-6 mb-6">
                    <pre className="!bg-[#1A1F2C] !p-6 rounded-lg overflow-x-auto text-[#E5DEFF]">
                      <code className="text-sm font-mono">{post.code}</code>
                    </pre>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-3 right-3 bg-[#2A2F3C] hover:bg-[#3A3F4C]"
                      onClick={() => copyToClipboard(post.code!, post.id)}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;