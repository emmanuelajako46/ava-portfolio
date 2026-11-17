import { useState, useRef, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const reviews = [
  {
    text:
      "Working with Ava was a game-changer for our brand. Her designs are not only visually stunning but also incredibly functional.",
    name: "Jane Foster",
    role: "CEO at TaleNest",
    avatar: "/avatar-1.jpg",
  },
  {
    text:
      "Ava delivered beyond expectations. The website is fast, modern, and perfectly aligned with our business goals.",
    name: "Daniella Grant",
    role: "Founder at NovaLabs",
    avatar: "/avatar-2.jpg",
  },
  {
    text:
      "Exceptional attention to detail and communication. The entire process felt smooth and professional.",
    name: "Sarah Williams",
    role: "Product Manager at BrightCo",
    avatar: "/avatar-3.jpg",
  },
  {
    text:
      "One of the best developers we’ve worked with. Clean code, great UX decisions, and reliable delivery.",
    name: "Daniel Moore",
    role: "CTO at Cloudify",
    avatar: "/avatar-4.jpg",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll entrance for the entire section
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 28,
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

  // Slight fade-in for carousel card on review change
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "sine.inOut" }
      );
    }
  }, [current]);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const review = reviews[current];

  return (
    <section ref={sectionRef} className="px-6 py-20 max-w-4xl mx-auto text-center">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-10 text-foreground">My Reviews</h2>

      {/* Review Card */}
      <div ref={cardRef} className="relative bg-card rounded-3xl
       px-6 py-10 
       border border-foreground/10">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Text */}
       <p className="text-base md:text-2xl text-foreground leading-relaxed mb-8">
  “{review.text}”
</p>


        {/* Author */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-15 h-15 rounded-full object-cover"
          />
          <p className="text-sm text-foreground/50">
            <span className="font-medium">{review.name}</span>, {review.role}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prevReview}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${index === current ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
