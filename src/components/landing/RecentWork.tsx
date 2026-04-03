import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Smartphone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Portal E-Commerce Premium",
    category: "Website",
    icon: Globe,
    description: "Plataforma de e-commerce com gestão de inventário, pagamentos e dashboard analítico.",
    tags: ["React", "Node.js", "Stripe"],
    gradient: "from-primary to-blue-glow",
  },
  {
    title: "App de Gestão de Frotas",
    category: "Aplicação Mobile",
    icon: Smartphone,
    description: "Aplicação para monitorização em tempo real de frotas com GPS e relatórios automáticos.",
    tags: ["React Native", "Firebase", "Maps API"],
    gradient: "from-accent to-gold-light",
  },
  {
    title: "ERP Industrial Completo",
    category: "ERP / CRM",
    icon: Building2,
    description: "Sistema integrado de gestão com módulos de produção, RH, finanças e logística.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    gradient: "from-primary to-accent",
  },
];

const RecentWork = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Últimos{" "}
              <span className="text-gradient-gold">Trabalhos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Alguns dos projetos que desenvolvemos recentemente para os nossos clientes
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="heroOutline" size="lg" className="group shrink-0">
              Ver Todos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Preview */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
