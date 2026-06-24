import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { GlobalStyles } from "./GlobalStyles";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

type LayoutProps = {
  children: ReactNode;
  navVariant?: "overlay" | "solid";
};

export function Layout({ children, navVariant = "solid" }: LayoutProps) {
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
      {navVariant === "solid" && <Nav variant="solid" />}
      {navVariant === "overlay" && <Nav variant="overlay" />}
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
