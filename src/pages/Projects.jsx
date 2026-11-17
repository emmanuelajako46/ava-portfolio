import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Charmant",
    type: "Landing page",
    image: "/project-imgs/project-1.avif",
    href: "#",
  },
  {
    title: "Vistique",
    type: "Spa Wellness",
    image: "/project-imgs/project-2.avif",
    href: "#",
  },
  {
    title: "Wedora",
    type: "Landing Page",
    image: "/project-imgs/project-3.avif",
    href: "#",
  },
  {
    title: "Vervedent",
    type: "E-commerce",
    image: "/project-imgs/project-4.avif",
    href: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-20 mt-10 max-w-4xl mx-auto text-center">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl  font-semibold text-foreground">
          Featured projects
        </h2>
        <p className="text-base text-foreground/50 mt-2">
          View some of my best works
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.href}
            className="group relative block overflow-hidden rounded-3xl bg-muted min-h-[340px] md:min-h-[420px] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />

            {/* Bottom pill */}
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
