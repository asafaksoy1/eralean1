import { Link } from "react-router-dom";
import { SERVICES } from "../lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/60 py-14 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <svg viewBox="0 0 256 256" className="h-4 w-4">
              <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" fill="currentColor" />
            </svg>
            <span className="text-sm">Eralean · Asaf Aksoy · UK</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Done-for-you customer acquisition systems for UK service businesses. Website, ads, AI, and follow-up — you just take the calls.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="hover:text-white transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#how" className="hover:text-white transition-colors">How it works</a></li>
            <li><a href="/#cases" className="hover:text-white transition-colors">Case studies</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="mailto:asaf@eralean.com" className="hover:text-white transition-colors">asaf@eralean.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs">
        <div>© 2026 Eralean. All rights reserved.</div>
        <div>Built and run by Asaf in the UK.</div>
      </div>
    </footer>
  );
}
