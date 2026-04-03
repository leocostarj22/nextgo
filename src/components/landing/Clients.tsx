import { motion } from "framer-motion";

const clients = [
  { name: "TechVision", initials: "TV" },
  { name: "GlobalSoft", initials: "GS" },
  { name: "DataFlow", initials: "DF" },
  { name: "CloudNine", initials: "C9" },
  { name: "InnovaLab", initials: "IL" },
  { name: "NetPrime", initials: "NP" },
  { name: "DigiCore", initials: "DC" },
  { name: "SmartEdge", initials: "SE" },
];

const Clients = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden border-t border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest"
        >
          Empresas que confiam em nós
        </motion.p>

        {/* Infinite scroll carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-12 w-max">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl glass hover:border-primary/30 transition-colors duration-300 shrink-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {client.initials}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
