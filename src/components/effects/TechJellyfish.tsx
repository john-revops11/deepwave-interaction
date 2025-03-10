
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const TechJellyfish = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

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

    // Three jellyfish with different properties
    const jellyfishes = [
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.7,
        size: isMobile ? 15 : 25,
        speed: 0.5,
        color: 'rgba(34, 211, 238, 0.8)',
        tentacleLength: isMobile ? 15 : 25,
        tentacleCount: 6,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.25,
        size: isMobile ? 12 : 20,
        speed: 0.8,
        color: 'rgba(94, 234, 212, 0.7)',
        tentacleLength: isMobile ? 12 : 20,
        tentacleCount: 5,
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.85,
        size: isMobile ? 18 : 30,
        speed: 0.3,
        color: 'rgba(134, 239, 172, 0.7)',
        tentacleLength: isMobile ? 18 : 30,
        tentacleCount: 7,
      }
    ];

    let time = 0;

    // Function to draw a tech-based jellyfish
    const drawTechJellyfish = (
      x: number, 
      y: number, 
      size: number, 
      time: number, 
      color: string,
      tentacleLength: number,
      tentacleCount: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      
      // Draw the dome (tech-styled)
      ctx.beginPath();
      ctx.fillStyle = color;
      
      // Main dome
      ctx.arc(0, 0, size, 0, Math.PI, true);
      ctx.fill();
      
      // Circuit pattern on dome
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 0.8;
      
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(-size * 0.8, -size * 0.3);
      ctx.lineTo(size * 0.8, -size * 0.3);
      ctx.stroke();
      
      // Vertical lines
      for (let i = -0.8; i <= 0.8; i += 0.4) {
        ctx.beginPath();
        ctx.moveTo(size * i, -size * 0.3);
        ctx.lineTo(size * i, 0);
        ctx.stroke();
      }
      
      // LED lights
      const ledColors = ['rgba(255, 255, 255, 0.8)', 'rgba(120, 255, 214, 0.8)', 'rgba(0, 200, 255, 0.8)'];
      for (let i = -0.6; i <= 0.6; i += 0.6) {
        ctx.beginPath();
        ctx.fillStyle = ledColors[Math.floor(Math.random() * ledColors.length)];
        ctx.arc(size * i, -size * 0.6, size * 0.1, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw tentacles (digital style)
      for (let i = 0; i < tentacleCount; i++) {
        const tentacleSpacing = Math.PI / (tentacleCount - 1);
        const angle = tentacleSpacing * i;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        
        // Starting point
        const startX = Math.cos(angle) * (size * 0.8);
        
        // Wavy digital tentacle
        const amplitude = Math.sin(time + i) * 5;
        
        ctx.moveTo(startX, 0);
        
        // Create segments with digital pattern
        const segments = 5;
        for (let j = 1; j <= segments; j++) {
          const segmentY = (tentacleLength / segments) * j;
          const offsetX = Math.sin(time * 2 + i + j * 0.5) * amplitude;
          
          ctx.lineTo(startX + offsetX, segmentY);
        }
        
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each jellyfish
      for (const jelly of jellyfishes) {
        // Make them float slightly up and down
        jelly.y += Math.sin(time * jelly.speed) * 0.5;
        
        drawTechJellyfish(
          jelly.x, 
          jelly.y, 
          jelly.size, 
          time, 
          jelly.color,
          jelly.tentacleLength,
          jelly.tentacleCount
        );
      }
      
      time += 0.05;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5"
      style={{ opacity: 0.7 }}
    />
  );
};

export default TechJellyfish;
