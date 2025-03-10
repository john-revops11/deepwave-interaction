import { useEffect, useRef } from 'react';

const DeepSeaCreature = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Octopus properties
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let time = 0;
    const speed = 1;
    let direction = 1;

    // Animation function
    const drawOctopus = (x: number, y: number, time: number) => {
      ctx.save();
      ctx.translate(x, y);
      
      // Body
      ctx.beginPath();
      ctx.fillStyle = 'rgba(34, 211, 238, 0.8)';
      ctx.ellipse(0, 0, 15, 20, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tentacles
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
        ctx.lineWidth = 2;
        
        const angle = (i * Math.PI / 4) + Math.sin(time) * 0.2;
        const length = 20 + Math.sin(time + i) * 5;
        
        ctx.moveTo(0, 10);
        ctx.quadraticCurveTo(
          Math.cos(angle) * 15,
          20 + Math.sin(time + i) * 5,
          Math.cos(angle) * 10,
          30 + length
        );
        
        ctx.stroke();
      }

      // Eyes
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(-5, -5, 3, 0, Math.PI * 2);
      ctx.arc(5, -5, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update position
      x += Math.sin(time) * speed * direction;
      y += Math.cos(time * 0.5) * speed;
      
      // Bounce off edges
      if (x > canvas.width - 50 || x < 50) {
        direction *= -1;
      }
      
      // Keep within bounds
      y = Math.max(50, Math.min(canvas.height - 50, y));
      
      drawOctopus(x, y, time);
      time += 0.05;
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5"
      style={{ opacity: 0.7 }}
    />
  );
};

export default DeepSeaCreature;
