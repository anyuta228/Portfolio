import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface VoidCanvas3DProps {
  className?: string;
}

export const VoidCanvas3D: React.FC<VoidCanvas3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      34,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10.2);

    // 2. High performance WebGLRenderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // 3. Studio Environment for crisp optical facets & reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTexture;

    // 4. Multi-spectral Studio Lighting (Produces brilliant rainbow iridescence on bevels)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Key bright studio light
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.6);
    keyLight.position.set(6, 9, 6);
    scene.add(keyLight);

    // Spectral chromatic rim lights (Cyan, Magenta, Violet, Warm Gold)
    const cyanLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    cyanLight.position.set(6, 6, 4);
    scene.add(cyanLight);

    const magentaLight = new THREE.DirectionalLight(0xf43f5e, 2.6);
    magentaLight.position.set(-7, 6, -3);
    scene.add(magentaLight);

    const violetLight = new THREE.DirectionalLight(0xa855f7, 2.8);
    violetLight.position.set(1, 8, -4);
    scene.add(violetLight);

    const amberLight = new THREE.DirectionalLight(0xfbbf24, 2.0);
    amberLight.position.set(-3, -5, 5);
    scene.add(amberLight);

    // 5. Master Group containing the composition
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Responsive Positioning
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        masterGroup.position.set(2.05, 0.05, 0);
        masterGroup.scale.set(0.76, 0.76, 0.76);
      } else if (width >= 1024) {
        masterGroup.position.set(1.8, 0.0, 0);
        masterGroup.scale.set(0.68, 0.68, 0.68);
      } else if (width >= 768) {
        masterGroup.position.set(1.15, -0.3, -0.2);
        masterGroup.scale.set(0.6, 0.6, 0.6);
      } else {
        masterGroup.position.set(0.3, -0.7, -0.6);
        masterGroup.scale.set(0.5, 0.5, 0.5);
      }
    };
    updateLayout();

    // 6. High-refraction Optical Crystal Glass Material (Matching References 1, 2, 3)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      transparent: true,
      opacity: 0.42,
      roughness: 0.02,
      metalness: 0.0,
      ior: 1.52,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      reflectivity: 0.98,
      iridescence: 1.0,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [140, 600], // Full rainbow spectrum on bevels
      attenuationColor: new THREE.Color('#f0f5ff'),
      attenuationDistance: 4.5,
    });

    // 7. Beveled Glass Cube (From Reference 1 & 3)
    const cubeGroup = new THREE.Group();
    cubeGroup.position.set(-0.7, 0.15, 0);
    masterGroup.add(cubeGroup);

    const cubeGeometry = new RoundedBoxGeometry(2.3, 2.3, 2.3, 6, 0.14);
    const cubeMesh = new THREE.Mesh(cubeGeometry, glassMaterial);
    cubeGroup.add(cubeMesh);

    // Crisp isometric tilt showing top, front-left, and front-right facets
    cubeGroup.rotation.set(0.44, 0.76, -0.1);

    // 8. Dark Cosmic Obsidian Nebula Core Sphere (From Reference 1 & 3)
    const coreGeometry = new THREE.SphereGeometry(0.52, 48, 48);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#080214'), // deep obsidian purple-black
      emissive: new THREE.Color('#4c1d95'), // electric cosmic violet luminescence
      emissiveIntensity: 0.7,
      roughness: 0.28,
      metalness: 0.08,
      clearcoat: 0.9,
      clearcoatRoughness: 0.04,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    cubeMesh.add(coreMesh);

    // Ethereal purple/magenta nebula halo aura
    const haloGeometry = new THREE.SphereGeometry(0.68, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#a855f7'),
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    cubeMesh.add(haloMesh);

    // 9. Micro-Star Particles inside the nebula
    const particleCount = 180;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 0.1 + Math.random() * 0.56;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.038,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    cubeMesh.add(particles);

    // 10. Companion Faceted Glass Pyramid (From Reference 2 & 3)
    const pyramidGeo = new THREE.ConeGeometry(0.95, 2.0, 4); // 4-sided sharp crystal pyramid
    const pyramidMesh = new THREE.Mesh(pyramidGeo, glassMaterial);
    pyramidMesh.position.set(1.4, -0.3, -0.1);
    pyramidMesh.rotation.set(0.25, 0.42, -0.1);
    masterGroup.add(pyramidMesh);

    // 11. Floating Glass Droplets / Spheres
    const sphereGeo1 = new THREE.SphereGeometry(0.36, 32, 32);
    const bubble1 = new THREE.Mesh(sphereGeo1, glassMaterial);
    bubble1.position.set(-1.8, 1.35, 0.5);
    masterGroup.add(bubble1);

    const sphereGeo2 = new THREE.SphereGeometry(0.22, 28, 28);
    const bubble2 = new THREE.Mesh(sphereGeo2, glassMaterial);
    bubble2.position.set(0.35, 1.75, -0.2);
    masterGroup.add(bubble2);

    const sphereGeo3 = new THREE.SphereGeometry(0.15, 24, 24);
    const bubble3 = new THREE.Mesh(sphereGeo3, glassMaterial);
    bubble3.position.set(1.85, 1.05, 0.35);
    masterGroup.add(bubble3);

    // 12. Soft Iridescent Caustic Floor Disc
    const createCausticTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        grad.addColorStop(0, 'rgba(168, 85, 247, 0.22)');
        grad.addColorStop(0.35, 'rgba(56, 189, 248, 0.14)');
        grad.addColorStop(0.7, 'rgba(236, 72, 153, 0.07)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const causticGeo = new THREE.PlaneGeometry(4.2, 4.2);
    const causticMat = new THREE.MeshBasicMaterial({
      map: createCausticTexture(),
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const causticMesh = new THREE.Mesh(causticGeo, causticMat);
    causticMesh.rotation.x = -Math.PI / 2;
    causticMesh.position.set(-0.7, -1.35, 0);
    masterGroup.add(causticMesh);

    // 13. Smooth Mouse Parallax Lerping
    let mouseX = 0;
    let mouseY = 0;
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetParallaxX = mouseX * 0.22;
      targetParallaxY = -mouseY * 0.16;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateLayout();
    };
    window.addEventListener('resize', handleResize);

    // 14. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Meditative slow float & rotation
      cubeGroup.rotation.y += 0.0014;
      cubeGroup.rotation.x = 0.44 + Math.sin(time * 0.45) * 0.035;
      cubeGroup.position.y = 0.15 + Math.sin(time * 0.7) * 0.06;

      coreMesh.rotation.y -= 0.0012;
      haloMesh.rotation.y += 0.0015;
      particles.rotation.y += 0.0018;

      pyramidMesh.rotation.y += 0.002;
      pyramidMesh.position.y = -0.3 + Math.sin(time * 0.8 + 1.2) * 0.05;

      bubble1.position.y = 1.35 + Math.sin(time * 0.75) * 0.08;
      bubble2.position.y = 1.75 + Math.cos(time * 0.9 + 0.5) * 0.07;
      bubble3.position.y = 1.05 + Math.sin(time * 1.1 + 2.0) * 0.06;

      // Mouse Parallax smooth lerp
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.04;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.04;

      masterGroup.rotation.y = currentParallaxX;
      masterGroup.rotation.x = currentParallaxY;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      pmremGenerator.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};
