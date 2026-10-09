"use client";
import { profile, skillGroups } from "@/lib/data";
export default function About() {
  return (
    <section id="about" className="sec">
      <h2 className="h2">About</h2>
      <div className="glass rounded-2xl mt-10 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => <i key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
          <span className="mono text-xs text-white/50 ml-3">~/chitranjan/about.sh</span>
        </div>
        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div>
            <p className="mono text-xs mb-3" style={{ color: "#ff3b5c" }}>$ cat bio.txt</p>
            <p className="text-white/80 leading-relaxed max-w-[62ch]">{profile.bio}</p>
            <p className="mono text-xs mt-8 mb-3" style={{ color: "#ff3b5c" }}>$ ls strengths/</p>
            <ul className="space-y-2">{profile.strengths.map((s) => <li key={s} className="mono text-sm text-white/80">&gt; {s}</li>)}</ul>
          </div>
          <div>
            <p className="mono text-xs mb-3" style={{ color: "#ff3b5c" }}>$ skills --matrix</p>
            <div className="space-y-4">{Object.entries(skillGroups).slice(0, 4).map(([g, list]) => (
              <div key={g}><div className="mono text-[11px] text-white/50 mb-1.5">{g}</div>
                <div className="flex flex-wrap gap-1.5">{list.map((s) => <span key={s} data-magnetic className="mono text-xs px-2.5 py-1 rounded border border-white/10 hover:border-[#e0002a] hover:text-white transition-colors text-white/70">{s}</span>)}</div></div>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
