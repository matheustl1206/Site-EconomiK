import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";

const INSIGHTS = [
  {
    category: "Economia",
    title: "Como a análise macroeconômica pode guiar decisões empresariais em 2024",
    excerpt: "Entenda como indicadores econômicos como IPCA, SELIC e câmbio impactam diretamente na estratégia do seu negócio.",
    readTime: "6 min",
    slug: "analise-macroeconomica-decisoes-2024",
    featured: true,
  },
  {
    category: "Mercado",
    title: "5 metodologias para pesquisa de mercado de alto impacto",
    excerpt: "As principais técnicas que usamos para gerar insights acionáveis em projetos de consultoria.",
    readTime: "4 min",
    slug: "metodologias-pesquisa-mercado",
    featured: false,
  },
  {
    category: "Finanças",
    title: "Gestão de fluxo de caixa: o que separa empresas saudáveis das que fecham",
    excerpt: "Análise dos principais erros de gestão financeira e como preveni-los com dados.",
    readTime: "5 min",
    slug: "gestao-fluxo-caixa-empresas",
    featured: false,
  },
  {
    category: "Dados",
    title: "Econometria aplicada: quando e como usar modelos quantitativos nos negócios",
    excerpt: "Guia prático de aplicação de técnicas econométricas para decisões empresariais.",
    readTime: "7 min",
    slug: "econometria-aplicada-negocios",
    featured: false,
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

const CATEGORY_COLORS: Record<string, string> = {
  Economia: "#FFD700",
  Mercado: "#FFB800",
  Finanças: "#FFD700",
  Dados: "#FFB800",
};

export function InsightsSection() {
  const { ref, inView } = useInView(0.1);
  const [featured, ...rest] = INSIGHTS;

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
              Insights de economia
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
              Artigos sobre{" "}
              <span style={{ color: "#000" }}>economia e finanças</span>
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm border-b pb-1 transition-all duration-200 hover:gap-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000", borderColor: "#FFD700" }}
          >
            Ver todos os artigos
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to={`/insights/${featured.slug}`} className="group block h-full">
              <div className="h-full border border-black/8 rounded-sm overflow-hidden hover:border-[#FFD700]/30 hover:shadow-lg transition-all duration-300">
                <div
                  className="h-56 flex items-end p-8"
                  style={{ background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)" }}
                >
                  <span
                    className="text-xs px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(255,215,0,0.15)",
                      color: "#FFD700",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3
                    className="mb-3 group-hover:text-[#FFD700] transition-colors duration-200"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#000",
                      lineHeight: 1.3,
                    }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.87rem",
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#999" }}>
                    <Clock size={12} />
                    <span style={{ fontFamily: "'Figtree', sans-serif" }}>{featured.readTime} de leitura</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((article, i) => (
              <div
                key={article.slug}
                className={`transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 120 + 300}ms` }}
              >
                <Link to={`/insights/${article.slug}`} className="group block">
                  <div className="border border-black/8 rounded-sm p-5 hover:border-[#FFD700]/30 hover:shadow-md transition-all duration-300">
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm mb-3 inline-block"
                      style={{
                        background: "rgba(255,215,0,0.1)",
                        color: CATEGORY_COLORS[article.category] ?? "#FFD700",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {article.category}
                    </span>
                    <h4
                      className="mb-2 group-hover:text-[#FFD700] transition-colors duration-200"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#000",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "#bbb" }}>
                      <Clock size={11} />
                      <span style={{ fontFamily: "'Figtree', sans-serif" }}>{article.readTime} de leitura</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
