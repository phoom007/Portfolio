"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    if (!dot || !glow || window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0;
    let y = 0;
    let gx = 0;
    let gy = 0;
    let frame = 0;
    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const tick = () => {
      gx += (x - gx) * 0.12;
      gy += (y - gy) * 0.12;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="กลับหน้าแรก">
          <span className="brand-mark">P</span>
          <span>
            <b>PHUWANAT</b>
            <small>PORTFOLIO · 2026</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link href={item.href} key={item.href} className={active ? "active" : ""}>
                {item.label}
                {active && <motion.span layoutId="nav-dot" className="nav-dot" />}
              </Link>
            );
          })}
        </nav>

        <Link className="header-contact" href="mailto:phoomgamertv3@gmail.com">
          พร้อมคุยงาน <ArrowUpRight size={16} />
        </Link>

        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="เปิดเมนู" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {navItems.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.main>

      <footer className="site-footer">
        <div>
          <span className="footer-kicker">LET&apos;S BUILD SOMETHING BETTER</span>
          <h2>มีโจทย์ท้าทายอยู่หรือเปล่า?</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:phoomgamertv3@gmail.com">phoomgamertv3@gmail.com</a>
          <a href="tel:0957214678">095-721-4678</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 PHUWANAT TANALAD</span>
          <span>คิด · วางแผน · ลงมือทำ · พัฒนา</span>
        </div>
      </footer>
    </>
  );
}
