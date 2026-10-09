// "use client";
// import { useEffect, useRef } from "react";
// export default function CinematicVideo({ src }: { src: string }) {
//   const vid = useRef<HTMLVideoElement>(null);
//   const stage = useRef<HTMLDivElement>(null);
//   const glow = useRef<HTMLDivElement>(null);
//   const bar = useRef<HTMLDivElement>(null);
//   const target = useRef(0), current = useRef(0), ready = useRef(false);
//   const mouse = useRef({ x: 0.5, y: 0.5 }), scroll = useRef(0);
//   useEffect(() => {
//     const v = vid.current!;
//     const onReady = () => { ready.current = true; v.pause(); try { v.currentTime = 0; } catch {} };
//     v.addEventListener("loadedmetadata", onReady); v.addEventListener("canplay", onReady);
//     if (v.readyState >= 1) onReady();
//     const onMove = (e: MouseEvent) => {
//       mouse.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
//       if (glow.current) glow.current.style.background =
//         `radial-gradient(circle at ${mouse.current.x * 100}% ${mouse.current.y * 100}%, rgba(196,0,36,0.18), transparent 45%)`;
//     };
//     const onScroll = () => {
//       const max = document.documentElement.scrollHeight - window.innerHeight;
//       scroll.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
//       if (bar.current) bar.current.style.transform = `scaleX(${scroll.current})`;
//     };
//     window.addEventListener("mousemove", onMove); window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     let raf = 0;
//     const loop = () => {
//       const d = v.duration;
//       if (ready.current && isFinite(d) && d > 0) {
//         const p = Math.min(1, Math.max(0, scroll.current * 0.65 + mouse.current.x * 0.35));
//         target.current = p * (d - 0.05);
//         current.current += (target.current - current.current) * 0.1;
//         if (Math.abs(v.currentTime - current.current) > 0.001) {
//           try { v.currentTime = current.current; } catch {}
//         }
//       }
//       const dx = mouse.current.x - 0.5, dy = mouse.current.y - 0.5;
//       if (stage.current) stage.current.style.transform =
//         `scale(1.06) translate3d(${dx * -15}px, ${dy * -15}px, 0) rotateX(${dy * -2}deg) rotateY(${dx * 2}deg)`;
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMove); window.removeEventListener("scroll", onScroll);
//       v.removeEventListener("loadedmetadata", onReady); v.removeEventListener("canplay", onReady);
//     };
//   }, []);
//   return (
//     <>
//       <div className="cine-progress" ref={bar} />
//       <div className="cine-stage" aria-hidden>
//         <div ref={stage} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
//           <video ref={vid} className="cine-video" src={src} playsInline muted preload="auto" />
//         </div>
//       </div>
//       <div className="cine-layer cine-vignette" />
//       <div className="cine-layer cine-glow" id="cine-glow" ref={glow} />
//       <div className="cine-layer cine-grain" />
//       <div className="cine-layer cine-scan" />
//     </>
//   );
// }


// ORIGINAL CODE HAI UPPAR WLA CORRECT CODE HAI

"use client";
import { useEffect, useRef } from "react";

export default function CinematicVideo({ src }: { src: string }) {
  const vid = useRef<HTMLVideoElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = vid.current;
    if (v) v.play().catch(() => {});

    const onMove = (e: MouseEvent) => {
      if (!glow.current) return;
      const xp = (e.clientX / window.innerWidth) * 100;
      const yp = (e.clientY / window.innerHeight) * 100;
      glow.current.style.background = `radial-gradient(circle at ${xp}% ${yp}%, rgba(196,0,36,0.18), transparent 45%)`;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="cine-progress" ref={bar} />
      <div className="cine-stage" aria-hidden>
        <div style={{ position: "absolute", inset: 0, transform: "scale(1.06)" }}>
          <video
            ref={vid}
            className="cine-video"
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
      <div className="cine-layer cine-vignette" />
      <div className="cine-layer cine-glow" id="cine-glow" ref={glow} />
      <div className="cine-layer cine-grain" />
      <div className="cine-layer cine-scan" />
    </>
  );
}
