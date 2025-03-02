
import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  growing: boolean;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: { min: number; max: number };
  connectParticles?: boolean;
  activeParticles?: boolean;
}

const ParticleBackground = ({
  particleCount = 80,
  particleColor = '#22D3EE',
  particleSize = { min: 1, max: 3 },
  connectParticles = true,
  activeParticles = true
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize particles
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      particles.current = [];

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * (particleSize.max - particleSize.min) + particleSize.min;
        
        particles.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: particleColor,
          alpha: Math.random() * 0.5 + 0.2,
          growing: Math.random() > 0.5
        });
      }
    }
  }, [dimensions, particleCount, particleColor, particleSize]);

  // Draw and animate particles
  useEffect(() => {
    if (!canvasRef.current || particles.current.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each particle
      particles.current.forEach((particle, i) => {
        // Move particle
        if (activeParticles) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
        }

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY *= -1;
        }

        // Animate size with pulsing effect
        if (particle.growing) {
          particle.size += 0.02;
          if (particle.size > particleSize.max) {
            particle.growing = false;
          }
        } else {
          particle.size -= 0.02;
          if (particle.size < particleSize.min) {
            particle.growing = true;
          }
        }

        // Mouse interaction - particles move away from cursor
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        
        if (distance < maxDistance && activeParticles) {
          const angle = Math.atan2(dy, dx);
          const pushFactor = (maxDistance - distance) / maxDistance;
          
          particle.x -= Math.cos(angle) * pushFactor * 1;
          particle.y -= Math.sin(angle) * pushFactor * 1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.alpha})`;
        ctx.fill();

        // Connect particles
        if (connectParticles) {
          for (let j = i + 1; j < particles.current.length; j++) {
            const particle2 = particles.current[j];
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
              const opacity = 1 - distance / maxDistance;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.2})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions, connectParticles, activeParticles, particleSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-mariana-deep to-mariana-light"
    />
  );
};

export default ParticleBackground;
