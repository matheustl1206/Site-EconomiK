import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, Target, Users } from "lucide-react";

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

const CASES = [
  {
    tag: "Pesquisa de Mercado",
    client: "Startup de Tecnologia – São Paulo, SP",
    title: "Validação de mercado para produto SaaS B2B",
    challenge:
      "A empresa precisava entender o tamanho e a dinâmica do mercado antes de investir R$500 mil no desenvolvimento do produto. Sem dados, o risco de fracasso era alto.",
    process:
      "Realizamos análise primária com 40 entrevistas com potenciais clientes, combinada com modelagem econômica do mercado endereçável usando dados setoriais do IBGE e consultorias especializadas.",
    solution:
      "Identificamos 3 segmentos prioritários com características distintas de demanda, disposição a pagar e tamanho. Mapeamos 15 concorrentes diretos e 8 substitutos.",
    results:
      "O produto foi desenvolvido com foco nos 2 segmentos de maior potencial. Na fase de lançamento, 73% das empresas prospectadas demonstraram interesse real de compra.",
    metrics: [
      { value: "R$120M", label: "Mercado endereçável total", icon: TrendingUp },
      { value: "3", label: "Segmentos validados", icon: Target },
      { value: "73%", label: "Taxa de interesse no lançamento", icon: Users },
    ],
    lessons:
      "A pesquisa prévia economizou meses de desenvolvimento em funcionalidades que o mercado não valorizava. Dados evitam desperdício.",
  },
  {
    tag: "Consultoria Financeira",
    client: "Empresa de Varejo – Interior de SP",
    title: "Reestruturação financeira e otimização de capital de giro",
    challenge:
      "Com margens operacionais de apenas 4%, a empresa enfrentava dificuldade no fluxo de caixa e risco de inadimplência com fornecedores estratégicos.",
    process:
      "Diagnóstico financeiro completo: análise do ciclo de conversão de caixa, revisão da política de estoques e crédito, modelagem de cenários de renegociação.",
    solution:
      "Revisão da política de prazos, reclassificação dos SKUs por rentabilidade e giro, e renegociação de 3 contratos de fornecedores com dashboard de monitoramento.",
    results:
      "Em 90 dias, a margem operacional subiu de 4% para 6,2%. Redução de R$80 mil ao ano em custos fixos. Fluxo de caixa normalizado.",
    metrics: [
      { value: "+55%", label: "Melhora na margem operacional", icon: TrendingUp },
      { value: "R$80k", label: "Economia anual em custos", icon: Target },
      { value: "90 dias", label: "Para resultados iniciais", icon: Users },
    ],
    lessons:
      "Gestão financeira eficaz não precisa de cortes drásticos. Pequenas otimizações sistêmicas geram grandes impactos no resultado.",
  },
  {
    tag: "Planejamento Estratégico",
    client: "ONG de Impacto Social – Região Sul",
    title: "Plano estratégico para captação de R$2M em fundos de impacto",
    challenge:
      "A organização tinha um modelo de impacto sólido mas não conseguia atrair financiadores por falta de um plano estratégico e financeiro estruturado.",
    process:
      "Mapeamento do ecossistema de fundos de impacto no Brasil, construção do modelo lógico de impacto, modelagem financeira de sustentabilidade.",
    solution:
      "Desenvolvemos o Business Case de Impacto Social com métricas SROI, projeções de 5 anos e apresentação executiva para fundos nacionais e internacionais.",
    results:
      "A organização foi selecionada por 3 dos 12 fundos prospectados. Total captado em 8 meses: R$2,1M. Expansão das operações para 2 novos estados.",
    metrics: [
      { value: "R$2,1M", label: "Captação total em 8 meses", icon: TrendingUp },
      { value: "3/12", label: "Fundos aprovados", icon: Target },
      { value: "2", label: "Novos estados de atuação", icon: Users },
    ],
    lessons:
      "Impacto sem evidência quantitativa não convence investidores. A narrativa precisa ser sustentada por dados econômicos robustos.",
  },
];

function CaseCard({ c, i }: { c: (typeof CASES)[0]; i: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`rounded-sm overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${i * 100}ms`, background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
    >
      <div className="p-8 lg:p-10" style={{ borderBottom: "3px solid #FFD700", background: "#000" }}>
        <span
          className="text-xs px-3 py-1 rounded-sm mb-4 inline-block"
          style={{ background: "rgba(255,215,0,0.15)", color: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          {c.tag}
        </span>
        <h2
          className="mb-2"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
            color: "white",
            lineHeight: 1.25,
          }}
        >
          {c.title}
        </h2>
        <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
          {c.client}
        </p>
      </div>

      <div className="p-8 lg:p-10">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-sm" style={{ background: "#F5F5F5" }}>
          {c.metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="text-center">
                <Icon size={16} style={{ color: "#FFD700", margin: "0 auto 6px" }} />
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#000" }}>
                  {m.value}
                </p>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.72rem", color: "#888" }}>{m.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { label: "Desafio", text: c.challenge },
              { label: "Processo", text: c.process },
            ].map(({ label, text }) => (
              <div key={label}>
                <p
                  className="mb-2 uppercase text-xs tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
                >
                  {label}
                </p>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.7 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {[
              { label: "Solução", text: c.solution },
              { label: "Resultados", text: c.results },
            ].map(({ label, text }) => (
              <div key={label}>
                <p
                  className="mb-2 uppercase text-xs tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                >
                  {label}
                </p>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.7 }}>
                  {text}
                </p>
              </div>
            ))}
            <div className="p-4 rounded-sm border-l-2" style={{ background: "rgba(255,215,0,0.06)", borderColor: "#FFD700" }}>
              <p
                className="mb-1 uppercase text-xs tracking-wider"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
              >
                Aprendizado
              </p>
              <p
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.85rem",
                  color: "#444",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                {c.lessons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CasesPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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
          <div
            className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="mb-4 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Resultados reais
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
              Cases de <span style={{ color: "#FFD700" }}>sucesso</span>
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
              Projetos reais com resultados mensuráveis. Veja como transformamos desafios empresariais em crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Cases list */}
      <section className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} />
          ))}
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
            Quer ser o próximo case?
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "'Figtree', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)" }}
          >
            Conte-nos seu desafio e vamos construir uma solução baseada em dados para o seu negócio.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 text-black rounded-sm text-base hover:brightness-90 transition-all"
            style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Solicitar Diagnóstico Gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
