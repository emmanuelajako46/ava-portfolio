import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { theme } = useTheme();
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="pt-30 px-5 min-h-screen flex items-center justify-center">
      {/* Card */}
      <div
        ref={cardRef}
        className="
          max-w-4xl w-full
          rounded-3xl border border-foreground/10
          bg-card
          p-6 md:p-8
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5
                ${
                  theme === "dark"
                    ? "bg-[#102D06] text-[#F0FDE8]"
                    : "bg-[#F0FDE8] text-green-600"
                }
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full animate-pulse
                  ${
                    theme === "dark"
                      ? "bg-[#F0FDE8]"
                      : "bg-green-600"
                  }
                `}
              />
              <span className="text-sm font-medium">
                Available Now For Projects
              </span>
            </div>

            <h1 className="text-3xl font-semibold mb-3 text-foreground">
              Hi, I'm Ava Haust
            </h1>

            <p className="text-base text-foreground/50 mb-6 leading-relaxed">
              I am a web designer and developer from London, creating functional
              and engaging websites from concept to code.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="
                  group inline-flex items-center gap-2
                  px-5 py-2.5
                  bg-foreground text-background
                  rounded-full font-semibold
                  hover:scale-105 transition-transform
                "
              >
                Book a call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex items-center gap-2
                  px-5 py-2.5
                  bg-foreground/5 text-foreground
                  rounded-full font-semibold
                  hover:bg-foreground/10 transition-colors
                "
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Ava.jpg"
              alt="Ava Haust"
              className="w-60 md:w-72 lg:w-80 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
