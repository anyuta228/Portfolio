import React, { useEffect, useRef } from 'react';

interface HeroEclipseProps {
  className?: string;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  hasFlare?: boolean;
}

export const HeroEclipse: React.FC<HeroEclipseProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // High DPI Support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Starfield Generator
    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 7000);
    for (let i = 0; i < starCount; i++) {
      const isBright = Math.random() > 0.45;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isBright ? 0.65 + Math.random() * 0.9 : 0.35 + Math.random() * 0.45,
        baseAlpha: 0.25 + Math.random() * 0.65,
        twinkleSpeed: 0.7 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        hasFlare: Math.random() > 0.93,
      });
    }

    // Autonomous orbital cycle (150 seconds for astronomical ultra-slow, meditative 360-degree rotation)
    const ORBIT_PERIOD = 150;
    // Start angle strictly in the top-right quadrant (~40 degrees above horizontal: dirX > 0, dirY < 0)
    const START_ANGLE = -Math.PI * (40 / 180);

    // Compute consistent geometry anchored to the 1760px grid container
    const getEclipseGeometry = (w: number, h: number) => {
      const isDesktop = w >= 1024;
      const isTablet = w >= 768 && w < 1024;

      if (isDesktop) {
        const maxContainerWidth = 1760;
        const padding = w >= 1280 ? 80 : 48;
        const currentContainerWidth = Math.min(w, maxContainerWidth);
        const containerLeft = Math.max(0, (w - maxContainerWidth) / 2) + padding;
        const contentWidth = currentContainerWidth - padding * 2;

        // The center of the eclipse sits confidently in the right column (~79% of container content width)
        // creating a solid optical counterweight to the typography on the left without overlapping
        const cx = containerLeft + contentWidth * 0.79;
        const cy = h * 0.44;
        // Radius increased by ~12-15% (diameter ~640-670px) for bold celestial presence
        const maxRByWidth = contentWidth * 0.22;
        const maxRByHeight = h * 0.37;
        const R = Math.min(Math.max(maxRByWidth, 250), maxRByHeight, 335);

        return { cx, cy, R };
      }

      if (isTablet) {
        return {
          cx: w * 0.5,
          cy: h * 0.40,
          R: Math.min(h * 0.28, 230),
        };
      }

      return {
        cx: w * 0.5,
        cy: h * 0.35,
        R: Math.min(w * 0.44, 180),
      };
    };

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop (Strict 60 FPS Autonomous Orbit)
    let animationFrameId: number;
    const startTime = performance.now();

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);
      const time = (now - startTime) * 0.001;

      // Meditative, linear continuous orbit around the moon disc
      const currentAngle = START_ANGLE + (time / ORBIT_PERIOD) * (Math.PI * 2);

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Starfield (in deep background)
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const alpha = Math.max(
          0.1,
          Math.min(1.0, star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.phase) * 0.22)
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.hasFlare && alpha > 0.68) {
          ctx.strokeStyle = `rgba(209, 225, 255, ${(alpha * 0.4).toFixed(3)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - 3.5, star.y);
          ctx.lineTo(star.x + 3.5, star.y);
          ctx.moveTo(star.x, star.y - 3.5);
          ctx.lineTo(star.x, star.y + 3.5);
          ctx.stroke();
        }
      }

      // 2. Geometry calculations for Eclipse (Anchored to the grid container)
      const { cx, cy, R } = getEclipseGeometry(width, height);

      const dirX = Math.cos(currentAngle);
      const dirY = Math.sin(currentAngle);

      // Natural Solar Offset (The sun is behind the moon, shifted along currentAngle)
      const sunOffset = R * 0.076;
      const sunX = cx + dirX * sunOffset;
      const sunY = cy + dirY * sunOffset;
      const sunR = R + 2.5;

      // 3. Wide Diffuse Solar Corona Atmosphere
      const coronaRadius = R * 2.35;
      const coronaGrad = ctx.createRadialGradient(
        sunX + dirX * (R * 0.25),
        sunY + dirY * (R * 0.25),
        R * 0.2,
        sunX,
        sunY,
        coronaRadius
      );
      coronaGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      coronaGrad.addColorStop(0.12, 'rgba(209, 225, 255, 0.35)');
      coronaGrad.addColorStop(0.28, 'rgba(138, 180, 248, 0.22)');
      coronaGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
      coronaGrad.addColorStop(0.75, 'rgba(30, 27, 75, 0.02)');
      coronaGrad.addColorStop(1.0, 'rgba(8, 9, 12, 0)');

      ctx.save();
      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, coronaRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. Directional Radiant Beam
      const beamX = cx + dirX * (R * 1.12);
      const beamY = cy + dirY * (R * 1.12);
      const beamGrad = ctx.createRadialGradient(beamX, beamY, 0, beamX, beamY, R * 0.85);
      beamGrad.addColorStop(0, 'rgba(209, 225, 255, 0.32)');
      beamGrad.addColorStop(0.35, 'rgba(138, 180, 248, 0.15)');
      beamGrad.addColorStop(1, 'rgba(8, 9, 12, 0)');

      ctx.save();
      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      ctx.arc(beamX, beamY, R * 0.85, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 5. Chromatic Diffraction Outer Layer (Magenta/Pink Prismatic Fringe)
      // Exactly matching the optical dispersion kiss in the user reference photo!
      ctx.save();
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR + 4, 0, Math.PI * 2);
      const fringeGrad = ctx.createRadialGradient(
        sunX + dirX * (R * 0.75),
        sunY + dirY * (R * 0.75),
        R * 0.1,
        sunX,
        sunY,
        sunR + 4
      );
      fringeGrad.addColorStop(0, 'rgba(244, 114, 182, 0.6)');
      fringeGrad.addColorStop(0.5, 'rgba(236, 72, 153, 0.35)');
      fringeGrad.addColorStop(0.85, 'rgba(168, 85, 247, 0.15)');
      fringeGrad.addColorStop(1.0, 'rgba(8, 9, 12, 0)');
      ctx.fillStyle = fringeGrad;
      ctx.shadowColor = '#f472b6';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.restore();

      // 6. Brilliant Photonic Sun Disc (Luminous solar core)
      ctx.save();
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      const sunGrad = ctx.createRadialGradient(
        sunX + dirX * (R * 0.72),
        sunY + dirY * (R * 0.72),
        0,
        sunX,
        sunY,
        sunR
      );
      sunGrad.addColorStop(0, '#FFFFFF');
      sunGrad.addColorStop(0.3, 'rgba(240, 248, 255, 0.98)');
      sunGrad.addColorStop(0.65, 'rgba(138, 180, 248, 0.88)');
      sunGrad.addColorStop(0.9, 'rgba(99, 102, 241, 0.55)');
      sunGrad.addColorStop(1.0, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = sunGrad;
      ctx.shadowColor = '#8AB4F8';
      ctx.shadowBlur = 28;
      ctx.fill();
      ctx.restore();

      // 7. Celestial Moon Disc (Pitch Black #08090C Occlusion)
      // Natural circular occlusion: creates perfectly smooth, needle-tapered crescent tips!
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = '#08090C';
      ctx.fill();
      ctx.restore();

      // 8. Full 360° Planetary Hairline Rim
      // Subtle warm bronze/amber on dark side, transitioning to silver/white on illuminated side
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);

      const rimGrad = ctx.createLinearGradient(
        cx - dirX * R,
        cy - dirY * R,
        cx + dirX * R,
        cy + dirY * R
      );
      rimGrad.addColorStop(0, 'rgba(217, 178, 137, 0.32)'); // delicate bronze/amber rim on dark side
      rimGrad.addColorStop(0.5, 'rgba(160, 185, 220, 0.28)');
      rimGrad.addColorStop(0.8, 'rgba(209, 225, 255, 0.75)');
      rimGrad.addColorStop(1.0, 'rgba(255, 255, 255, 0.98)');

      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = 1.0;
      ctx.stroke();
      ctx.restore();

      // 9. Specular Diamond Flare Peak Highlight
      const peakX = cx + dirX * R;
      const peakY = cy + dirY * R;
      const peakGrad = ctx.createRadialGradient(peakX, peakY, 0, peakX, peakY, R * 0.34);
      peakGrad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      peakGrad.addColorStop(0.18, 'rgba(220, 238, 255, 0.9)');
      peakGrad.addColorStop(0.48, 'rgba(138, 180, 248, 0.45)');
      peakGrad.addColorStop(0.75, 'rgba(244, 114, 182, 0.15)');
      peakGrad.addColorStop(1.0, 'rgba(8, 9, 12, 0)');

      ctx.save();
      ctx.fillStyle = peakGrad;
      ctx.beginPath();
      ctx.arc(peakX, peakY, R * 0.34, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};
