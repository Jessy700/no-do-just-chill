export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
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