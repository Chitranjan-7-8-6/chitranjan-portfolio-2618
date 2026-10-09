"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certs } from "@/lib/data";
const N = certs.length, STEP = 360 / N;
const norm = (a: number) => ((a % 360) + 360) % 360;
export default function Certifications() {
  const [R, setR] = useState(480);
  const [front, setFront] = useState(0);
  const [auto, setAuto] = useState(true);
  const [open, setOpen] = useState<number | null>(null);
  const [hash, setHash] = useState("");
  const ring = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const angle = useRef(0), vel = useRef(0), goal = useRef<number | null>(null);
  const drag = useRef({ on: false, x: 0, moved: 0, samples: [] as { x: number; t: number }[] });
  const autoRef = useRef(true), frontRef = useRef(0);
  autoRef.current = auto;
  useEffect(() => {
    const f = () => setR(window.innerWidth < 640 ? 275 : window.innerWidth < 1024 ? 380 : 480);
    f(); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f);
  }, []);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      if (goal.current !== null) {
        angle.current += (goal.current - angle.current) * 0.12;
        if (Math.abs(goal.current - angle.current) < 0.05) { angle.current = goal.current; goal.current = null; }
      } else if (!drag.current.on) {
        if (Math.abs(vel.current) > 0.02) { angle.current += vel.current; vel.current *= 0.945; }
        else if (autoRef.current) angle.current += 0.18;
      }
      if (ring.current) ring.current.style.transform = `translateZ(${-R}px) rotateY(${angle.current}deg)`;
      let best = 0, bestCos = -2;
      cards.current.forEach((el, i) => {
        if (!el) return;
        const c = Math.cos(((i * STEP + angle.current) * Math.PI) / 180);
        if (c > bestCos) { bestCos = c; best = i; }
        el.style.opacity = c < 0 ? "0" : String(0.35 + 0.65 * c);
        el.style.pointerEvents = c < 0.2 ? "none" : "auto";
      });
      if (best !== frontRef.current) { frontRef.current = best; setFront(best); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [R]);
  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { on: true, x: e.clientX, moved: 0, samples: [{ x: e.clientX, t: performance.now() }] };
    vel.current = 0; goal.current = null;
  };
  const move = (e: React.PointerEvent) => {
    const d = drag.current; if (!d.on) return;
    const dx = e.clientX - d.x; d.x = e.clientX; d.moved += Math.abs(dx);
    angle.current += dx * 0.35;
    d.samples.push({ x: e.clientX, t: performance.now() }); if (d.samples.length > 6) d.samples.shift();
  };
  const up = () => {
    const d = drag.current; d.on = false;
    const s = d.samples;
    if (s.length > 1) { const a = s[0], b = s[s.length - 1]; const dt = Math.max(1, b.t - a.t); vel.current = ((b.x - a.x) / dt) * 16 * 0.35; }
  };
  const spinTo = (i: number) => {
    const want = norm(-i * STEP);
    let delta = want - norm(angle.current); if (delta > 180) delta -= 360; if (delta < -180) delta += 360;
    goal.current = angle.current + delta; vel.current = 0;
  };
  const click = (i: number) => {
    if (drag.current.moved > 6) return;
    if (i === frontRef.current) {
      setOpen(i); setHash("");
      crypto.subtle.digest("SHA-256", new TextEncoder().encode(certs[i].code + certs[i].title)).then((b) =>
        setHash("SHA256://" + Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("").slice(0, 40)));
    } else spinTo(i);
  };
  const W = Math.min(300, R * 0.8), H = 190;
  return (
    <section id="certifications" className="sec">
      <h2 className="h2">Certifications</h2>
      <div className="mono text-xs text-white/50 mt-3">Drag to rotate · click a card to bring it forward</div>
      <div className="relative mt-10 select-none" style={{ height: 320, perspective: 1400, touchAction: "pan-y" }}
        onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
        <div ref={ring} style={{ position: "absolute", left: "50%", top: "50%", width: 0, height: 0, transformStyle: "preserve-3d", transform: `translateZ(${-R}px)` }}>
          {certs.map((c, i) => (
            <div key={c.id} ref={(el) => { cards.current[i] = el; }} onClick={() => click(i)} data-magnetic
              className="absolute rounded-xl overflow-hidden p-5 flex flex-col justify-between"
              style={{ width: W, height: H, transform: `translate(-50%, -50%) rotateY(${i * STEP}deg) translateZ(${R}px)`, backfaceVisibility: "hidden",
                background: "linear-gradient(160deg,#101010,#060606)", border: "1px solid rgba(255,255,255,.08)" }}>
              <span className="absolute top-0 left-0 right-0 h-0.5" style={{ background: c.color, boxShadow: `0 0 14px 2px ${c.color}` }} />
              <div><div className="mono text-[10px]" style={{ color: c.color }}>{c.issuer}</div>
                <div className="font-oswald text-xl leading-tight mt-2">{c.title}</div></div>
              <span className="mono text-[10px] px-2 py-1 rounded border border-white/10 w-fit text-white/60">{c.code}</span>
            </div>))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        {certs.map((c, i) => <button key={c.id} aria-label={`Show ${c.title}`} onClick={() => spinTo(i)} className="h-2 rounded-full transition-all" style={{ width: front === i ? 28 : 8, background: front === i ? "#e0002a" : "rgba(255,255,255,.25)" }} />)}
        <button onClick={() => setAuto(!auto)} data-magnetic className="mono text-[11px] ml-4 text-white/70">[AUTO-SPIN {auto ? "ON" : "PAUSED"}]</button>
      </div>
      <AnimatePresence>{open !== null && (
        <motion.div className="fixed inset-0 z-[70] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,.75)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
          <motion.div initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-7 max-w-md w-full" style={{ borderTop: `2px solid ${certs[open].color}` }}>
            <div className="mono text-[11px]" style={{ color: certs[open].color }}>VERIFIED · {certs[open].issuer}</div>
            <h3 className="font-oswald text-3xl mt-2">{certs[open].title}</h3>
            <p className="text-sm text-white/70 mt-3">{certs[open].blurb}</p>
            <div className="mono text-[11px] text-white/50 mt-4 break-all">{hash || "computing hash…"}</div>
            <div className="mono text-[11px] text-white/50 mt-1">Date: {certs[open].date}</div>
            <div className="flex flex-wrap gap-1.5 mt-4">{certs[open].skills.map((s) => <span key={s} className="mono text-[11px] px-2 py-0.5 rounded border border-white/10">{s}</span>)}</div>
            <button onClick={() => setOpen(null)} data-magnetic className="mono text-xs mt-6 text-white/60">[CLOSE]</button>
          </motion.div></motion.div>)}</AnimatePresence>
    </section>
  );
}
