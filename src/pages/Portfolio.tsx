import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Building2, Code2, Globe, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Category = "Website" | "Aplicação Mobile" | "ERP / CRM" | "Software";

type Project = {
  title: string;
  category: Category;
  icon: typeof Globe;
  description: string;
  tags: string[];
  gradient: string;
  url?: string;
  coverSrc?: string;
};

const projects: Project[] = [
  {
    title: "Município de Alcanena",
    category: "Website",
    icon: Globe,
    description:
      "Portal institucional com foco em clareza de informação, navegação e experiência em dispositivos móveis.",
    tags: ["UI/UX", "SEO", "Performance"],
    gradient: "from-primary to-blue-glow",
    url: "https://cm-alcanena.pt",
    coverSrc: "/clientes/sites/alcanena.png",
  },
  {
    title: "Portal E-Commerce Premium",
    category: "Website",
    icon: Globe,
    description:
      "Plataforma de e-commerce com gestão de inventário, pagamentos integrados e dashboard analítico completo.",
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
  {
    title: "Plataforma de Reservas Online",
    category: "Website",
    icon: Globe,
    description:
      "Sistema de reservas com calendário interativo, pagamentos e notificações automáticas.",
    tags: ["React", "Supabase", "Tailwind"],
    gradient: "from-primary to-blue-glow",
  },
  {
    title: "App de Saúde e Bem-Estar",
    category: "Aplicação Mobile",
    icon: Smartphone,
    description:
      "Aplicação de acompanhamento de saúde com integração a wearables e planos personalizados.",
    tags: ["Flutter", "Dart", "Health API"],
    gradient: "from-accent to-gold-light",
  },
  {
    title: "CRM para Imobiliárias",
    category: "ERP / CRM",
    icon: Building2,
    description:
      "Gestão completa de imóveis, clientes, visitas e contratos com portal para clientes.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    gradient: "from-primary to-accent",
  },
  {
    title: "Dashboard Analytics SaaS",
    category: "Software",
    icon: Code2,
    description:
      "Plataforma SaaS de analytics com visualização de dados em tempo real e relatórios exportáveis.",
    tags: ["React", "D3.js", "AWS"],
    gradient: "from-primary to-blue-glow",
  },
  {
    title: "Sistema de Faturação",
    category: "Software",
    icon: Code2,
    description:
      "Software de faturação certificado com integração SAF-T, multi-empresa e multi-moeda.",
    tags: ["TypeScript", "PostgreSQL", "PDF"],
    gradient: "from-accent to-gold-light",
  },
  {
    title: "Marketplace B2B",
    category: "Website",
    icon: Globe,
    description:
      "Plataforma de marketplace para empresas com sistema de licitações e gestão de fornecedores.",
    tags: ["Next.js", "Prisma", "Stripe"],
    gradient: "from-primary to-accent",
  },
];

const categories: Array<"Todos" | Category> = ["Todos", "Website", "Aplicação Mobile", "ERP / CRM", "Software"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todos");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return projects;
    }

    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Os Nossos{" "}
              <span className="text-gradient-gold">Projetos</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Conheça alguns dos projetos que desenvolvemos. Cada solução é única e
              pensada para responder às necessidades específicas de cada cliente.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => {
              const isActive = cat === activeCategory;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.category}-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-44">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  {project.coverSrc ? (
                    <img
                      src={project.coverSrc}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                </div>

                <div className="absolute top-5 left-5">
                  <div className="w-11 h-11 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      {project.url ? (
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                    </h3>

                    {project.url ? (
                      <Button asChild variant="heroOutline" size="sm" className="rounded-full">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          Visitar
                        </a>
                      </Button>
                    ) : null}
                  </div>

                  <p className="text-sm text-muted-foreground mt-3 mb-4 leading-relaxed">
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
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;