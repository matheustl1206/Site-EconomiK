import { Link } from "react-router";
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer style={{ background: "#0a0a0a", fontFamily: "'Figtree', sans-serif" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="2.5" fill="none" />
                <rect x="9" y="16" width="3" height="5" fill="#FFD700" />
                <rect x="13" y="13" width="3" height="8" fill="#FFD700" />
                <rect x="17" y="10" width="3" height="11" fill="#FFD700" />
                <line x1="22.5" y1="22.5" x2="30" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                className="text-white text-lg tracking-wider"
              >
                ECONOMI<span style={{ color: "#FFD700" }}>K</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Transformando dados em decisões estratégicas para empresas, organizações e empreendedores.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm flex items-center justify-center text-white/40 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all duration-200 border border-white/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "white" }}
              className="text-sm mb-5 tracking-widest uppercase"
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/servicos", label: "Serviços" },
                { to: "/cases", label: "Cases" },
                { to: "/insights", label: "Insights" },
                { to: "/workshops", label: "Workshops" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/50 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "white" }}
              className="text-sm mb-5 tracking-widest uppercase"
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#FFD700]/70" />
                contato@economik.com.br
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#FFD700]/70" />
                (11) 1234-5678
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#FFD700]/70" />
                Av. São João, 123 – São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "white" }}
              className="text-sm mb-5 tracking-widest uppercase"
            >
              Newsletter
            </h4>
            <p className="text-sm text-white/50 mb-4">
              Receba insights de economia e mercado diretamente no seu e-mail.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="p-2 rounded-sm transition-all duration-200 hover:brightness-90"
                style={{ background: "#FFD700" }}
              >
                <ArrowRight size={16} className="text-black" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2024 EconomiK. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos de Serviço"].map((label) => (
              <a key={label} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
