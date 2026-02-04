import { motion } from "framer-motion";
import { Zap, Shield, Users, Rocket, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais recentes tecnologias e frameworks para garantir performance e escalabilidade.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Implementamos as melhores práticas de segurança em todos os nossos projetos.",
  },
  {
    icon: Users,
    title: "Equipa Especializada",
    description: "Profissionais experientes dedicados ao sucesso do seu projeto.",
  },
  {
    icon: Rocket,
    title: "Entrega Ágil",
    description: "Metodologias ágeis que garantem entregas rápidas e de qualidade.",
  },
  {
    icon: Clock,
    title: "Suporte Contínuo",
    description: "Acompanhamento pós-lançamento para garantir o funcionamento perfeito.",
  },
  {
    icon: Headphones,
    title: "Comunicação Clara",
    description: "Mantemos-o informado em cada fase do desenvolvimento do projeto.",
  },
];

const WhyUs = () => {
  return (
    <section id="porque" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

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
            Porquê a{" "}
            <span className="text-gradient-gold">NextGo</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprometemo-nos com a excelência em cada projeto que desenvolvemos
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
