import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function  Stats() {
   const stats = [
    { number: '80+', label: 'Project completed', color: '#EF4444' },
    { number: '12+', label: 'Years experiences', color: '#3B82F6' },
    { number: '99+', label: 'Happy clients', color: '#37e30cff' }
  ];

    const statsRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const stats = [
      { value: 80, suffix: '+' },
      { value: 12, suffix: '+' },
      { value: 99, suffix: '+' }
    ];

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const stat = stats[index];
      const obj = { val: 0 };

      gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: stat.value,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: function () {
            counter.textContent = Math.ceil(obj.val) + stat.suffix;
          }
        }
      );
    });

    // Animate cards entrance
    gsap.fromTo(
      '.stat-card',
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);
  
  return (
 <div className="px-6 py-20 max-w-4xl mx-auto">

      <div ref={statsRef} className="flex flex-wrap gap-8 justify-center max-w-5xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card bg-card
            border border-foreground/10
            rounded-3xl  p-8 w-64 text-center transform hover:scale-105 transition-transform"
          >
            <div
              ref={(el) => (countersRef.current[index] = el)}
              className="text-6xl font-bold mb-3"
              style={{ color: stat.color }}
            >
              {stat.number}
            </div>
            <div className="text-foreground/50 text-base font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




 