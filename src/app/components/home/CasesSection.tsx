import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CASES = [
  {
    tag: "Pesquisa de Mercado",
    client: "Startup de Tecnologia",
    title: "Validação de mercado para produto SaaS B2B",
    challenge: "A empresa precisava entender o potencial de mercado antes de investir R$500k no desenvolvimento do produto.",
    result: "Identificamos um mercado endereçável de R$120M e validamos 3 segmentos prioritários.",
    metrics: [
      { value: "R$120M", label: "Mercado endereçável" },
      { value: "3x", label: "Retorno projetado" },
      { value: "6 sem.", label: "Tempo de entrega" },
    ],
    color: "#FFD700",
  },
  {
    tag: "Consultoria Financeira",
    client: "Empresa de Varejo",
    title: "Reestruturação financeira e redução de custos",
    challenge: "Margens comprimidas e fluxo de caixa irregular ameaçavam a continuidade do negócio.",
    result: "Otimizamos o capital de giro e identificamos R$80k/ano em reduções de custos sem impacto operacional.",
    metrics: [
      { value: "R$80k", label: "Economia anual" },
      { value: "+23%", label: "Margem operacional" },
      { value: "90 dias", label: "Para resultados" },
    ],
    color: "#FFFFFF",
  },
  {
    tag: "Planejamento Estratégico",
    client: "ONG de Impacto Social",
    title: "Plano estratégico para captação de R$2M",
    challenge: "A organização precisava de um plano robusto para atrair investidores e fundos de impacto.",
    result: "Desenvolvemos o modelo de negócio de impacto e apresentamos para 12 fundos, resultando em captação bem-sucedida.",
    metrics: [
      { value: "R$2M", label: "Meta de captação" },
      { value: "12", label: "Fundos prospectados" },
      { value: "100%", label: "Meta atingida" },
    ],
    color: "#FFD700",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedCounter({ target, suffix = "", inView }: { target: string; suffix?: string; inView: boolean }) {
  return (
    <span>{inView ? target : "—"}</span>
  );
}

export function CasesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} style={{ background: "#0a0a0a" }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Resultados reais
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#FFFFFF",
                lineHeight: 1.15,
              }}
            >
              Cases de <span style={{ color: "#FFD700" }}>sucesso</span>
            </h2>
          </div>
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-sm border-b pb-1 transition-all duration-200 hover:gap-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700", borderColor: "#FFD700" }}
          >
            Ver todos os cases
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-6">
          {CASES.map((c, i) => (
            <div
              key={c.title}
              className={`group rounded-sm border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ background: "rgba(255,255,255,0.03)", transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Content */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-xs px-3 py-1 rounded-sm"
                        style={{
                          background: "rgba(255,215,0,0.1)",
                          color: "#FFD700",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {c.tag}
                      </span>
                      <span
                        className="text-xs"
                        style={{ fontFamily: "'Figtree', sans-serif", color: "rgba(255,255,255,0.35)" }}
                      >
                        {c.client}
                      </span>
                    </div>

                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        color: "#FFFFFF",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.title}
                    </h3>

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.87rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "rgba(255,215,0,0.7)", fontWeight: 600 }}>Desafio: </span>
                      {c.challenge}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.87rem",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span style={{ color: "#FFD700", fontWeight: 600 }}>Resultado: </span>
                      {c.result}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center lg:text-left">
                        <p
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 800,
                            fontSize: "1.5rem",
                            color: "#FFD700",
                          }}
                        >
                          <AnimatedCounter target={m.value} inView={inView} />
                        </p>
                        <p
                          style={{
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.35)",
                          }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
