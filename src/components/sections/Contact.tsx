"use client";
import { useState } from "react";
import Magnetic from "../Magnetic";
import { profile } from "@/lib/data";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = new FormData(e.currentTarget);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${d.get("name")}`)}&body=${encodeURIComponent(`${d.get("message")}\n\nReply to: ${d.get("email")}`)}`;
  };
  const field = "w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 mono text-sm outline-none focus:border-[#e0002a]";
  return (
    <section id="contact" className="sec pb-24">
      <h2 className="h2">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <p className="text-white/70 max-w-[40ch]">Have a dataset that needs a story? Send a message and I will reply within a day.</p>
          <button onClick={copy} data-magnetic className="mono text-sm mt-6 glass px-4 py-2.5 rounded-lg">{copied ? "COPIED ✓" : profile.email}</button>
          <div className="mt-2 mono text-xs text-white/50">{profile.phone} · {profile.location}</div>
          <div className="flex gap-4 mt-8">{[["LinkedIn", profile.linkedin], ["GitHub", profile.github], ["Portfolio", profile.site]].map(([n, h]) => (
            <Magnetic key={n} href={h} className="mono text-xs px-4 py-2 rounded-full border border-white/15 hover:border-[#e0002a]">{n} ↗</Magnetic>))}</div>
        </div>
        <form onSubmit={submit} className="glass rounded-2xl p-6 space-y-4">
          <input name="name" required placeholder="Name" className={field} />
          <input name="email" type="email" required placeholder="Email" className={field} />
          <textarea name="message" required rows={5} placeholder="Message" className={field} />
          <button data-magnetic className="font-oswald tracking-wider px-6 py-3 rounded-full" style={{ background: "#c40024" }}>SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}
