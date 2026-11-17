import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites take between 1–4 weeks depending on complexity, content readiness, and feedback turnaround.",
  },
  {
    question: "Do you provide custom web development?",
    answer:
      "Yes! I create fully custom websites tailored to your needs using modern frameworks.",
  },
  {
    question: "Can you optimize my website for SEO?",
    answer:
      "Absolutely! I ensure your website is fast, accessible, and optimized for search engines.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. All websites I build are fully responsive and tested across multiple devices and browsers.",
  },
  {
    question: "Do you offer support after the website is live?",
    answer:
      "Yes, I provide post-launch support and guidance to ensure your website runs smoothly.",
  },
  {
    question: "Can you integrate third-party tools?",
    answer:
      "Definitely. I can integrate CRMs, payment gateways, analytics, and other tools seamlessly.",
  },
];

export default function FAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Scroll entrance animation
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

  return (
    <section ref={sectionRef} className="px-6 py-20 max-w-4xl mx-auto text-center">
      {/* Header */}
      <h2 className="text-2xl text-foreground font-semibold mb-2">FAQs?</h2>
      <p className="text-foreground/50 mb-12">
        Everything you need to know about my services, process, and what to expect.
      </p>

      {/* Card */}
      <div className="bg-card rounded-3xl 
      border border-foreground/10
       p-6 space-y-4 text-left">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggle(index)}
               className={`rounded-xl transition cursor-pointer ${
                isOpen ? "bg-gray-100" : "bg-gray-50",
                theme === "dark" ? "bg-[#1D1D1B]" : "bg-gray-100"
              }`}
            >
               
            
              <div className="w-full flex items-center justify-between px-5 py-4">
                <span className="font-medium text-foreground">{faq.question}</span>

                <Plus
                  className={`w-5 h-5 text-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>

              {isOpen && (
                <div className="px-5 pb-4 text-foreground/50 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
