"use client";
import { useRef } from "react";
export default function Magnetic({ children, className = "", href, onClick }: { children: React.ReactNode; className?: string; href?: string; onClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent) => { const el = ref.current!, r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)`; };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <a ref={ref} href={href} onClick={onClick} data-magnetic onMouseMove={move} onMouseLeave={leave}
    className={`inline-block transition-transform duration-200 ${className}`}>{children}</a>;
}
