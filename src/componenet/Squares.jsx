// ============================================================
//  DECOTUBE — Squares Animated Grid Background
// ============================================================
import React, { useRef, useEffect } from 'react';

export function Squares({
  direction = 'diagonal',
  speed = 1,
  borderColor = 'rgba(255,255,255,0.1)',
  squareSize = 40,
  hoverFillColor = 'rgba(255,255,255,0.05)',
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const hovered = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const startX = Math.floor(offset.current.x / squareSize) * squareSize;
      const startY = Math.floor(offset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const sx = x - (offset.current.x % squareSize);
          const sy = y - (offset.current.y % squareSize);
          const gx = Math.floor((x - startX) / squareSize);
          const gy = Math.floor((y - startY) / squareSize);
          if (hovered.current && gx === hovered.current.x && gy === hovered.current.y) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(sx, sy, squareSize, squareSize);
          }
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(sx, sy, squareSize, squareSize);
        }
      }
    };

    const animate = () => {
      const s = Math.max(speed, 0.1);
      if (direction === 'right') offset.current.x = (offset.current.x - s + squareSize) % squareSize;
      else if (direction === 'left') offset.current.x = (offset.current.x + s + squareSize) % squareSize;
      else if (direction === 'up') offset.current.y = (offset.current.y + s + squareSize) % squareSize;
      else if (direction === 'down') offset.current.y = (offset.current.y - s + squareSize) % squareSize;
      else {
        offset.current.x = (offset.current.x - s + squareSize) % squareSize;
        offset.current.y = (offset.current.y - s + squareSize) % squareSize;
      }
      draw();
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      hovered.current = {
        x: Math.floor((mx + (offset.current.x % squareSize)) / squareSize),
        y: Math.floor((my + (offset.current.y % squareSize)) / squareSize),
      };
    };
    const onLeave = () => { hovered.current = null; };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
    />
  );
}

export default Squares;
