import { Link } from "next-view-transitions";
import { Waves, Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

import { COMPANY_CONFIG } from "@/lib/seo/company";
import { FOOTER_SECTIONS } from "@/lib/data";

const footerLinks = {
  services: FOOTER_SECTIONS.find(s => s.title === "Services")?.links || [],
  solutions: FOOTER_SECTIONS.find(s => s.title === "Solutions Métiers")?.links || [],
  company: FOOTER_SECTIONS.find(s => s.title === "Agence")?.links || [],
  zones: FOOTER_SECTIONS.find(s => s.title === "Zones d'intervention")?.links || [],
  legal: FOOTER_SECTIONS.find(s => s.title === "Légal")?.links || [],
};


// ... existing imports

export function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-linear-to-t from-ocean/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ocean/10 blur-3xl rounded-full opacity-30 pointer-events-none" />
      
      {/* Top Border with Gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-ocean/30 to-transparent" />
      
      {/* Newsletter / CTA Section */}
      <div className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 bg-ocean/10 border border-ocean/20 rounded-full mb-4">
                <span className="text-xs font-medium text-ocean">On se rencontre ?</span>
              </div>
              <p className="text-2xl lg:text-3xl font-bold mb-2">
                L&apos;excellence digitale, <span className="text-ocean">l&apos;intelligence en plus</span>.
              </p>
              <p className="text-muted-foreground max-w-md">
                Ancrés au Pays Basque. Discutons de votre projet autour d&apos;un café.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 text-sm font-semibold overflow-hidden rounded-full"
              >
                <span className="absolute inset-0 bg-linear-to-r from-ocean to-accent" />
                <span className="absolute inset-0 bg-linear-to-r from-ocean-light to-ocean opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-background flex items-center gap-2">
                  Démarrer un projet
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
              <Link
                href="/tarifs"
                className="px-8 py-4 text-sm font-medium border border-border rounded-full hover:bg-foreground/5 hover:border-ocean/30 transition-all"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-ocean/20 blur-lg rounded-full group-hover:bg-ocean/30 transition-colors" />
                <Waves className="relative w-9 h-9 text-ocean" />
              </div>
              <span className="text-2xl font-bold">
                {COMPANY_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Codé avec passion au Pays Basque. Sites internet haute performance, SEO local et identité de marque.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://linkedin.com/company/waveia"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 bg-foreground/5 border border-border rounded-xl hover:bg-ocean/10 hover:border-ocean/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover/social:text-ocean transition-colors" />
              </a>
              <a
                href="https://instagram.com/waveia.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-3 bg-foreground/5 border border-border rounded-xl hover:bg-ocean/10 hover:border-ocean/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover/social:text-ocean transition-colors" />
              </a>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-foreground/5 border border-border rounded-lg">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-ocean text-sm" aria-hidden="true">★</span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">5.0 sur Google</span>
            </div>

            {/* Quick Links (Agence & Ressources) */}
            <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-border">
                <div>
                    <p className="font-bold text-foreground dark:text-white mb-4 text-sm font-heading">Agence</p>
                     <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/a-propos" className="hover:text-ocean transition-colors">À propos</Link></li>
                        <li><Link href="/contact" className="hover:text-ocean transition-colors">Contact</Link></li>
                     </ul>
                </div>
                <div>
                     <p className="font-bold text-foreground dark:text-white mb-4 text-sm font-heading">Ressources</p>
                     <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/blog" className="hover:text-ocean transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ocean animate-pulse" /> Le Blog</Link></li>
                        <li><Link href="/ressources" className="hover:text-ocean transition-colors">Tous les Guides</Link></li>
                        <li><Link href="/ressources/referencement-local-pays-basque" className="hover:text-ocean transition-colors">Guide SEO Local</Link></li>
                     </ul>
                </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5">
              <Link href={FOOTER_SECTIONS[0]?.href ?? "#"} className="hover:text-ocean transition-colors">
                {FOOTER_SECTIONS[0]?.title ?? "Services"}
              </Link>
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-ocean transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean/50 group-hover:bg-ocean transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5">
              <Link href={FOOTER_SECTIONS[2]?.href ?? "#"} className="hover:text-ocean transition-colors">
                {FOOTER_SECTIONS[2]?.title ?? "Solutions"}
              </Link>
            </p>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-ocean transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean/50 group-hover:bg-ocean transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5">
              <Link href={FOOTER_SECTIONS[3]?.href ?? "#"} className="hover:text-ocean transition-colors">
                {FOOTER_SECTIONS[3]?.title ?? "Zones"}
              </Link>
            </p>
            <ul className="space-y-3">
              {footerLinks.zones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-ocean transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean/50 group-hover:bg-ocean transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-foreground mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/contact" 
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-ocean/10 rounded-lg group-hover:bg-ocean/20 transition-colors">
                    <MapPin className="w-4 h-4 text-ocean" />
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-ocean transition-colors">
                    <span className="font-medium text-foreground group-hover:text-ocean transition-colors">{COMPANY_CONFIG.address.street}</span><br />
                    {COMPANY_CONFIG.address.city}
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-ocean transition-colors group"
                >
                  <div className="p-2 bg-ocean/10 rounded-lg group-hover:bg-ocean/20 transition-colors">
                    <Mail className="w-4 h-4 text-ocean" />
                  </div>
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_CONFIG.telephone}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-ocean transition-colors group"
                >
                  <div className="p-2 bg-ocean/10 rounded-lg group-hover:bg-ocean/20 transition-colors">
                    <Phone className="w-4 h-4 text-ocean" />
                  </div>
                  {COMPANY_CONFIG.telephoneLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 {COMPANY_CONFIG.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-ocean transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}