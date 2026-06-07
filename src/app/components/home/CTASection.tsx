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
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,215,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Mascot Background Loop */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-20 sm:opacity-25"
        style={{
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full max-w-[800px] object-contain mix-blend-screen"
        >
          <source src={mascotWebM} type="video/webm" />
          <source src={mascotMp4} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
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
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
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
            className="mb-10 max-w-xl mx-auto"
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
