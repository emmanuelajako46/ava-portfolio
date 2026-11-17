import React from "react";
import {Send} from 'lucide-react';

export default function Contact() {
  return (
    <section className="px-4 py-20 mx-auto max-w-4xl mt-10 flex flex-col items-center justify-center px-6 py-20">
      
      {/* Header */}
      <div className="text-center max-w-xl mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
          Let's work Together!
        </h1>
        <p className="text-foreground/50 leading-relaxed">
          I’m always excited to bring ideas to life. Whether you have a project in mind,
           need a website revamp, or just want to say hi, feel free to reach out.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-card rounded-2xl shadow-sm  p-6 md:p-8">
        <form className="space-y-5">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 rounded-full bg-background px-5 text-sm
                       placeholder-foreground/50 focus:outline-none text-foreground
                       focus:ring-2 focus:ring-foreground/10"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 rounded-full bg-background px-5 text-sm
                       placeholder-foreground/50 focus:outline-none text-foreground
                       focus:ring-2 focus:ring-foreground/10"
          />

          {/* Message */}
          <textarea
            placeholder="Write a Message"
            rows={6}
            className="w-full rounded-2xl bg-background px-5 py-4 text-sm
                       placeholder-foreground/50 resize-none text-foreground
                       focus:outline-none focus:ring-2
                       focus:ring-foreground/10"
          />

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="flex items-center gap-3 bg-foreground text-background cursor-pointer
                         rounded-full px-8 py-3 text-sm font-semibold
                         hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>

    </section>
  );
}
