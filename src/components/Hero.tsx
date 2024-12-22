import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code2, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
            >
              Desarrollador .NET & Azure Cloud
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Construyendo soluciones <span className="text-primary">escalables</span> en la nube
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              Especialista en desarrollo de aplicaciones empresariales con .NET Core y servicios en la nube de Azure.
              Enfocado en arquitecturas modernas y prácticas DevOps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group" onClick={() => navigate("/projects")}>
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contactar
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            <div className="glass-panel p-6 rounded-lg space-y-3">
              <Cloud className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Azure Cloud</h3>
              <p className="text-sm text-muted-foreground">Servicios en la nube, serverless y microservicios</p>
            </div>
            <div className="glass-panel p-6 rounded-lg space-y-3 mt-6">
              <Code2 className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">.NET Core</h3>
              <p className="text-sm text-muted-foreground">Desarrollo web y APIs con ASP.NET Core</p>
            </div>
            <div className="glass-panel p-6 rounded-lg space-y-3">
              <Database className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Base de Datos</h3>
              <p className="text-sm text-muted-foreground">SQL Server, Cosmos DB y cache distribuida</p>
            </div>
            <div className="glass-panel p-6 rounded-lg space-y-3 mt-6">
              <Server className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">DevOps</h3>
              <p className="text-sm text-muted-foreground">CI/CD, contenedores y orquestación</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;