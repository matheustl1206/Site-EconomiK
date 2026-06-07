import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Users, Clock, ChevronDown, CheckCircle, Star } from "lucide-react";

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

const WORKSHOPS = [
  {
    title: "Análise Econômica para Gestores",
    description: "Aprenda a interpretar indicadores econômicos e aplicar análise econômica nas decisões do dia a dia empresarial.",
    date: "15 de Fevereiro, 2025",
    duration: "8h",
    spots: 20,
    spotsLeft: 7,
    category: "Economia",
    level: "Intermediário",
  },
  {
    title: "Pesquisa de Mercado na Prática",
    description: "Metodologias e ferramentas para conduzir pesquisas de mercado robustas e transformar dados em insights estratégicos.",
    date: "1 de Março, 2025",
    duration: "6h",
    spots: 25,
    spotsLeft: 12,
    category: "Mercado",
    level: "Iniciante",
  },
  {
    title: "Modelagem Financeira Avançada",
    description: "Construção de modelos financeiros para avaliação de investimentos, análise de viabilidade e tomada de decisão.",
    date: "20 de Março, 2025",
    duration: "12h",
    spots: 15,
    spotsLeft: 3,
    category: "Finanças",
    level: "Avançado",
  },
  {
    title: "Introdução à Análise de Dados com Python",
    description: "Fundamentos de análise de dados econômicos usando Python: limpeza, exploração, visualização e interpretação.",
    date: "5 de Abril, 2025",
    duration: "16h",
    spots: 20,
    spotsLeft: 15,
    category: "Dados",
    level: "Iniciante",
  },
];

const BENEFITS = [
  { icon: CheckCircle, title: "Aprendizado Prático", description: "Todos os workshops incluem cases reais e exercícios aplicados ao contexto empresarial brasileiro." },
  { icon: Users, title: "Acesso a Conteúdo Exclusivo", description: "Material didático desenvolvido pela nossa equipe com base em projetos e pesquisas reais." },
  { icon: Star, title: "Networking Eficaz", description: "Conecte-se com outros profissionais e empreendedores que buscam crescer com base em dados." },
  { icon: CheckCircle, title: "Desenvolvimento Pessoal", description: "Desenvolva competências analíticas valorizadas no mercado de trabalho e no empreendedorismo." },
  { icon: Users, title: "Formação de Expert", description: "Saiba como aplicar técnicas econômicas em suas decisões do dia a dia profissional e empresarial." },
  { icon: Star, title: "Certificação Reconhecida", description: "Certificado EconomiK reconhecido por empresas e instituições parceiras." },
];

const FAQ = [
  { q: "Quais são os pré-requisitos para participar dos workshops?", a: "Cada workshop tem seu próprio nível indicado. Os workshops de nível iniciante não requerem conhecimento prévio. Para níveis intermediário e avançado, é recomendada familiaridade com os conceitos básicos." },
  { q: "Como faço para me inscrever nos workshops?", a: "Clique em 'Inscrever-se' no workshop desejado e preencha o formulário de inscrição. Após a confirmação do pagamento, você receberá todas as instruções por e-mail." },
  { q: "Os workshops têm certificado?", a: "Sim! Todos os participantes que completarem o workshop recebem um certificado digital assinado pela EconomiK." },
  { q: "Qual é a política de cancelamento?", a: "Cancelamentos realizados até 7 dias antes do workshop recebem reembolso integral. Após esse período, oferecemos crédito para um próximo workshop." },
  { q: "Os workshops são presenciais ou online?", a: "Oferecemos ambos os formatos. Os workshops presenciais ocorrem em São Paulo. Os online são transmitidos ao vivo com interação em tempo real." },
];

const TESTIMONIALS_W = [
  { quote: "Os workshops que participei foram transformadores. Aprendi muito sobre finanças e a experiência foi incrível para os negócios.", name: "Vanessa Silva", role: "Estudante de Economia", rating: 5 },
];

