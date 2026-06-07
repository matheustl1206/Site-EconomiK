import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { BarChart2, TrendingUp, Database, Target, BookOpen, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: BarChart2,
    title: "Pesquisa de Mercado",
    description: "Análise profunda do seu setor, concorrentes e oportunidades para embasar decisões estratégicas.",
    benefits: ["Análise competitiva", "Mapeamento de tendências", "Segmentação de público"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria Financeira",
    description: "Diagnóstico financeiro completo com recomendações para otimização de resultados e redução de riscos.",
    benefits: ["Análise de viabilidade", "Projeções financeiras", "Gestão de riscos"],
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description: "Transformamos seus dados brutos em insights acionáveis através de metodologias econométricas avançadas.",
    benefits: ["Modelagem econométrica", "Visualização de dados", "Dashboards gerenciais"],
  },
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description: "Estruturamos o roadmap do seu negócio com metas claras, KPIs e planos de ação mensuráveis.",
    benefits: ["Definição de OKRs", "Mapa estratégico", "Plano de execução"],
  },
  {
    icon: BookOpen,
    title: "Elaboração de Projetos",
    description: "Desenvolvemos projetos completos com embasamento técnico para captação de recursos e editais.",
    benefits: ["Projetos de investimento", "Planos de negócio", "Análise de impacto"],
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Capacitação em economia, finanças e análise de dados para equipes e empreendedores.",
    benefits: ["Conteúdo personalizado", "Cases práticos", "Certificação"],
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

export function ServicesSection() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
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
              O que fazemos
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#000000",
                lineHeight: 1.15,
              }}
            >
              Nossos <span style={{ color: "#000" }}>serviços</span>
            </h2>
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm border-b pb-1 transition-all duration-200 hover:gap-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "#000",
              borderColor: "#FFD700",
            }}
          >
            Ver todos os serviços
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-white p-8 transition-all duration-400 cursor-pointer overflow-hidden ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #000000, #111111)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-sm mb-5 transition-all duration-300"
                    style={{
                      background: isHovered ? "rgba(255,215,0,0.15)" : "rgba(255,215,0,0.1)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#FFD700" }} />
                  </div>

                  <h3
                    className="mb-3 transition-colors duration-300"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: isHovered ? "#FFFFFF" : "#000000",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mb-5 transition-colors duration-300"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.87rem",
                      color: isHovered ? "rgba(255,255,255,0.6)" : "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-1.5">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs transition-colors duration-300"
                        style={{
                          fontFamily: "'Figtree', sans-serif",
                          color: isHovered ? "rgba(255,255,255,0.5)" : "#999",
                        }}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: "#FFD700" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
