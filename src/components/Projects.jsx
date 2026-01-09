import { ExternalLink, Github } from "lucide-react";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image4 from "../assets/images/image4.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";

const projects = [
  {
    id: 1,
    title: "Property Management",
    description:
      "A property management platform focused on improving tenant experience and landlord profitability.",
    image: image1,
    tags: ["React", "TailwindCSS", "Django"],
    demoUrl: "https://city-wide-q6gz.onrender.com/",
    githubUrl: "https://city-wide-q6gz.onrender.com/",
  },
  {
    id: 2,
    title: "The Best Apartment",
    description:
      "Looking for the best apartment for rent, this website is for you.",
    image: image2,
    tags: ["React", "Bootstrap", "Django"],
    demoUrl: "https://homly-frontend-eight.vercel.app/",
    githubUrl: "https://github.com/Fahyvor/frontend-homly/",
  },
  {
    id: 3,
    title: "Design, Print, Deliver",
    description:
      "Helping businesses and individuals stand out with compelling design and print solutions on time, every time.",
    image: image4,
    tags: ["React.js", "TailwindCSS", "Django"],
    demoUrl: "https://speedupcreative.onrender.com/",
    githubUrl: "https://speedupcreative.onrender.com/",
  },
  {
    id: 4,
    title: "Dennis Tennis Academy Platform",
    description:
      "A modern web platform for Dennis Tennis Academy in Dubai, showcasing courses, schedules, and training programs for both Padel and Tennis students. Built for responsive performance and seamless user experience.",
    image: image7,
    tags: ["React.js", "BootstrapCSS", "Firebase"],
    demoUrl: "https://www.denisstennis.com/",
    githubUrl: "https://github.com/melvincbenjamin/Coach_Daniel-New",
  },
  {
    id: 5,
    title: "Adeleke Tennis Academy Web Portal",
    description:
      "A comprehensive web portal for Adeleke Tennis Academy, USA, providing students and parents with easy access to schedules, training programs, and academy information. Developed with performance, responsiveness, and usability in mind.",
    image: image8,
    tags: ["React.js", "BootstrapCSS", "Supabase", "Firebase"],
    demoUrl: "https://www.adeleketennisacademy.com/",
    githubUrl: "https://github.com/melvincbenjamin/Coach-Julius",
  },
  {
    id: 6,
    title: "MelTech Personal Portfolio",
    description:
      "Personal portfolio website showcasing my full-stack development projects, technical skills, and cybersecurity expertise. Designed with clean architecture, responsive UI, and interactive elements to highlight my professional experience and technical capabilities. ",
    image: image9,
    tags: ["React.js", "BootstrapCSS", "Supabase", "Firebase"],
    demoUrl: "https://melvincbenjamin-portfolio.web.app/",
    githubUrl: "https://github.com/melvincbenjamin/new-melvin-portfolio",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
          Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects demonstrating problem-solving, clean architecture,
          and attention to user experience.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tags */}
                <div className="flex flex-wrap gap-2 p-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>


                {/* Action Icons */}
                <div className="flex items-center gap-4 pt-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <ExternalLink size={24} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="p-6">
            <a href="https://github.com/" className="cosmic-button">
                Check my Github
              </a>
          </div>
      </div>
    </section>
  );
};
