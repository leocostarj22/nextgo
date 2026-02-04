import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contacto" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pronto para{" "}
              <span className="text-gradient-primary">Começar</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Vamos transformar a sua ideia num produto digital de sucesso. 
              Entre em contacto connosco para uma consulta gratuita.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="gold" size="xl" className="group w-full sm:w-auto">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Agendar Reunião
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">info@nextgo.pt</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">+351 XXX XXX XXX</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Portugal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
