import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { NavLink } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const projects = [
  {
    title: "Charmant",
    type: "Landing page",
    image: "/project-imgs/project-1.avif",
    href: "#",
  },
  {
    title: "Vistique ",
    type: "Spa Wellness",
    image: "/project-imgs/project-2.avif",
    href: "#",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 28,
      opacity: 0,
      duration: 1.1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // when section hits 80% of viewport
        once: true,       // animate only once
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold text-foreground">
          Featured projects
        </h2>

        <NavLink to="/projects" className="h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground/5 transition">
          <ArrowUpRight className="w-5 h-5" />
        </NavLink>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.href}
            className="group relative block overflow-hidden rounded-3xl bg-muted min-h-[340px] md:min-h-[420px] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />

            <div
              className="
                absolute bottom-5 left-5 right-5
                transition-all duration-300 ease-out
                md:opacity-0 md:translate-y-4
                md:group-hover:opacity-100 md:group-hover:translate-y-0
              "
            >
              <div className="flex items-center justify-between gap-4 rounded-full bg-background px-5 py-3 shadow-lg backdrop-blur">
                <span className="text-sm font-medium text-foreground">
                  {project.title}
                  <span className="font-normal text-foreground">
                    {" "}
                    · {project.type}
                  </span>
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
