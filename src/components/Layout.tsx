import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { GlobalStyles } from "./GlobalStyles";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import type { Offer } from "../lib/analytics";

type LayoutProps = {
  children: ReactNode;
  navVariant?: "overlay" | "solid";
  offer?: Offer;
};

export function Layout({ children, navVariant = "solid", offer = "general" }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Readex Pro', system-ui, sans-serif" }}>
      <GlobalStyles />
      {navVariant === "solid" && <Nav variant="solid" offer={offer} />}
      {navVariant === "overlay" && <Nav variant="overlay" offer={offer} />}
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp offer={offer} />
    </div>
  );
}
