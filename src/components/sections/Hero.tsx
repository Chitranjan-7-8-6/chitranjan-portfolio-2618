"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
export default function Hero() {
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);

  useEffect(() => {
    if (!isResumePreviewOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsResumePreviewOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isResumePreviewOpen]);

  return (
    <>
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-x-clip"
      >
      <div
        aria-hidden
        className="absolute inset-x-0 top-24 md:top-1/2 md:-translate-y-1/2 font-oswald uppercase text-center select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(3rem,16vw,20rem)",
          color: "transparent",
          WebkitTextStroke: "2px rgba(196, 0, 36, 0.35)",
          textShadow: "0 0 50px rgba(196, 0, 36, 0.18)",
        }}
      ></div>

      {/* <div aria-hidden className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-oswald uppercase text-center select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(5rem,22vw,20rem)", color: "transparent", WebkitTextStroke: "2px rgba(196, 0, 36, 0.35)", textShadow: "0 0 50px rgba(196, 0, 36, 0.18)" }}>
        {profile.first}
      </div> */}
      <div className="relative max-w-[1200px] mx-auto px-6 w-full pt-44 md:pt-28">
        <span
          className="mono text-xs tracking-widest glass px-3 py-1.5 rounded-full inline-block"
          style={{ color: "#ff3b5c" }}
        >
          01 / DATA ANALYST
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-oswald uppercase mt-6 leading-[0.95]"
          // style={{ fontSize: "clamp(3rem,9vw,8rem)", maxWidth: "13ch" }}
          style={{ fontSize: "clamp(2rem,6vw,5rem)", maxWidth: "13ch" }}
        >
          <span style={{ color: "#ffffff" }}>Building ideas</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #ff3b5c 50%, #c40024 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            into experiences
          </span>
          <span style={{ color: "#e0002a", textShadow: "0 0 24px #e0002a" }}>
            .
          </span>
        </motion.h1>
        <p className="mt-6 max-w-md text-white/70">
          Power BI dashboards, Python analysis and SQL, turned into decisions
          people can act on.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full px-6 font-oswald tracking-wider"
            style={{ background: "#c40024" }}
          >
            EXPLORE WORK →
          </a>
          <button
            type="button"
            onClick={() => setIsResumePreviewOpen(true)}
            className="glass inline-flex h-12 items-center justify-center rounded-full px-6 font-oswald tracking-wider"
          >
            DOWNLOAD RESUME
          </button>
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          {profile.stats.map((s) => (
            <div key={s.k} className="glass rounded-xl px-5 py-3">
              <div className="font-oswald text-3xl">{s.v}</div>
              <div className="mono text-[11px] text-white/60">{s.k}</div>
            </div>
          ))}
          <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
            <span
              className="node w-2.5 h-2.5 rounded-full"
              style={{ background: "#00ff88" }}
            />
            <span className="mono text-[11px]">Open to opportunities</span>
          </div>
        </div>
      </div>
      </section>
      {isResumePreviewOpen && createPortal(
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsResumePreviewOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
            className="flex h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#101013] shadow-2xl"
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <h2
                id="resume-preview-title"
                className="font-oswald text-lg uppercase tracking-wider"
              >
                Resume Preview
              </h2>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 font-oswald text-sm tracking-wider"
                  style={{ background: "#c40024" }}
                >
                  DOWNLOAD PDF
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumePreviewOpen(false)}
                  aria-label="Close resume preview"
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-xl"
                >
                  ×
                </button>
              </div>
            </header>
            <iframe
              src="/resume.pdf"
              title="Resume PDF preview"
              className="min-h-0 flex-1 bg-white"
            />
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}


