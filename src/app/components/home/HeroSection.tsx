import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, BarChart2, Target } from "lucide-react";

const FLOATERS = [
  { icon: TrendingUp, label: "+47% crescimento", sub: "análise de mercado", x: "right-8 top-24", delay: 0.6 },
  { icon: BarChart2, label: "32 projetos", sub: "entregues com sucesso", x: "right-8 bottom-32", delay: 0.9 },
  { icon: Target, label: "100% estratégico", sub: "baseado em dados", x: "left-4 bottom-16 lg:left-auto lg:right-64 lg:bottom-28", delay: 1.2 },
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8 border text-xs transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                borderColor: "rgba(255,215,0,0.3)",
                background: "rgba(255,215,0,0.06)",
                color: "#FFD700",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
              EMPRESA JÚNIOR DE ECONOMIA
            </div>

            <h1
              className={`text-white mb-6 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Inteligência{" "}
              <span style={{ color: "#FFD700" }}>econômica</span>
              <br />
              para decisões que
              <br />
              geram resultados.
            </h1>

            <p
              className={`text-white/60 mb-10 max-w-md transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "'Figtree', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Transformamos dados em estratégias para empresas, organizações e empreendedores.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-black rounded-sm text-sm transition-all duration-200 hover:brightness-90 hover:gap-3"
                style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Solicitar Diagnóstico
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white rounded-sm text-sm border border-white/20 transition-all duration-200 hover:border-white/50"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                Conhecer Serviços
              </Link>
            </div>

            {/* Stats row */}
            <div
              className={`mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 transition-all duration-700 delay-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "50+", label: "Projetos entregues" },
                { value: "98%", label: "Taxa de satisfação" },
                { value: "5 anos", label: "De experiência" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: "1.75rem" }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`hidden lg:flex relative items-center justify-center h-[500px] transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Central magnifying glass */}
            <div className="relative">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" opacity={0.9}>
                <circle cx="120" cy="120" r="100" stroke="rgba(255,215,0,0.15)" strokeWidth="2" fill="none" />
                <circle cx="120" cy="120" r="80" stroke="rgba(255,215,0,0.25)" strokeWidth="1.5" fill="none" />
                <circle cx="120" cy="120" r="60" stroke="rgba(255,215,0,0.4)" strokeWidth="1" fill="rgba(255,215,0,0.04)" />

                {/* Bar chart inside */}
                <rect x="88" y="130" width="12" height="25" fill="#FFD700" opacity={0.7} rx="1" />
                <rect x="108" y="115" width="12" height="40" fill="#FFD700" opacity={0.9} rx="1" />
                <rect x="128" y="105" width="12" height="50" fill="#FFD700" rx="1" />

                {/* Handle */}
                <line x1="198" y1="198" x2="255" y2="255" stroke="rgba(255,215,0,0.5)" strokeWidth="16" strokeLinecap="round" />
                <line x1="198" y1="198" x2="255" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="8" strokeLinecap="round" />
              </svg>

              {/* Pulse rings */}
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  border: "1px solid rgba(255,215,0,0.1)",
                  animationDuration: "3s",
                }}
              />
            </div>

            {/* Floating data cards */}
            {FLOATERS.map(({ icon: Icon, label, sub, x, delay }) => (
              <div
                key={label}
                className={`absolute ${x} bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-3 transition-all duration-700`}
                style={{
                  transitionDelay: `${delay}s`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={14} style={{ color: "#FFD700" }} />
                  <span
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "white" }}
                  >
                    {label}
                  </span>
                </div>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))" }}
      />
    </section>
  );
}
