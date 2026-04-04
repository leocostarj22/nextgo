import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    servicos: [
      { label: "Websites", href: "#servicos" },
      { label: "Aplicações", href: "#servicos" },
      { label: "ERP & CRM", href: "#servicos" },
      { label: "Software à Medida", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Porquê NextGo", href: "#porque" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              alt="NextGo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções tecnológicas premium para empresas que querem crescer.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-3">
              {links.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NextGo. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://nextgo.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              nextgo.pt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
