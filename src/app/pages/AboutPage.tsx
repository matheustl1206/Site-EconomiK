import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Linkedin, Award } from "lucide-react";

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

const TIMELINE = [
  { year: "2019", title: "Fundação", description: "EconomiK é fundada por estudantes de economia com o objetivo de democratizar a consultoria econômica de qualidade." },
  { year: "2020", title: "Primeiros projetos", description: "Concluímos os primeiros 10 projetos, validando nossa metodologia e construindo nossa reputação no mercado." },
  { year: "2021", title: "Expansão da equipe", description: "Crescemos para 20 membros e expandimos nosso portfólio de serviços com análise de dados e planejamento estratégico." },
  { year: "2022", title: "Prêmio de inovação", description: "Reconhecidos como empresa júnior destaque na região Sudeste pelo nosso impacto em clientes do setor de tecnologia." },
  { year: "2023", title: "50 projetos", description: "Marco de 50 projetos entregues com 98% de satisfação dos clientes. Expansão para novos segmentos de mercado." },
  { year: "2024", title: "Nova fase", description: "Lançamento da nova plataforma de serviços e fortalecimento do programa de workshops e capacitação empresarial." },
];

const VALUES = [
  { title: "Rigor analítico", description: "Toda recomendação é embasada em dados e metodologia econômica sólida." },
  { title: "Impacto real", description: "Focamos em resultados mensuráveis, não em relatórios que ficam na gaveta." },
  { title: "Ética e transparência", description: "Clareza em cada etapa do projeto, sem jargões desnecessários." },
  { title: "Inovação constante", description: "Combinamos técnicas clássicas com as mais recentes abordagens analíticas." },
];

const TEAM = [
  { name: "Ana Carvalho", role: "Presidente", area: "Análise Macroeconômica", initials: "AC", bio: "Especialista em análise macroeconômica aplicada a negócios. Liderou mais de 15 projetos de consultoria financeira." },
  { name: "Pedro Santos", role: "Diretor de Projetos", area: "Consultoria Financeira", initials: "PS", bio: "Expertise em modelagem financeira e avaliação de investimentos. Mestrando em Economia Aplicada." },
  { name: "Mariana Lima", role: "Diretora de Marketing", area: "Pesquisa de Mercado", initials: "ML", bio: "Especialista em pesquisa de mercado e análise do comportamento do consumidor. Fluente em métodos qualitativos e quantitativos." },
  { name: "Rafael Costa", role: "Diretor de Dados", area: "Econometria & Analytics", initials: "RC", bio: "Econometrista com experiência em modelos preditivos e machine learning aplicado a problemas empresariais." },
];

const AWARDS = [
  { icon: Award, title: "Prêmio de Inovação 2023", description: "Melhor empresa júnior do Sudeste na categoria de impacto." },
  { icon: Award, title: "Reconhecimento de Qualidade", description: "Certificação FEJEMG de excelência em gestão e projetos." },
  { icon: Award, title: "Certificação de Excelência", description: "Top 10 empresas juniores do Brasil em satisfação de clientes." },
];

