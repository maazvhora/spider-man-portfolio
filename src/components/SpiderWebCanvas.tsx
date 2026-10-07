import React, { useEffect, useRef } from 'react';

interface SpiderWebCanvasProps {
  className?: string;
}

export const SpiderWebCanvas: React.FC<SpiderWebCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const nodeCount = Math.min(50, Math.floor((width * height) / 28000));
    const nodes: Node[] = [];
    const colors = ['#ff2a55', '#00e5ff', '#a855f7', '#38bdf8', '#f43f5e'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      isActive: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    // Burst shockwave rings on click
    interface Ring {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
    }
    const rings: Ring[] = [];

    const handleClick = (e: MouseEvent) => {
      rings.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 120,
        alpha: 0.8,
        color: Math.random() > 0.5 ? '#ff2a55' : '#00e5ff',
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    const maxDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update shockwave rings
      for (let r = rings.length - 1; r >= 0; r--) {
        const ring = rings[r];
        ring.radius += 3.5;
        ring.alpha -= 0.025;

        if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
          rings.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.alpha;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.restore();
      }

      // Draw connecting web lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move node
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Connect with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            // Alternate web strand color
            ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 229, 255, ${alpha})` : `rgba(255, 42, 85, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect with mouse (web shooter attraction)
        if (mouse.isActive) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 42, 85, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Gentle gravitational pull towards cursor
            a.x -= dx * 0.015;
            a.y -= dy * 0.015;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.globalAlpha = a.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
