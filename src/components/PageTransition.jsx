import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
    const containerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create GSAP timeline for page enter animation
        const tl = gsap.timeline();

        // Set initial state
        gsap.set(container, {
            opacity: 0,
            y: 20,
        });

        // Animate in
        tl.to(container, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
        });

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, [location.pathname]); // Re-run animation on route change

    return (
        <div ref={containerRef} className="page-transition-wrapper">
            {children}
        </div>
    );
};

export default PageTransition;
