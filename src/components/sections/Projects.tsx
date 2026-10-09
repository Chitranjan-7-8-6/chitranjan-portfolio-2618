// "use client";
// import { useRef } from "react";
// import { projects } from "@/lib/data";
// function Card({ p }: { p: (typeof projects)[number] }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const move = (e: React.MouseEvent) => {
//     const el = ref.current!, r = el.getBoundingClientRect();
//     const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
//     el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg)`;
//     el.style.setProperty("--mx", `${x * 100}%`); el.style.setProperty("--my", `${y * 100}%`);
//   };
//   return (
//     <div ref={ref} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }}
//       className="glass rounded-2xl p-6 flex flex-col transition-transform duration-150 relative overflow-hidden"
//       style={{ backgroundImage: "radial-gradient(300px circle at var(--mx,50%) var(--my,0%), rgba(196,0,36,.2), transparent 60%)" }}>
//       <h3 className="font-oswald text-2xl">{p.title}</h3>
//       <p className="text-sm text-white/70 mt-3 flex-1">{p.desc}</p>
//       <div className="flex flex-wrap gap-1.5 mt-4">{p.stack.map((s) => <span key={s} className="mono text-[11px] px-2 py-0.5 rounded border border-white/10 text-white/60">{s}</span>)}</div>
//       <div className="flex gap-5 mt-5 mono text-xs">
//         <a href={p.live} target="_blank" rel="noreferrer" data-magnetic style={{ color: "#ff3b5c" }}>LIVE DEMO ↗</a>
//         <a href="https://github.com/Chitranjan-7-8-6" target="_blank" rel="noreferrer" data-magnetic>GITHUB ↗</a>
//       </div>
//     </div>
//   );
// }
// export default function Projects() {
//   return (<section id="projects" className="sec"><h2 className="h2">Projects</h2>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{projects.map((p) => <Card key={p.title} p={p} />)}</div></section>);
// }

// YE NEW CODE HAI UPPAR ORIGINAL CODE HAI

"use client";
import { useRef } from "react";
import { projects } from "@/lib/data";
function Card({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current!, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg)`;
    el.style.setProperty("--mx", `${x * 100}%`); el.style.setProperty("--my", `${y * 100}%`);
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }}
      className="glass rounded-2xl p-6 flex flex-col transition-transform duration-150 relative overflow-hidden"
      style={{ backgroundImage: "radial-gradient(300px circle at var(--mx,50%) var(--my,0%), rgba(196,0,36,.2), transparent 60%)" }}>
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-44 object-cover rounded-lg mb-4 border border-white/10"
      />
      <h3 className="font-oswald text-2xl">{p.title}</h3>
      <p className="text-sm text-white/70 mt-3 flex-1">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">{p.stack.map((s) => <span key={s} className="mono text-[11px] px-2 py-0.5 rounded border border-white/10 text-white/60">{s}</span>)}</div>
      <div className="flex gap-5 mt-5 mono text-xs">
        <a href={p.live} target="_blank" rel="noreferrer" data-magnetic style={{ color: "#ff3b5c" }}>LIVE DEMO ↗</a>
        <a href="https://github.com/Chitranjan-7-8-6" target="_blank" rel="noreferrer" data-magnetic>GITHUB ↗</a>
      </div>
    </div>
  );
}
export default function Projects() {
  return (<section id="projects" className="sec"><h2 className="h2">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{projects.map((p) => <Card key={p.title} p={p} />)}</div></section>);
}