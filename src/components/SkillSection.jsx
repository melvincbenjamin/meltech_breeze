import { useState } from "react";

const skills = [
  // Frontend
  { id: 1, name: "HTML5 / CSS3", level: 95, category: "Frontend" },
  { id: 2, name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { id: 3, name: "TypeScript", level: 80, category: "Frontend" },
  { id: 4, name: "React.js", level: 95, category: "Frontend" },
  { id: 5, name: "Tailwind CSS", level: 90, category: "Frontend" },
  { id: 6, name: "Bootstrap", level: 90, category: "Frontend" },

  // Backend
  { id: 7, name: "Python", level: 90, category: "Backend" },
  { id: 8, name: "Django", level: 90, category: "Backend" },
  { id: 9, name: "Django REST Framework", level: 85, category: "Backend" },
  { id: 10, name: "RESTful APIs", level: 85, category: "Backend" },
  { id: 11, name: "JWT Authentication", level: 80, category: "Backend" },
  { id: 12, name: "Firebase (Auth & DB)", level: 95, category: "Backend" },

  // Tools
  { id: 13, name: "Git", level: 90, category: "Tools" },
  { id: 14, name: "GitHub", level: 90, category: "Tools" },
  { id: 15, name: "Supabase", level: 80, category: "Tools" },
  { id: 16, name: "Agile / Scrum", level: 80, category: "Tools" },
  { id: 17, name: "Performance Optimization", level: 85, category: "Tools" },
  { id: 18, name: "Firebase (Hosting)", level: 95, category: "Tools" },
];

const filters = ["All", "Frontend", "Backend", "Tools"];

export const SkillSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md
                         transition-all duration-300 ease-in-out"
            >
              {/* Skill Name */}
              <p className="text-center font-semibold text-lg mb-4">
                {skill.name}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-end mt-2">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
