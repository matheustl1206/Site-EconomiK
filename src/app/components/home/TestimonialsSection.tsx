import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "A EconomiK possibilitou que nossa empresa alcançasse novos patamares. A consultoria e as análises de mercado foram cruciais para nossos resultados.",
    name: "Fernando Souza",
    role: "CEO, Fintech Inovação",
    rating: 5,
  },
  {
    quote:
      "Incrível a profundidade das análises e a clareza das recomendações. Tomamos decisões muito melhores depois do diagnóstico estratégico.",
    name: "Tiago Moura",
    role: "Diretor, Empresa de Varejo SP",
    rating: 5,
  },
  {
    quote:
      "O planejamento estratégico desenvolvido pela EconomiK foi fundamental para captarmos os recursos necessários para escalar o negócio.",
    name: "Mariana Silva",
    role: "Fundadora, ONG Impacto Social",
    rating: 5,
  },
  {
    quote:
      "Excelente trabalho de pesquisa de mercado. Os dados nos ajudaram a identificar um nicho que simplesmente não víamos antes.",
    name: "Carlos Mendes",
    role: "COO, Startup de Logística",
    rating: 5,
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

export function TestimonialsSection() {
  const { ref, inView } = useInView(0.1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[current];

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#111111" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Depoimentos
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
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="rounded-sm p-10 lg:p-14 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Quote size={32} style={{ color: "#FFD700", opacity: 0.5, margin: "0 auto 24px" }} />

            <blockquote
              key={current}
              className="mb-8"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              "{t.quote}"
            </blockquote>

            <div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FFD700", fontSize: "1rem" }}>★</span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "white",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {t.role}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#FFD700" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
