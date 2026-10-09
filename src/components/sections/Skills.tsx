"use client";
import { skillGroups } from "@/lib/data";
export default function Skills() {
  return (<section id="skills" className="sec"><h2 className="h2">Skills</h2>
    <div className="grid md:grid-cols-2 gap-6 mt-10">{Object.entries(skillGroups).map(([g, list]) => (
      <div key={g} className="glass rounded-2xl p-6"><h3 className="font-syne text-lg mb-4">{g}</h3>
        <div className="flex flex-wrap gap-2">{list.map((s) => <span key={s} data-magnetic className="px-3 py-1.5 rounded-full text-sm border border-white/10 hover:border-[#e0002a] hover:bg-[#c40024]/20 transition-colors">{s}</span>)}</div></div>))}
    </div></section>);
}
