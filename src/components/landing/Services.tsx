import { motion } from "framer-motion";
import { Globe, Smartphone, Building2, Code2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Websites modernos, rápidos e otimizados para SEO. Landing pages, e-commerce e plataformas corporativas.",
    features: ["Design Responsivo", "SEO Otimizado", "Alta Performance"],
  },
  {
    icon: Smartphone,
    title: "Aplicações",
    description:
      "Apps mobile e web progressivas com experiências de utilizador excecionais e funcionalidades avançadas.",
    features: ["iOS & Android", "PWA", "UI/UX Premium"],
  },
  {
    icon: Building2,
    title: "ERP & CRM",
    description:
      "Sistemas de gestão empresarial personalizados que automatizam processos e aumentam a produtividade.",
    features: ["Gestão Completa", "Integrações", "Relatórios"],
  },
  {
    icon: Code2,
    title: "Software à Medida",
    description:
      "Soluções únicas desenvolvidas especificamente para as necessidades do seu negócio.",
    features: ["APIs", "Automação", "Cloud Native"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Os Nossos{" "}
            <span className="text-gradient-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções tecnológicas completas para transformar e digitalizar o seu negócio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-500">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
              >
                Saber mais
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
