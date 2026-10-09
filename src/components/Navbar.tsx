"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";
const links = ["about", "experience", "projects", "skills", "certifications", "contact"];
export default function Navbar() {
  const [active, setActive] = useState(""); const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const el = document.getElementById(l); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,880px)]">
      <nav className="glass rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" data-magnetic className="font-oswald text-xl tracking-wide">{profile.first}<span style={{ color: "#e0002a" }}>.</span></a>
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l} className="relative">
              {active === l && <motion.span layoutId="pill" className="absolute inset-0 rounded-full" style={{ background: "rgba(196,0,36,.35)" }} transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              <a href={`#${l}`} className="relative block px-3.5 py-1.5 text-sm capitalize">{l}</a>
            </li>))}
        </ul>
        <button className="md:hidden mono text-xs" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "CLOSE" : "MENU"}</button>
      </nav>
      <AnimatePresence>{open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass rounded-2xl mt-2 p-4 md:hidden flex flex-col gap-3">
          {links.map((l) => <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="capitalize">{l}</a>)}
        </motion.div>)}</AnimatePresence>
    </header>
  );
}
