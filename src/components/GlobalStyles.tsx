export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
      html, body { scroll-behavior: smooth; margin: 0; padding: 0; }
      html, body, #root { min-height: 100%; }
      body { background: #000; color: #fff; -webkit-font-smoothing: antialiased; }
      .hero-title { letter-spacing: -0.04em; line-height: 0.95; }
      .serif { font-family: 'Instrument Serif', serif; font-weight: 400; letter-spacing: -0.02em; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .fade-up { opacity: 0; animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
      .in.fade-up { opacity: 0; animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
      @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      .live-dot { animation: pulseDot 2s ease-in-out infinite; }
      @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.1); } }
      @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,40px) scale(1.15); } }
      @keyframes drift3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,30px) scale(0.95); } }
      .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
      .orb-1 { top: 10%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(30,64,175,0.5), transparent 70%); animation: drift1 18s ease-in-out infinite; }
      .orb-2 { bottom: -10%; right: -5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(8,145,178,0.4), transparent 70%); animation: drift2 22s ease-in-out infinite; }
      .orb-3 { top: 30%; right: 25%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(244,114,182,0.25), transparent 70%); animation: drift3 26s ease-in-out infinite; }
      .grid-bg { background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 60px 60px; }
      .grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity: 0.06; pointer-events: none; }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .marquee-track { animation: marquee 45s linear infinite; }
    `}</style>
  );
}
