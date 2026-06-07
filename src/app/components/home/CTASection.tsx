import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import mascotWebM from "../../../imports/mascoteloop.webm";
import mascotMp4 from "../../../imports/mascoteloop.mp4";

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

export function CTASection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Subtle grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mascot video — full section background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none object-cover"
          style={{ opacity: 0.75 }}
        >
          <source src={mascotWebM} type="video/webm" />
          <source src={mascotMp4} type="video/mp4" />
        </video>
      </div>

      {/* Left gradient overlay — ensures text readability without hiding the tiger */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Bottom golden glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[200px] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at left bottom, rgba(255,215,0,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`max-w-xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="mb-6 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Próximo passo
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Seu próximo crescimento
            <br />
            começa com uma{" "}
            <span style={{ color: "#FFD700" }}>decisão melhor.</span>
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
            }}
          >
            Vamos analisar o próximo desafio da sua empresa com inteligência econômica e dados reais.
          </p>

          <Link
            to="/contato"
            className="inline-flex items-center gap-3 px-8 py-4 text-black rounded-sm text-base transition-all duration-200 hover:brightness-90 hover:gap-4"
            style={{ background: "#FFD700", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Solicitar Diagnóstico Gratuito
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
