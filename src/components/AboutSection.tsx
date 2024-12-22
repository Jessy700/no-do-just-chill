import { motion } from "framer-motion";
import { Code2, Cloud, Database, GitBranch } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: ".NET Core",
      description: "Desarrollo de aplicaciones web y APIs con ASP.NET Core",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Azure Cloud",
      description: "Arquitectura de soluciones en la nube y servicios Azure",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Base de Datos",
      description: "SQL Server, Cosmos DB y optimización de consultas",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "DevOps",
      description: "CI/CD, Docker, y Azure DevOps",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desarrollador .NET especializado en soluciones cloud con Azure. 
            Apasionado por crear aplicaciones escalables y eficientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;