export function WorkshopsPage() {
  const { ref: mainRef, inView: mainVisible } = useInView(0.1);
  const { ref: benefitsRef, inView: benefitsVisible } = useInView(0.1);
  const { ref: faqRef, inView: faqVisible } = useInView(0.1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Capacitação empresarial
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
            Explore nossos{" "}
            <span style={{ color: "#FFD700" }}>workshops</span>
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
            Programas de capacitação práticos em economia, finanças e análise de dados para profissionais e empreendedores.
          </p>
        </div>
      </section>

      {/* Upcoming workshops */}
      <section ref={mainRef} className="py-16" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`mb-10 transition-all duration-700 ${mainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Explorar Nossos Workshops
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#000",
              }}
            >
              Próximas turmas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {WORKSHOPS.map((w, i) => (
              <div
                key={w.title}
                className={`bg-white rounded-sm border border-black/8 hover:border-[#FFD700]/30 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  mainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm inline-block mb-2"
                        style={{
                          background: "rgba(255,215,0,0.1)",
                          color: "#FFD700",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {w.category}
                      </span>
                      <h3
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#000" }}
                      >
                        {w.title}
                      </h3>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-sm shrink-0"
                      style={{
                        background: w.level === "Iniciante" ? "#E8F5E9" : w.level === "Intermediário" ? "#FFF8E1" : "#FCE4EC",
                        color: w.level === "Iniciante" ? "#2E7D32" : w.level === "Intermediário" ? "#E65100" : "#880E4F",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    >
                      {w.level}
                    </span>
                  </div>

                  <p
                    className="mb-4"
                    style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.87rem", color: "#666", lineHeight: 1.6 }}
                  >
                    {w.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: "#888" }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: "#FFD700" }} />
                      <span style={{ fontFamily: "'Figtree', sans-serif" }}>{w.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} style={{ color: "#FFD700" }} />
                      <span style={{ fontFamily: "'Figtree', sans-serif" }}>{w.duration}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} style={{ color: "#FFD700" }} />
                      <span
                        style={{
                          fontFamily: "'Figtree', sans-serif",
                          color: w.spotsLeft <= 5 ? "#e53e3e" : "#888",
                          fontWeight: w.spotsLeft <= 5 ? 600 : 400,
                        }}
                      >
                        {w.spotsLeft} vagas restantes
                      </span>
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="h-1.5 rounded-full bg-black/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${((w.spots - w.spotsLeft) / w.spots) * 100}%`,
                          background: "#FFD700",
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    to="/contato"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm rounded-sm transition-all duration-200 hover:brightness-90"
                    style={{ background: "#000", color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Inscrever-se <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-24" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              Benefícios de Participar dos Workshops
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#FFFFFF",
              }}
            >
              Por que participar?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`p-6 rounded-sm border border-white/5 hover:border-[#FFD700]/20 transition-all duration-300 ${
                    benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ background: "rgba(255,255,255,0.03)", transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <Icon size={20} style={{ color: "#FFD700", marginBottom: "12px" }} />
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white" }}
                  >
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20" style={{ background: "#111" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Feedback dos Participantes
          </p>
          {TESTIMONIALS_W.map((t) => (
            <div key={t.name}>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" style={{ color: "#FFD700" }} />
                ))}
              </div>
              <blockquote
                className="mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  color: "white",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                "O que nossos participantes dizem sobre os workshops"
              </blockquote>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white" }}
              >
                {t.name}
              </p>
              <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Participe CTA + image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-sm flex items-center justify-center"
                  style={{ background: "#F5F5F5", border: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity={0.2} style={{ margin: "0 auto" }}>
                      <rect width="40" height="40" rx="4" fill="#333" />
                      <path d="M10 25l8-8 5 5 7-10" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p
                className="mb-3 uppercase tracking-widest text-xs"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
              >
                Participe dos Nossos Workshops
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#000",
                  lineHeight: 1.2,
                }}
              >
                Transforme a forma como você{" "}
                <span style={{ color: "#FFD700" }}>decide</span>
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.65 }}
              >
                Aprenda com quem vive a economia na prática. Nossos workshops combinam rigor acadêmico e aplicação real para transformar a forma como você toma decisões.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-black rounded-sm hover:brightness-90 transition-all"
                style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Inscreva-se agora <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24" style={{ background: "#F5F5F5" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className={`mb-10 transition-all duration-700 ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p
              className="mb-3 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
            >
              FAQ
            </p>
            <h2
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#000" }}
            >
              Perguntas Frequentes
            </h2>
            <p
              className="mt-2"
              style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "#666" }}
            >
              Esclarecemos aqui as principais dúvidas sobre nossos workshops.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-sm border border-black/8 overflow-hidden transition-all duration-700 ${
                  faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.93rem", color: "#000" }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "#FFD700",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      shrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.87rem",
                        color: "#555",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p
              className="mb-4"
              style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "#666" }}
            >
              Ainda tem dúvidas? Entre em contato diretamente com nossa equipe.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-black rounded-sm hover:brightness-90 transition-all"
              style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Falar conosco <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
