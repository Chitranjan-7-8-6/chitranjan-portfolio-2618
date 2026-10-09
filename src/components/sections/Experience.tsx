"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { milestones } from "@/lib/data";
const filters = ["All", "Work Experience", "Education"] as const;
export default function Experience() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = milestones.filter((m) => f === "All" || m.type === f);
  return (
    <section id="experience" className="sec">
      <h2 className="h2">Journey</h2>
      <div className="flex gap-2 mt-8 flex-wrap">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} data-magnetic className="relative px-4 py-2 rounded-full mono text-xs">
            {f === x && <motion.span layoutId="fpill" className="absolute inset-0 rounded-full" style={{ background: "#c40024" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            <span className="relative">{x}</span>
          </button>))}
      </div>
      <div className="relative mt-14">
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px -translate-x-1/2" style={{ background: "linear-gradient(#e0002a,#c40024 60%,transparent)", boxShadow: "0 0 14px 1px rgba(224,0,42,.7)" }} />
        <AnimatePresence mode="popLayout">
          {list.map((m, i) => (
            <motion.div layout key={m.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className={`relative pl-12 md:pl-0 mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"}`}>
              <span className={`node absolute top-6 left-4 -translate-x-1/2 md:left-auto w-3.5 h-3.5 rounded-full ${i % 2 ? "md:left-0 md:-translate-x-1/2" : "md:right-0 md:translate-x-1/2"}`}
                style={{ background: m.active ? "#00ff88" : "#e0002a", border: "2px solid #030303" }} />
              <div className="glass rounded-2xl p-6">
                <div className="mono text-[11px]" style={{ color: "#ff3b5c" }}>{m.date} · {m.type}</div>
                <h3 className="font-oswald text-2xl mt-1">{m.title}</h3>
                <div className="text-white/70 text-sm">{m.org}{m.place ? `, ${m.place}` : ""}</div>
                <ul className="mt-3 space-y-1.5 text-sm text-white/60">{m.points.map((p) => <li key={p}>– {p}</li>)}</ul>
              </div>
            </motion.div>))}
        </AnimatePresence>
      </div>
    </section>
  );
}
