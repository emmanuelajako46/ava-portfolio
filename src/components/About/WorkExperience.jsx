import React from "react";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-6">
          Work Experiences
        </h2>

        {/* Card */}
        <div className="bg-card rounded-2xl border border-foreground/10 divide-y divide-foreground/10"> 
          
          {/* Item */}
          <ExperienceItem
            date="Feb 2022 - Present"
            title="Web Developer"
            company="Self-Employed"
            description="Crafting custom websites and providing Figma-to-Code solutions for clients across various industries"
          />

          <ExperienceItem
            date="Mar 2021 - Jan 2022"
            title="UI/UX Designer"
            company="Nova Labs"
            description="Designed user interfaces and prototypes for web and mobile applications, collaborating closely with developers to bring concepts to life"
          />

          <ExperienceItem
            date="May 2020 - Jan 2021"
            title="Web Designer"
            company="TaleNest"
            description="Created responsive and innovative website designs for small and medium-sized businesses, focusing on branding, functionality, and client satisfaction"
          />

        </div>
      </div>
    </section>
  );
}

/* ---------- Item ---------- */
function ExperienceItem({ date, title, company, description }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 py-6">
      
      {/* Date */}
      <div className="md:w-1/4 text-sm text-foreground/50">
        {date}
      </div>

      {/* Content */}
      <div className="md:w-3/4">
        <h3 className="font-medium text-foreground">
          {title}
          <span className="text-foreground/50 font-normal"> · {company}</span>
        </h3>

        <p className="mt-2 text-foreground/50 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
