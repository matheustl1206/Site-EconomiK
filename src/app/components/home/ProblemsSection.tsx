import { useRef, useEffect, useState } from "react";
import { AlertTriangle, TrendingDown, DollarSign, Database } from "lucide-react";

const PROBLEMS = [
  {
    icon: Database,
    title: "Falta de dados de mercado",
    description:
      "Decisões tomadas no achismo e sem embasamento. Sem informação de mercado, sua empresa opera às cegas.",
  },
  {
    icon: TrendingDown,
    title: "Crescimento sem planejamento",
    description:
      "Expandir sem estratégia definida gera ineficiências, desperdício de recursos e oportunidades perdidas.",
  },
  {
    icon: DollarSign,
    title: "Riscos financeiros ocultos",
    description:
      "Incertezas financeiras não analisadas comprometem a saúde do negócio e afastam investidores.",
  },
  {
    icon: AlertTriangle,
    title: "Falta de validação estratégica",
    description:
      "Projetos lançados sem validação falham no mercado. Análise prévia aumenta drasticamente as chances de sucesso.",
  },
];

function useInView(threshold = 0.2) {
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

export function ProblemsSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "#F5F5F5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            O problema
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
            Empresas não fracassam por{" "}
            <span style={{ color: "#333333" }}>falta de esforço.</span>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              color: "#000000",
            }}
          >
            Elas fracassam por falta de{" "}
            <span style={{ color: "#FFD700", textDecoration: "underline", textDecorationColor: "#FFD700" }}>
              informação.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white rounded-sm p-7 group hover:shadow-xl transition-all duration-500 border border-black/5 hover:border-[#FFD700]/30 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-sm mb-5 transition-colors duration-300 group-hover:bg-[#FFD700]"
                style={{ background: "rgba(255,215,0,0.1)" }}
              >
                <p.icon size={20} style={{ color: "#FFD700" }} className="group-hover:text-black transition-colors duration-300" />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#000000",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.88rem",
                  color: "#666666",
                  lineHeight: 1.65,
                }}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
