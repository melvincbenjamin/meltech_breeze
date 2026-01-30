import { useMemo, useState } from "react";

const CATEGORIES = {
  ALL: "All",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  TOOLS: "Tools",
};

const skills = [
  // Frontend
  { id: 1, name: "HTML5 / CSS3", level: 4, category: CATEGORIES.FRONTEND },
  { id: 2, name: "JavaScript (ES6+)", level: 3, category: CATEGORIES.FRONTEND },
  { id: 3, name: "TypeScript", level: 3, category: CATEGORIES.FRONTEND },
  { id: 4, name: "React.js", level: 4, category: CATEGORIES.FRONTEND },
  { id: 5, name: "Next.js", level: 3, category: CATEGORIES.FRONTEND },
  { id: 6, name: "Tailwind CSS", level: 3, category: CATEGORIES.FRONTEND },

  // Backend
  { id: 7, name: "Python", level: 4, category: CATEGORIES.BACKEND },
  { id: 8, name: "Django", level: 3, category: CATEGORIES.BACKEND },
  { id: 9, name: "Django REST Framework", level: 3, category: CATEGORIES.BACKEND },
  { id: 10, name: "REST APIs", level: 3, category: CATEGORIES.BACKEND },
  { id: 11, name: "JWT Authentication", level: 3, category: CATEGORIES.BACKEND },

  // Tools
  { id: 12, name: "Git", level: 4, category: CATEGORIES.TOOLS },
  { id: 13, name: "GitHub", level: 4, category: CATEGORIES.TOOLS },
  { id: 14, name: "Supabase", level: 3, category: CATEGORIES.TOOLS },
  { id: 15, name: "Firebase (Hosting)", level: 4, category: CATEGORIES.TOOLS },
];

const LEVEL_MAP = {
  1: 25,
  2: 50,
  3: 75,
  4: 90,
};

const filters = Object.values(CATEGORIES);

export const SkillSection = () => {
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);

  const filteredSkills = useMemo(() => {
    if (activeFilter === CATEGORIES.ALL) return skills;
    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-5 py-2 rounded-full border transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-primary text-white border-primary shadow-md"
                    : "border-primary text-primary hover:bg-primary/10"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-center font-semibold text-lg mb-4">
                {skill.name}
              </p>

              <div
                className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                role="progressbar"
                aria-valuenow={LEVEL_MAP[skill.level]}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700"
                  style={{ width: `${LEVEL_MAP[skill.level]}%` }}
                />
              </div>

              <p className="text-right mt-2 text-sm text-muted-foreground">
                {skill.level === 4
                  ? "Advanced"
                  : skill.level === 3
                  ? "Intermediate"
                  : "Basic"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
