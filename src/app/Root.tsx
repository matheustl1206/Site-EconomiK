import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";

export function Root() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ fontFamily: "'Figtree', sans-serif" }} className="min-h-screen bg-white">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
