import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="px-4 py-20 max-w-4xl mx-auto mt-15">
      {/* Greeting */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <span className="text-3xl">👋</span> Hi, I'm Ava Haust
        </h1>
      </div>

      {/* Bio Content */}
      <div className="bg-card rounded-3xl p-8  border border-foreground/10">
        <div className="space-y-8">
          {/* Who Am I */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xs uppercase tracking-wider text-foreground/50 whitespace-nowrap">
                WHO AM I
              </h2>
              <div className="flex-1 h-px bg-foreground/10"></div>
            </div>
            <p className="text-foreground leading-relaxed text-base">
              I'm Ava Haust, a passionate web designer and web developer based in London, England. 
              With a deep love for crafting intuitive, visually engaging, and functional websites, I've 
              helped businesses and individuals create online experiences that resonate
            </p>
          </div>

          {/* What I Do */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xs uppercase tracking-wider text-foreground/50 whitespace-nowrap">
                WHAT I DO
              </h2>
              <div className="flex-1 h-px bg-foreground/10"></div>
            </div>
            <p className="text-foreground leading-relaxed text-base">
              I specialize in creating sleek, responsive, and user-centric websites that leave a lasting 
              impression. Whether it's a portfolio, a landing page, or an e-commerce platform, I ensure 
              every design reflects the brand's identity and goals
            </p>
          </div>

          {/* Services I Provided */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xs uppercase tracking-wider text-foreground/50 whitespace-nowrap">
                SERVICES I PROVIDE
              </h2>
              <div className="flex-1 h-px bg-foreground/10"></div>
            </div>
            <p className="text-foreground leading-relaxed text-base">
              I offer seamless web design and development services, bringing your static designs to life 
              with interactive and responsive elements using code. Whether you need a sleek website, 
              a high-converting landing page, or a fully functional multipage site, I ensure every project is 
              crafted with precision, creativity, and a focus on user experience.
            </p>
          </div>
        </div>

        {/* CTA Buttons - Fixed */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            to="/contact"
            className="
              group flex items-center justify-center gap-3
              px-6 py-4
              bg-foreground text-background
              rounded-full font-semibold text-lg
              hover:scale-[1.02] transition-transform duration-300
              shadow-md hover:shadow-lg
              w-full sm:w-auto flex-1
            "
          >
            Book a call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>

          <a
            href="mailto:hello@example.com"
            className="
              flex items-center justify-center
              px-6 py-4
              bg-foreground/5 text-foreground
              rounded-full font-semibold text-lg
              hover:scale-[1.02] transition-transform duration-300
              border border-foreground/10 hover:border-foreground/20
              w-full sm:w-auto flex-1
            "
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}