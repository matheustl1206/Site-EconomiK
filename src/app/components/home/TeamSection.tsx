import { useRef, useEffect, useState } from "react";
import { Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Ana Carvalho",
    role: "Presidente",
    area: "Análise Macroeconômica",
    initials: "AC",
    color: "#FFD700",
  },
  {
    name: "Pedro Santos",
    role: "Diretor de Projetos",
    area: "Consultoria Financeira",
    initials: "PS",
    color: "#E8C800",
  },
  {
    name: "Mariana Lima",
    role: "Diretora de Marketing",
    area: "Pesquisa de Mercado",
    initials: "ML",
    color: "#FFD700",
  },
  {
    name: "Rafael Costa",
    role: "Diretor de Dados",
    area: "Econometria & Analytics",
    initials: "RC",
    color: "#E8C800",
  },
  {
    name: "Beatriz Alves",
    role: "Consultora Sênior",
    area: "Planejamento Estratégico",
    initials: "BA",
    color: "#FFD700",
  },
  {
    name: "Lucas Ferreira",
    role: "Consultor Sênior",
    area: "Análise de Dados",
    initials: "LF",
    color: "#E8C800",
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

export function TeamSection() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`max-w-xl mx-auto text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Quem somos
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
            Nossa <span style={{ color: "#000" }}>equipe</span>
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1rem",
              color: "#666",
              lineHeight: 1.6,
            }}
          >
            Profissionais qualificados que unem rigor acadêmico e visão prática de mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={member.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group rounded-sm p-7 border border-black/5 hover:border-[#FFD700]/20 hover:shadow-lg transition-all duration-400 cursor-pointer ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isHovered ? "#000" : "#F5F5F5",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: isHovered ? "#FFD700" : "#000",
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#000",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.82rem",
                        color: "#FFD700",
                        fontWeight: 600,
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.78rem",
                        color: "#999",
                      }}
                    >
                      {member.area}
                    </p>
                  </div>

                  <a
                    href="#"
                    aria-label={`LinkedIn de ${member.name}`}
                    className="text-black/20 hover:text-[#FFD700] transition-colors duration-200 mt-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
