import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import RecentWork from "@/components/landing/RecentWork";
import WhyUs from "@/components/landing/WhyUs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Code2, Globe, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { src: "/clientes/alcanena.png", name: "Alcanena" },
  { src: "/clientes/barquinha.png", name: "Barquinha" },
  { src: "/clientes/constancia.png", name: "Constância" },
  { src: "/clientes/entroncamento.png", name: "Entroncamento" },
  { src: "/clientes/espacoabsoluto.png", name: "Espaço Absoluto" },
  { src: "/clientes/ferreiradozezere.png", name: "Ferreira do Zêzere" },
  { src: "/clientes/logo-veternys.png", name: "Veternys" },
  { src: "/clientes/macao.png", name: "Mação" },
  { src: "/clientes/mediotejo.png", name: "Médio Tejo" },
  { src: "/clientes/myformula.png", name: "MyFormula" },
  { src: "/clientes/pacfarma_logo.png", name: "PacFarma" },
  { src: "/clientes/sardoal.png", name: "Sardoal" },
  { src: "/clientes/serta.png", name: "Sertã" },
  { src: "/clientes/tomar.png", name: "Tomar" },
  { src: "/clientes/torresnovas.png", name: "Torres Novas" },
  { src: "/clientes/viladerei.png", name: "Vila de Rei" },
];

type ProjectType = "website" | "mobile" | "erp_crm" | "software";

type Project = {
  title: string;
  type: ProjectType;
  description: string;
  tech: string[];
};

const typeMeta: Record<
  ProjectType,
  {
    label: string;
    gradientClass: string;
    icon: typeof Globe;
  }
> = {
  website: {
    label: "Website",
    gradientClass: "bg-gradient-to-br from-primary/35 via-primary/10 to-transparent",
    icon: Globe,
  },
  mobile: {
    label: "Aplicação Mobile",
    gradientClass: "bg-gradient-to-br from-accent/30 via-accent/10 to-transparent",
    icon: Smartphone,
  },
  erp_crm: {
    label: "ERP / CRM",
    gradientClass: "bg-gradient-to-br from-secondary/60 via-secondary/20 to-transparent",
    icon: Building2,
  },
  software: {
    label: "Software",
    gradientClass: "bg-gradient-to-br from-primary/25 via-accent/10 to-transparent",
    icon: Code2,
  },
};

const projects: Project[] = [
  {
    title: "Portal E-Commerce Premium",
    type: "website",
    description:
      "Plataforma de e-commerce com gestão de inventário, pagamentos integrados e dashboard analítico.",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    title: "App de Gestão de Frotas",
    type: "mobile",
    description:
      "Aplicação para monitorização em tempo real de frotas com GPS e relatórios automáticos.",
    tech: ["React Native", "Firebase", "Maps API"],
  },
  {
    title: "ERP Industrial Completo",
    type: "erp_crm",
    description:
      "Sistema integrado de gestão com módulos de produção, RH, finanças e logística.",
    tech: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Portal Institucional",
    type: "website",
    description:
      "Website institucional com foco em performance, acessibilidade, SEO e manutenção simplificada.",
    tech: ["UI/UX", "SEO", "Performance"],
  },
  {
    title: "Sistema de Gestão",
    type: "software",
    description:
      "Plataforma web para automatização de processos com permissões, auditoria e relatórios.",
    tech: ["Web App", "APIs", "Segurança"],
  },
  {
    title: "CRM Comercial",
    type: "erp_crm",
    description:
      "Gestão de pipeline, contactos e tarefas com métricas para tomada de decisão.",
    tech: ["CRM", "Relatórios", "Integrações"],
  },
];

const Index = () => {
  const [clientsApi, setClientsApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!clientsApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      clientsApi.scrollNext();
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [clientsApi]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <section className="py-16 sm:py-20 relative overflow-hidden border-b border-border/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest"
            >
              Empresas que confiam em nós
            </motion.p>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <Carousel
                setApi={setClientsApi}
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {clients.map((client) => (
                    <CarouselItem
                      key={client.name}
                      className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                      <Card className="glass rounded-2xl border-border/40">
                        <CardContent className="p-4 flex items-center justify-center">
                          <div className="h-12 w-full rounded-xl bg-white border border-border/40 flex items-center justify-center overflow-hidden px-4">
                            <img
                              src={client.src}
                              alt={client.name}
                              loading="lazy"
                              className="max-h-10 max-w-full object-contain"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        <Services />
        <RecentWork />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