export function AboutPage() {
  const { ref: heroRef, inView: heroVisible } = useInView(0.1);
  const { ref: timelineRef, inView: timelineVisible } = useInView(0.1);
  const { ref: valuesRef, inView: valuesVisible } = useInView(0.1);
  const { ref: teamRef, inView: teamVisible } = useInView(0.1);
  const { ref: awardsRef, inView: awardsVisible } = useInView(0.1);

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
            className="mb-2 text-sm"
            style={{ fontFamily: "'Figtree', sans-serif", color: "rgba(255,255,255,0.4)" }}
          >
            Consultoria → Sobre nós
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
            Transformando desafios em{" "}
            <span style={{ color: "#FFD700" }}>oportunidades</span>
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
            Somos uma empresa júnior de economia comprometida com soluções analíticas e estratégicas que geram valor real para nossos clientes.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-black rounded-sm hover:brightness-90 transition-all"
              style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Entre em Contato <ArrowRight size={14} />
            </Link>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white rounded-sm border border-white/20 hover:border-white/40 transition-all"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Ver Nossos Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section ref={valuesRef} className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-16 items-start mb-20 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p
                className="mb-3 uppercase tracking-widest text-xs"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
              >
                Nossa proposta
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#000",
                  lineHeight: 1.15,
                }}
              >
                Nossa Missão, Visão e Valores
              </h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Missão",
                    text: "Democratizar o acesso a consultoria econômica de qualidade, transformando dados em decisões estratégicas que impulsionam o crescimento sustentável de empresas e organizações.",
                  },
                  {
                    label: "Visão",
                    text: "Ser referência em inteligência econômica no Brasil, reconhecida pela excelência analítica, impacto mensurável nos clientes e formação de uma nova geração de líderes econômicos.",
                  },
                ].map(({ label, text }) => (
                  <div key={label} className="p-5 rounded-sm bg-white border border-black/5">
                    <p
                      className="mb-2 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFD700" }}
                    >
                      {label}
                    </p>
                    <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 1.65 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-5 rounded-sm bg-white border border-black/5 hover:border-[#FFD700]/30 hover:shadow-md transition-all duration-300 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center mb-3"
                    style={{ background: "rgba(255,215,0,0.1)" }}
                  >
                    <span style={{ color: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.8rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#000" }}
                  >
                    {v.title}
                  </h4>
                  <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.8rem", color: "#777", lineHeight: 1.5 }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Nossa história
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
              Uma trajetória de <span style={{ color: "#FFD700" }}>impacto</span>
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "rgba(255,215,0,0.15)" }}
            />
            <div className="space-y-10 lg:space-y-0">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center transition-all duration-700 ${
                    timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className={`${i % 2 === 0 ? "lg:text-right" : "lg:order-2"}`}>
                    <div
                      className={`p-6 rounded-sm border border-white/5 hover:border-[#FFD700]/20 transition-all duration-300 ${
                        i % 2 === 0 ? "" : ""
                      }`}
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <p
                        className="mb-2"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.5rem",
                          color: "#FFD700",
                        }}
                      >
                        {item.year}
                      </p>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "white",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Figtree', sans-serif",
                          fontSize: "0.87rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:flex items-center justify-center ${i % 2 === 0 ? "" : "lg:order-1"}`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2"
                      style={{ background: "#FFD700", borderColor: "#FFD700" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Nossa proposta
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#000",
                lineHeight: 1.15,
              }}
            >
              Nossa equipe
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className={`rounded-sm p-6 border border-black/5 hover:border-[#FFD700]/20 hover:shadow-lg transition-all duration-400 group ${
                  teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mb-4 mx-auto group-hover:bg-black transition-colors duration-300"
                  style={{ background: "#F5F5F5" }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#000",
                    }}
                    className="group-hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {member.initials}
                  </span>
                </div>
                <div className="text-center mb-4">
                  <h3
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#000" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.8rem", color: "#FFD700", fontWeight: 600 }}
                  >
                    {member.role}
                  </p>
                </div>
                <p
                  className="text-center mb-4"
                  style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.8rem", color: "#888", lineHeight: 1.5 }}
                >
                  {member.bio}
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-8 h-8 flex items-center justify-center rounded-sm border border-black/10 text-black/30 hover:text-[#FFD700] hover:border-[#FFD700]/40 transition-all duration-200"
                  >
                    <Linkedin size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section ref={awardsRef} style={{ background: "#F5F5F5" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`grid sm:grid-cols-3 gap-8 transition-all duration-700 ${
              awardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {AWARDS.map((award, i) => (
              <div
                key={award.title}
                className="text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(255,215,0,0.15)" }}
                >
                  <Award size={26} style={{ color: "#FFD700" }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#000" }}
                >
                  {award.title}
                </h3>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.83rem", color: "#777", lineHeight: 1.55 }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              className="rounded-sm h-48"
              style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.1)" }}
            />
            <div>
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
                Entre em contato conosco <span style={{ color: "#FFD700" }}>hoje mesmo</span>
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}
              >
                Estamos prontos para entender seu desafio e propor uma solução estratégica baseada em dados.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-black rounded-sm hover:brightness-90 transition-all"
                style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Solicitar Informações <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
