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

    // Four jellyfish with different properties
    const jellyfishes = [
      {
        x: canvas.width * 0.15,
        y: canvas.height * 0.7,
        size: isMobile ? 15 : 25,
        speed: 0.5,
        color: 'rgba(34, 211, 238, 0.8)',
        tentacleLength: isMobile ? 15 : 25,
        tentacleCount: 6,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
        movementSpeed: 0.3 + Math.random() * 0.3,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.25,
        size: isMobile ? 12 : 20,
        speed: 0.8,
        color: 'rgba(94, 234, 212, 0.7)',
        tentacleLength: isMobile ? 12 : 20,
        tentacleCount: 5,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
        movementSpeed: 0.2 + Math.random() * 0.4,
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.85,
        size: isMobile ? 18 : 30,
        speed: 0.3,
        color: 'rgba(134, 239, 172, 0.7)',
        tentacleLength: isMobile ? 18 : 30,
        tentacleCount: 7,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
        movementSpeed: 0.15 + Math.random() * 0.25,
      },
      {
        x: canvas.width * 0.4,
        y: canvas.height * 0.15,
        size: isMobile ? 14 : 22,
        speed: 0.6,
        color: 'rgba(139, 92, 246, 0.7)',
        tentacleLength: isMobile ? 14 : 22,
        tentacleCount: 5,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
        movementSpeed: 0.25 + Math.random() * 0.35,
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

    // Function to update jellyfish position and handle edge transitions
    const updateJellyfishPosition = (jelly: any) => {
      // Update position based on direction and speed
      jelly.x += jelly.directionX * jelly.movementSpeed;
      jelly.y += jelly.directionY * jelly.movementSpeed;
      
      // Handle screen edges - wrap around with random new direction
      const buffer = jelly.size * 2; // Buffer to ensure full exit before reappearing
      
      if (jelly.x < -buffer) {
        jelly.x = canvas.width + buffer;
        jelly.directionX = -Math.random() * 0.5 - 0.5; // Moving left
        jelly.directionY = Math.random() * 2 - 1; // Random vertical direction
      } else if (jelly.x > canvas.width + buffer) {
        jelly.x = -buffer;
        jelly.directionX = Math.random() * 0.5 + 0.5; // Moving right
        jelly.directionY = Math.random() * 2 - 1; // Random vertical direction
      }
      
      if (jelly.y < -buffer) {
        jelly.y = canvas.height + buffer;
        jelly.directionY = -Math.random() * 0.5 - 0.5; // Moving up
        jelly.directionX = Math.random() * 2 - 1; // Random horizontal direction
      } else if (jelly.y > canvas.height + buffer) {
        jelly.y = -buffer;
        jelly.directionY = Math.random() * 0.5 + 0.5; // Moving down
        jelly.directionX = Math.random() * 2 - 1; // Random horizontal direction
      }
      
      // Occasionally change direction slightly for more natural movement
      if (Math.random() < 0.01) {
        jelly.directionX += (Math.random() * 0.2 - 0.1);
        jelly.directionY += (Math.random() * 0.2 - 0.1);
        
        // Normalize direction vector to keep consistent speed
        const magnitude = Math.sqrt(jelly.directionX * jelly.directionX + jelly.directionY * jelly.directionY);
        if (magnitude > 0) {
          jelly.directionX /= magnitude;
          jelly.directionY /= magnitude;
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each jellyfish
      for (const jelly of jellyfishes) {
        // Update position with movement
        updateJellyfishPosition(jelly);
        
        // Make them float slightly up and down
        const floatOffset = Math.sin(time * jelly.speed) * 0.5;
        
        drawTechJellyfish(
          jelly.x, 
          jelly.y + floatOffset, 
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
