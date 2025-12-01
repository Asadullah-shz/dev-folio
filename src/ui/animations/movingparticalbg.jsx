import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 40;
const DEFAULT_GLOW_COLOR = '200, 200, 200';
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color) => {
    const el = document.createElement('div');
    el.className = 'bg-particle';
    el.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 8px rgba(${color}, 0.8);
    pointer-events: none;
    z-index: 0;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const MovingParticleBackground = ({
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
}) => {
    const containerRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const isMobile = useMobileDetection();

    const disableAnimations = isMobile;

    const initializeAndAnimateParticles = useCallback(() => {
        if (disableAnimations || !containerRef.current) return;

        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();

        if (width === 0 || height === 0) return;

        const spawnAndAnimateParticle = () => {
            const startX = Math.random() * width;
            const startY = Math.random() * height;

            const particle = createParticleElement(startX, startY, glowColor);
            container.appendChild(particle);
            particlesRef.current.push(particle);

            gsap.fromTo(particle, { scale: 0, opacity: 0 }, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            });

            gsap.to(particle, {
                x: (Math.random() - 0.5) * width * 0.5,
                y: (Math.random() - 0.5) * height * 0.5,
                duration: 6 + Math.random() * 4,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });

            gsap.to(particle, {
                opacity: 0.3 + Math.random() * 0.5,
                duration: 3 + Math.random() * 2,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });
        };

        for (let i = 0; i < particleCount; i++) {
            const timeoutId = setTimeout(() => {
                spawnAndAnimateParticle();
            }, i * (1000 / particleCount));
            timeoutsRef.current.push(timeoutId);
        }
    }, [disableAnimations, particleCount, glowColor]);

    const cleanupParticles = useCallback(() => {
        gsap.killTweensOf(particlesRef.current);
        timeoutsRef.current.forEach(clearTimeout);
        particlesRef.current.forEach(particle => {
            particle.parentNode?.removeChild(particle);
        });
        particlesRef.current = [];
        timeoutsRef.current = [];
    }, []);

    useEffect(() => {
        if (disableAnimations) {
            cleanupParticles();
            return;
        }

        initializeAndAnimateParticles();

        return cleanupParticles;
    }, [initializeAndAnimateParticles, cleanupParticles, disableAnimations]);

    return (
        <div
            ref={containerRef}
            className="MovingParticleBackground"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#0f0f10ff',
                pointerEvents: 'none',
                zIndex: -10,
                overflow: 'hidden',
            }}
        >
            {disableAnimations && (
                <p style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '12px'
                }}>
                    Animations disabled for small screens.
                </p>
            )}
        </div>
    );
};

export default MovingParticleBackground;