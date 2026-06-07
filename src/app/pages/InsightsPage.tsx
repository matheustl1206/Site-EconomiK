import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { Search, Clock, ArrowRight, ChevronRight } from "lucide-react";

const CATEGORIES = ["Todos", "Economia", "Mercado", "Finanças", "Dados", "Empreendedorismo", "Inovação"];

const ARTICLES = [
  {
    category: "Economia",
    title: "Como a análise macroeconômica pode guiar decisões empresariais em 2024",
    excerpt:
      "Entenda como indicadores econômicos como IPCA, SELIC e câmbio impactam diretamente na estratégia do seu negócio e como usar esses dados a favor da empresa.",
    readTime: "6 min",
    slug: "analise-macroeconomica-decisoes-2024",
    featured: true,
  },
  {
    category: "Mercado",
    title: "5 metodologias para pesquisa de mercado de alto impacto",
    excerpt:
      "As principais técnicas que usamos para gerar insights acionáveis em projetos de consultoria, da coleta à análise.",
    readTime: "4 min",
    slug: "metodologias-pesquisa-mercado",
    featured: false,
  },
  {
    category: "Finanças",
    title: "Gestão de fluxo de caixa: o que separa empresas saudáveis das que fecham",
    excerpt:
      "Análise dos principais erros de gestão financeira e como preveni-los com dados e indicadores simples.",
    readTime: "5 min",
    slug: "gestao-fluxo-caixa-empresas",
    featured: false,
  },
  {
    category: "Dados",
    title: "Econometria aplicada: quando e como usar modelos quantitativos nos negócios",
    excerpt:
      "Guia prático de aplicação de técnicas econométricas para decisões empresariais, sem precisar de PhD.",
    readTime: "7 min",
    slug: "econometria-aplicada-negocios",
    featured: false,
  },
  {
    category: "Empreendedorismo",
    title: "Validação econômica de startups: além do MVP",
    excerpt:
      "Como usar análise econômica para validar não só o produto, mas também o modelo de negócio e o mercado.",
    readTime: "5 min",
    slug: "validacao-economica-startups",
    featured: false,
  },
  {
    category: "Inovação",
    title: "Economia da inovação: como mensurar o impacto de P&D nos resultados",
    excerpt:
      "Modelos econômicos para avaliar o retorno sobre investimento em inovação e pesquisa e desenvolvimento.",
    readTime: "6 min",
    slug: "economia-inovacao-pnd",
    featured: false,
  },
  {
    category: "Mercado",
    title: "Análise setorial: como identificar oportunidades antes da concorrência",
    excerpt:
      "Técnicas de inteligência competitiva e análise setorial que nos ajudam a encontrar vantagens estratégicas.",
    readTime: "5 min",
    slug: "analise-setorial-oportunidades",
    featured: false,
  },
  {
    category: "Finanças",
    title: "Viabilidade econômico-financeira: guia completo para investimentos",
    excerpt:
      "Passo a passo para construir uma análise de viabilidade robusta e tomar decisões de investimento com segurança.",
    readTime: "8 min",
    slug: "viabilidade-economico-financeira",
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

const CAT_COLOR = "#FFD700";

export function InsightsPage() {
  const { ref, inView } = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = ARTICLES.filter((a) => {
    const matchCat = activeCategory === "Todos" || a.category === activeCategory;
    const matchQuery =
      !query ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const featured = ARTICLES.find((a) => a.featured);

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
            Insights de Economia
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
            Artigos sobre{" "}
            <span style={{ color: "#FFD700" }}>economia e finanças</span>
          </h1>
          <p
            className="max-w-lg"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            Análises, guias e insights práticos para empresas e empreendedores que querem tomar decisões melhores.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section style={{ background: "#111" }} className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="text-xs px-3 py-1 rounded-sm mb-4 inline-block"
                  style={{
                    background: "rgba(255,215,0,0.15)",
                    color: "#FFD700",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Em destaque · {featured.category}
                </span>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <Clock size={13} />
                    <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.82rem" }}>
                      {featured.readTime} de leitura
                    </span>
                  </div>
                  <Link
                    to={`/insights/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
                  >
                    Ler artigo <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
              <div
                className="rounded-sm h-64 flex items-center justify-center"
                style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.1)" }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity={0.4}>
                  <circle cx="32" cy="32" r="26" stroke="#FFD700" strokeWidth="2.5" fill="none" />
                  <rect x="20" y="36" width="8" height="14" fill="#FFD700" opacity={0.6} rx="1" />
                  <rect x="31" y="28" width="8" height="22" fill="#FFD700" opacity={0.8} rx="1" />
                  <rect x="42" y="22" width="8" height="28" fill="#FFD700" rx="1" />
                  <line x1="56" y1="56" x2="72" y2="72" stroke="#FFD700" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + articles */}
      <section ref={ref} className="py-16" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-sm border border-black/10 text-sm focus:outline-none focus:border-[#FFD700] transition-colors bg-white"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-sm text-xs transition-all duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    background: activeCategory === cat ? "#000" : "white",
                    color: activeCategory === cat ? "#FFD700" : "#666",
                    border: `1px solid ${activeCategory === cat ? "#000" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className={`group block transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full bg-white border border-black/8 rounded-sm overflow-hidden hover:border-[#FFD700]/30 hover:shadow-lg transition-all duration-300">
                  <div
                    className="h-32 flex items-end p-5"
                    style={{ background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)" }}
                  >
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        background: "rgba(255,215,0,0.15)",
                        color: "#FFD700",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3
                      className="mb-3 group-hover:text-[#FFD700] transition-colors duration-200"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#000",
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.82rem",
                        color: "#888",
                        lineHeight: 1.6,
                      }}
                    >
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5" style={{ color: "#ccc" }}>
                        <Clock size={11} />
                        <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.75rem" }}>
                          {article.readTime}
                        </span>
                      </div>
                      <span
                        className="text-xs flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
                      >
                        Ler <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "1rem", color: "#999" }}>
                Nenhum artigo encontrado para "{query}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quote */}
      <section className="py-20" style={{ background: "#000" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "4rem", color: "#FFD700", lineHeight: 1 }}
          >
            "
          </p>
          <blockquote
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "white",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            A análise de mercado é essencial para o sucesso de qualquer negócio.
          </blockquote>
          <p className="mt-4" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
            João Silva
          </p>
        </div>
      </section>
    </div>
  );
}
