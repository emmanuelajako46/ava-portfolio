import { Code2, LayoutDashboard, Rocket, Settings } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "High-performance websites built with clean, scalable code using modern frameworks and best practices.",
  },
  {
    icon: LayoutDashboard,
    title: "Landing Pages & Funnels",
    description:
      "Conversion-focused landing pages and funnels designed to capture leads and drive measurable results.",
  },
  {
    icon: Rocket,
    title: "Performance & SEO Optimization",
    description:
      "Speed, SEO, and accessibility optimization to improve rankings, user experience, and PageSpeed scores.",
  },
  {
    icon: Settings,
    title: "Integrations & Automation",
    description:
      "CRM, analytics, payment gateways, and automation tools integrated seamlessly into your website.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl  font-semibold text-foreground">
          Services I provide
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="p-6 bg-card border border-foreground/10
               rounded-3xl  transition"
            >
              <Icon className="w-8 h-8 text-backround  mb-10" />


              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-foreground/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

