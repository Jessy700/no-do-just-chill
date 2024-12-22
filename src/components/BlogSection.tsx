import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Tag } from "lucide-react";
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
    tags: ["Microservicios", "Azure", ".NET Core", "API"],
    category: "Azure"
  },
  {
    id: 2,
    title: "Optimización de rendimiento en aplicaciones .NET",
    excerpt: "Descubre las mejores técnicas para optimizar el rendimiento de tus aplicaciones .NET y mejorar la experiencia del usuario.",
    content: "La optimización del rendimiento es crucial para mantener una buena experiencia de usuario...",
    date: "2024-03-14",
    tags: [".NET Core", "Performance", "Best Practices"],
    category: ".NET"
  }
];

const BlogSection = () => {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<number | null>(null);

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

  return (
    <section className="section-padding" id="blog">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground">Compartiendo conocimiento sobre .NET y Azure</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </div>
                  ))}
                </div>

                {post.code && (
                  <div className="relative mt-6">
                    <pre className="!bg-secondary/50 !p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{post.code}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
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

                <Button variant="link" className="mt-4 p-0">
                  Leer más
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