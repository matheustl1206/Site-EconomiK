import { useState } from "react";
import { Link } from "react-router";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const SOURCES = ["Instagram", "LinkedIn", "Indicação", "Google", "Evento", "Outro"];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    challenge: "",
    source: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Nome é obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.challenge.trim()) e.challenge = "Descreva seu desafio";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const inputClass = "w-full bg-white border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] transition-colors";
  const inputStyle = (hasError?: boolean) => ({
    fontFamily: "'Figtree', sans-serif",
    color: "#000",
    borderColor: hasError ? "#e53e3e" : "rgba(0,0,0,0.12)",
  });

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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="mb-4 uppercase tracking-widest text-xs"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFD700" }}
          >
            Fale conosco
          </p>
          <h1
            className="mb-5"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Entre em contato <span style={{ color: "#FFD700" }}>conosco</span>
          </h1>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            Estamos aqui para você. Não importa a pergunta ou o projeto — nossa equipe está pronta para ajudar.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="bg-white rounded-sm p-12 text-center border border-black/5"
                  style={{ minHeight: "500px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(255,215,0,0.1)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#FFD700" }} />
                  </div>
                  <h2
                    className="mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#000" }}
                  >
                    Mensagem enviada!
                  </h2>
                  <p
                    className="mb-6 max-w-sm"
                    style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "#666", lineHeight: 1.65 }}
                  >
                    Recebemos sua mensagem e entraremos em contato em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", challenge: "", source: "" }); }}
                    className="text-sm px-6 py-3 rounded-sm transition-all hover:brightness-90"
                    style={{ background: "#FFD700", color: "#000", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-sm p-8 lg:p-10 border border-black/5">
                  <h2
                    className="mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#000" }}
                  >
                    Entre em Contato
                  </h2>
                  <p
                    className="mb-8"
                    style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "#888" }}
                  >
                    Preencha o formulário e nossa equipe entrará em contato em até 24h.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block mb-1.5 text-xs uppercase tracking-wide"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                        >
                          Nome *
                        </label>
                        <input
                          type="text"
                          placeholder="Seu nome completo"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className={inputClass}
                          style={inputStyle(!!errors.name)}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs" style={{ color: "#e53e3e", fontFamily: "'Figtree', sans-serif" }}>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block mb-1.5 text-xs uppercase tracking-wide"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                        >
                          Empresa
                        </label>
                        <input
                          type="text"
                          placeholder="Nome da empresa"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className={inputClass}
                          style={inputStyle()}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block mb-1.5 text-xs uppercase tracking-wide"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                        >
                          E-mail *
                        </label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className={inputClass}
                          style={inputStyle(!!errors.email)}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs" style={{ color: "#e53e3e", fontFamily: "'Figtree', sans-serif" }}>
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="block mb-1.5 text-xs uppercase tracking-wide"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                        >
                          Telefone
                        </label>
                        <input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={inputClass}
                          style={inputStyle()}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block mb-1.5 text-xs uppercase tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                      >
                        Desafio de negócio *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Descreva o principal desafio que sua empresa enfrenta..."
                        value={form.challenge}
                        onChange={(e) => handleChange("challenge", e.target.value)}
                        className={inputClass}
                        style={{ ...inputStyle(!!errors.challenge), resize: "vertical" }}
                      />
                      {errors.challenge && (
                        <p className="mt-1 text-xs" style={{ color: "#e53e3e", fontFamily: "'Figtree', sans-serif" }}>
                          {errors.challenge}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block mb-1.5 text-xs uppercase tracking-wide"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000" }}
                      >
                        Como nos encontrou?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SOURCES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleChange("source", form.source === s ? "" : s)}
                            className="px-4 py-2 rounded-sm text-xs transition-all duration-200"
                            style={{
                              fontFamily: "'Figtree', sans-serif",
                              fontWeight: 500,
                              background: form.source === s ? "#000" : "white",
                              color: form.source === s ? "#FFD700" : "#666",
                              border: `1px solid ${form.source === s ? "#000" : "rgba(0,0,0,0.12)"}`,
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-sm text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-90"
                      style={{ background: "#FFD700", color: "#000", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                    >
                      Enviar mensagem <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-sm p-8 border border-black/5">
                <h3
                  className="mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#000" }}
                >
                  Entre em Contato
                </h3>
                <p
                  className="mb-6"
                  style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.88rem", color: "#666", lineHeight: 1.65 }}
                >
                  Adoraríamos falar com você. Use os dados abaixo para entrar em contato conosco.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "(11) 1234-5678" },
                    { icon: Mail, label: "contato@economik.com.br" },
                    { icon: MapPin, label: "Av. São João, 123 – São Paulo, SP" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                        style={{ background: "rgba(255,215,0,0.1)" }}
                      >
                        <Icon size={16} style={{ color: "#FFD700" }} />
                      </div>
                      <p
                        className="mt-1.5"
                        style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.87rem", color: "#555" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#000" }}
                >
                  Encontre-nos aqui
                </h3>
                <div
                  className="rounded-sm h-48 flex items-center justify-center"
                  style={{ background: "#E8E8E8", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <div className="text-center">
                    <MapPin size={24} style={{ color: "#FFD700", margin: "0 auto 8px" }} />
                    <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.82rem", color: "#999" }}>
                      Av. São João, 123 – São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ background: "#000" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "white",
            }}
          >
            Receba novidades diretamente em seu e-mail
          </h2>
          <p
            className="mb-6"
            style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)" }}
          >
            Insights de economia, mercado e finanças para ajudar seu negócio a crescer.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-sm text-sm transition-all hover:brightness-90"
              style={{ background: "#FFD700", color: "#000", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
