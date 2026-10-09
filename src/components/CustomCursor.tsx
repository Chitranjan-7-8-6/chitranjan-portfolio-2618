"use client";
import { useEffect, useRef } from "react";
export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null), dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = -100, y = -100, rx = -100, ry = -100, big = false, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY;
      big = !!(e.target as HTMLElement).closest("[data-magnetic],a,button"); };
    window.addEventListener("mousemove", move);
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx - 20}px,${ry - 20}px) scale(${big ? 1.8 : 1})`;
      if (dot.current) dot.current.style.transform = `translate(${x - 3}px,${y - 3}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); };
  }, []);
  const base: React.CSSProperties = { position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 100 };
  return (<div className="hidden md:block">
    <div ref={ring} style={{ ...base, width: 40, height: 40, borderRadius: "50%", border: "1px solid #e0002a", transition: "scale .2s" }} />
    <div ref={dot} style={{ ...base, width: 6, height: 6, borderRadius: "50%", background: "#e0002a" }} />
  </div>);
}
