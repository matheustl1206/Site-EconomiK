import { useRef, useEffect, useState } from "react";
import { Database, Search, Lightbulb, TrendingUp } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Database,
    title: "Dados",
    subtitle: "Coleta e estruturação",
    description:
      "Coletamos dados brutos do mercado, da empresa e do setor. Estruturamos informações relevantes para análise profunda.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise",
    subtitle: "Padrões e insights",
    description:
      "Nossa lupa econômica identifica padrões, tendências e oportunidades ocultas nos dados coletados.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Estratégia",
    subtitle: "Plano de ação",
    description:
      "Transformamos insights em estratégias claras, mensuráveis e adaptadas à realidade do seu negócio.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Resultado",
    subtitle: "Crescimento real",
    description:
      "Acompanhamos a implementação e medimos os resultados com indicadores de performance bem definidos.",
  },
];

function useInView(threshold = 0.15) {
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

export function MethodologySection() {
  const { ref, inView } = useInView(0.1);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Nossa metodologia
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
            Como transformamos dados{" "}
            <span style={{ color: "#FFD700" }}>em resultados</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps list */}
          <div className="space-y-1">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`cursor-pointer rounded-sm p-6 transition-all duration-400 border ${
                    isActive
                      ? "bg-white/5 border-[#FFD700]/30"
                      : "border-transparent hover:bg-white/3"
                  } ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${i * 120 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm shrink-0 transition-all duration-300"
                      style={{ background: isActive ? "#FFD700" : "rgba(255,215,0,0.1)" }}
                    >
                      <Icon size={18} style={{ color: isActive ? "#000" : "#FFD700" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                          }}
                        >
                          {step.title}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-sm"
                          style={{
                            background: isActive ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.05)",
                            color: isActive ? "#FFD700" : "rgba(255,255,255,0.3)",
                            fontFamily: "'Figtree', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {step.subtitle}
                        </span>
                      </div>
                      {isActive && (
                        <p
                          style={{
                            fontFamily: "'Figtree', sans-serif",
                            fontSize: "0.88rem",
                            color: "rgba(255,255,255,0.55)",
                            lineHeight: 1.65,
                          }}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: isActive ? "#FFD700" : "rgba(255,255,255,0.15)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-700 delay-500 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: "rgba(255,215,0,0.1)" }}
              />
              {/* Middle ring */}
              <div
                className="absolute inset-6 rounded-full border"
                style={{ borderColor: "rgba(255,215,0,0.2)" }}
              />
              {/* Inner */}
              <div
                className="absolute inset-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.3)" }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="rgba(255,215,0,0.6)" strokeWidth="2" fill="none" />
                  <rect x="16" y="27" width="5" height="9" fill="#FFD700" opacity={0.6} rx="1" />
                  <rect x="23" y="22" width="5" height="14" fill="#FFD700" opacity={0.8} rx="1" />
                  <rect x="30" y="18" width="5" height="18" fill="#FFD700" rx="1" />
                  <line x1="40" y1="40" x2="52" y2="52" stroke="rgba(255,215,0,0.6)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Step indicators */}
              {STEPS.map((step, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const radius = 110;
                const cx = 128 + radius * Math.cos(angle);
                const cy = 128 + radius * Math.sin(angle);
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    className={`absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeStep === i ? "scale-125" : "scale-100"
                    }`}
                    style={{
                      left: cx,
                      top: cy,
                      background: activeStep === i ? "#FFD700" : "rgba(255,215,0,0.1)",
                      border: `1px solid ${activeStep === i ? "#FFD700" : "rgba(255,215,0,0.2)"}`,
                    }}
                  >
                    <Icon size={14} style={{ color: activeStep === i ? "#000" : "#FFD700" }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
