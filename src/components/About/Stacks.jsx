import { useMemo, useState } from "react";

export default function StackTabs() {
  const stacks = useMemo(() => {
    const rawStacks = [
      {
        id: "figma",
        name: "Figma",
        description: "Designing clean interfaces and collaborating in real time.",
        image: "/stacks/figma.jpeg",
      },
      {
        id: "react",
        name: "React.js",
        description: "Building fast, interactive, and scalable web interfaces.",
        image: "/stacks/react.png",
      },
      {
        id: "notion",
        name: "Notion",
        description: "Organizing ideas, workflows, and documentation.",
        image: "/stacks/notion.jpeg",
      },
      {
        id: "slack",
        name: "Slack",
        description: "Keeping communication simple and fast.",
        image: "/stacks/slack.jpeg",
      },
      {
      id: "vercel",
      name: "Vercel",
      description: "Deploying websites instantly with zero configuration.",
      image: "/stacks/vercel.png", 
    },
      {
        id: "wise",
        name: "Wise",
        description: "Receiving international payments securely.",
        image: "/stacks/wise.png",
      }

    ];

    // 🔒 Remove undefined + duplicate IDs
    return Array.from(
      new Map(
        rawStacks
          .filter(stack => stack?.id)
          .map(stack => [stack.id, stack])
      ).values()
    );
  }, []);

  const [active, setActive] = useState(stacks[0]);

  if (!active) return null;

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">My stacks</h2>

        <div className="bg-card rounded-2xl p-6 border border-foreground/10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-6">
            {stacks.map(stack => {
              const isActive = active.id === stack.id;

              return (
                <button
                  key={stack.id}
                  onClick={() => setActive(stack)}
                  className={`w-14 h-14 cursor-pointer rounded-xl flex items-center justify-center transition
                    ${
                      isActive
                        ? "bg-background shadow-sm"
                        : "bg-foreground/5 hover:bg-foreground/10"
                    }`}
                >
                  <img
                    src={stack.image}
                    alt={stack.name}
                    className={`w-10 h-10 rounded-lg transition
                      ${
                        isActive
                          ? "grayscale-0 opacity-100"
                          : "grayscale opacity-60"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-background rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <p className="text-xs uppercase tracking-wide text-foreground/50">
                {active.name}
              </p>
              <span className="flex-1 h-px bg-foreground/10" />
            </div>

            <p className="text-foreground/60 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
