import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ fontFamily: "'Figtree', sans-serif" }} className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
