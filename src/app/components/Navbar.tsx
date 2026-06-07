import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: "/servicos", label: "Serviços" },
    { to: "/cases", label: "Cases" },
    { to: "/insights", label: "Insights" },
    { to: "/workshops", label: "Workshops" },
    { to: "/sobre", label: "Sobre" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="2.5" fill="none" />
                <rect x="9" y="16" width="3" height="5" fill="#FFD700" />
                <rect x="13" y="13" width="3" height="8" fill="#FFD700" />
                <rect x="17" y="10" width="3" height="11" fill="#FFD700" />
                <line x1="22.5" y1="22.5" x2="30" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="text-white text-xl tracking-wider"
              >
                <span style={{ fontWeight: 800 }}>ECONOMI</span>
                <span style={{ color: "#FFD700", fontWeight: 800 }}>K</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors duration-200 relative group ${
                  isActive(l.to) ? "text-[#FFD700]" : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 500 }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#FFD700] transition-all duration-300 ${
                    isActive(l.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contato"
              className="px-5 py-2.5 text-sm text-black rounded-sm transition-all duration-200 hover:brightness-90"
              style={{
                background: "#FFD700",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Solicitar Diagnóstico
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base ${
                  isActive(l.to) ? "text-[#FFD700]" : "text-white/80"
                }`}
                style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 500 }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="mt-2 px-5 py-3 text-center text-sm text-black rounded-sm"
              style={{
                background: "#FFD700",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Solicitar Diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
