import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { BarChart2, TrendingUp, Database, Target, BookOpen, Users, ArrowRight, CheckCircle } from "lucide-react";

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

const SERVICES = [
  {
    icon: BarChart2,
    title: "Pesquisa de Mercado",
    description:
      "Realizamos análises completas do ambiente de mercado, identificando oportunidades, ameaças, tendências setoriais e o posicionamento ideal para o seu negócio.",
    methodology:
      "Combinamos dados primários (entrevistas, surveys) com dados secundários (relatórios setoriais, bases econômicas) para construir uma visão completa do mercado.",
    deliverables: [
      "Relatório de análise setorial",
      "Mapeamento de concorrentes",
      "Segmentação de mercado",
      "Análise de oportunidades",
      "Recomendações estratégicas",
    ],
    benefits: ["Decisões embasadas em dados", "Redução de riscos de mercado", "Identificação de nichos"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria Financeira",
    description:
      "Diagnóstico completo da saúde financeira da sua empresa com identificação de gargalos, otimização de capital de giro e projeções para tomada de decisão.",
    methodology:
      "Análise dos demonstrativos financeiros, modelagem de cenários e aplicação de métricas econômico-financeiras para mapear a situação atual e recomendar melhorias.",
    deliverables: [
      "Diagnóstico financeiro completo",
      "Projeções e cenários",
      "Plano de otimização de custos",
      "Análise de viabilidade econômica",
      "Dashboard financeiro",
    ],
    benefits: ["Melhoria de margens", "Fluxo de caixa saudável", "Redução de riscos financeiros"],
  },
  {
    icon: Database,
    title: "Análise de Dados",
    description:
      "Transformamos dados brutos em insights acionáveis através de metodologias econométricas e estatísticas avançadas aplicadas à realidade do seu negócio.",
    methodology:
      "Utilizamos técnicas de econometria, machine learning e visualização de dados para extrair padrões relevantes e construir modelos preditivos.",
    deliverables: [
      "Relatório de análise exploratória",
      "Modelos preditivos",
      "Dashboards interativos",
      "Documentação metodológica",
      "Treinamento da equipe",
    ],
    benefits: ["Decisões baseadas em evidências", "Detecção de padrões ocultos", "Monitoramento contínuo"],
  },
  {
    icon: Target,
    title: "Planejamento Estratégico",
    description:
      "Estruturamos o roadmap estratégico do seu negócio com metas claras, indicadores de performance e planos de ação mensuráveis alinhados ao contexto econômico.",
    methodology:
      "Aplicamos frameworks como SWOT econômico, Balanced Scorecard e OKRs para criar um planejamento robusto e adaptável às dinâmicas de mercado.",
    deliverables: [
      "Análise de ambiente (SWOT)",
      "Mapa estratégico",
      "Definição de OKRs",
      "Plano de execução 12 meses",
      "Sistema de monitoramento",
    ],
    benefits: ["Clareza de direção", "Alinhamento de equipe", "Crescimento sustentável"],
  },
  {
    icon: BookOpen,
    title: "Elaboração de Projetos",
    description:
      "Desenvolvemos projetos técnicos completos para captação de recursos, editais, investidores e programas de fomento com embasamento econômico sólido.",
    methodology:
      "Seguimos as melhores práticas de elaboração de projetos de investimento, incluindo análise de viabilidade, modelagem financeira e análise de impacto socioeconômico.",
    deliverables: [
      "Plano de negócio completo",
      "Análise de viabilidade econômico-financeira",
      "Estudo de impacto",
      "Executive summary",
      "Pitch deck estratégico",
    ],
    benefits: ["Maior taxa de aprovação", "Captação de recursos", "Credibilidade técnica"],
  },
  {
    icon: Users,
    title: "Workshops",
    description:
      "Programas de capacitação em economia, finanças e análise de dados, customizados para equipes de empresas e empreendedores que querem tomar decisões melhores.",
    methodology:
      "Conteúdo prático baseado em cases reais, combinando teoria econômica com aplicações práticas para o contexto empresarial brasileiro.",
    deliverables: [
      "Material didático completo",
      "Cases práticos aplicados",
      "Exercícios e simulações",
      "Certificado de participação",
      "Suporte pós-workshop",
    ],
    benefits: ["Capacitação da equipe", "Melhoria de processos", "Cultura data-driven"],
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const Icon = service.icon;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="border border-black/8 rounded-sm overflow-hidden hover:border-[#FFD700]/30 hover:shadow-lg transition-all duration-300"
        style={{ background: "white" }}
      >
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-sm"
              style={{ background: "rgba(255,215,0,0.1)" }}
            >
              <Icon size={22} style={{ color: "#FFD700" }} />
            </div>
            <span
              className="text-xs px-2 py-1 rounded-sm"
              style={{
                background: "#F5F5F5",
                color: "#666",
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 500,
              }}
            >
              Serviço
            </span>
          </div>

          <h3
            className="mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#000" }}
          >
            {service.title}
          </h3>

          <p
            className="mb-5"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.9rem",
              color: "#666",
              lineHeight: 1.65,
            }}
          >
            {service.description}
          </p>

          {expanded && (
            <div className="space-y-5 pt-4 border-t border-black/5">
              <div>
                <p
                  className="mb-2 text-xs uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
                >
                  Metodologia
                </p>
                <p
                  style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", color: "#555", lineHeight: 1.65 }}
                >
                  {service.methodology}
                </p>
              </div>
              <div>
                <p
                  className="mb-2 text-xs uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                >
                  Entregáveis
                </p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: "#FFD700", shrink: 0 }} />
                      <span
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.84rem", color: "#444" }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/5">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="text-sm transition-colors duration-200 hover:text-[#FFD700]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
            >
              {expanded ? "Ver menos" : "Ver mais"}
            </button>
            <Link
              to="/contato"
              className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-sm transition-all duration-200 hover:brightness-90"
              style={{
                background: "#FFD700",
                color: "#000",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Solicitar <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: "#000" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Inteligência Econômica
          </p>
          <h1
            className="max-w-2xl mb-5"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Impulsione sua{" "}
            <span style={{ color: "#FFD700" }}>inteligência financeira</span>
          </h1>
          <p
            className="max-w-xl"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            Oferecemos soluções completas em consultoria econômica para empresas que precisam transformar dados em decisões estratégicas de alto impacto.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-black rounded-sm hover:brightness-90 transition-all"
              style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Solicitar Diagnóstico <ArrowRight size={14} />
            </Link>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-sm border border-white/20 hover:border-white/40 transition-all"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Ver Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#000" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "white",
            }}
          >
            Não sabe por onde começar?
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "'Figtree', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)" }}
          >
            Solicite um diagnóstico gratuito e nossa equipe irá identificar as maiores oportunidades para o seu negócio.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 text-black rounded-sm text-base hover:brightness-90 transition-all"
            style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Falar com um consultor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
