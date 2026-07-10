"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number; size: number };

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;
    let pointer = { x: width / 2, y: height / 2 };
    let dots: Dot[] = [];

    const createDots = () => {
      const amount = Math.min(42, Math.max(18, Math.floor(width / 36)));
      dots = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.4 + 0.5,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createDots();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        if (!reduceMotion) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          const dx = pointer.x - dot.x;
          const dy = pointer.y - dot.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 170 && distance > 0) {
            dot.x -= (dx / distance) * 0.08;
            dot.y -= (dy / distance) * 0.08;
          }
          if (dot.x < -20) dot.x = width + 20;
          if (dot.x > width + 20) dot.x = -20;
          if (dot.y < -20) dot.y = height + 20;
          if (dot.y > height + 20) dot.y = -20;
        }
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(255,255,255,.28)";
        context.fill();
      }

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const distance = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (distance < 125) {
            context.beginPath();
            context.moveTo(dots[i].x, dots[i].y);
            context.lineTo(dots[j].x, dots[j].y);
            context.strokeStyle = `rgba(255,255,255,${(1 - distance / 125) * 0.08})`;
            context.stroke();
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}
