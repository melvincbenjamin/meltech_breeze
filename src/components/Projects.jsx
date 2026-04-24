import { ExternalLink, Github } from "lucide-react";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image4 from "../assets/images/image4.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image10 from "../assets/images/image10.png";

const projects = [
  {
    id: 1,
    title: "Property Management Platform",
    description:
      "Full-stack property management system built with React and Django REST API featuring authentication, secure data handling and scalable backend architecture.",
    image: image1,
    tags: ["React", "TailwindCSS", "Django", "REST API"],
    demoUrl: "https://city-wide-q6gz.onrender.com/",
    githubUrl: "https://city-wide-q6gz.onrender.com/",
  },
  {
    id: 2,
    title: "Homly Apartment Finder",
    description:
      "Apartment rental platform with secure API integration and optimized frontend performance.",
    image: image2,
    tags: ["React", "Bootstrap", "Django"],
    demoUrl: "https://homly-frontend-eight.vercel.app/",
    githubUrl: "https://github.com/Fahyvor/frontend-homly/",
  },
  {
    id: 3,
    title: "SpeedUp Creative Agency",
    description:
      "Business platform powered by Django backend, optimized for performance, SEO and scalability.",
    image: image4,
    tags: ["React", "TailwindCSS", "Django"],
    demoUrl: "https://speedupcreative.onrender.com/",
    githubUrl: "https://speedupcreative.onrender.com/",
  },
  {
    id: 4,
    title: "Dennis Tennis Academy",
    description:
      "Production website deployed for a Dubai academy with focus on performance, SEO and scalable architecture.",
    image: image7,
    tags: ["React", "Firebase"],
    demoUrl: "https://www.denisstennis.com/",
    githubUrl: "https://github.com/melvincbenjamin/Coach_Daniel-New",
  },
  {
    id: 5,
    title: "Adeleke Tennis Academy Portal",
    description:
      "Full responsive portal using Supabase & Firebase backend integrations.",
    image: image8,
    tags: ["React", "Supabase", "Firebase"],
    demoUrl: "https://www.adeleketennisacademy.com/",
    githubUrl: "https://github.com/melvincbenjamin/Coach-Julius",
  },
  {
    id: 6,
    title: "NDTDF Web Platform",
    description:
      "Modern responsive website built with performance and scalability best practices.",
    image: image10,
    tags: ["React", "TailwindCSS", "Firebase"],
    demoUrl: "https://ndtdf.com/",
    githubUrl: "https://github.com/melvincbenjamin/Nigerian-Diaspora-Tennis-Development-Forum-LCC",
  },

  // ⭐ NEW CYBERSECURITY PROJECT
  {
    id: 7,
    title: "Web App Security Lab",
    description:
      "Hands-on cybersecurity lab focused on OWASP Top 10 vulnerabilities including XSS, SQL Injection, Authentication flaws and secure coding practices.",
    image: image4,
    tags: ["Python", "Django", "Cybersecurity", "OWASP"],
    demoUrl: "#",
    githubUrl: "https://github.com/",
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
          Web Development and cybersecurity projects demonstrating secure development,
          backend architecture and real-world deployment experience.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm transition hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

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

              <div className="p-5 space-y-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-3">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={24} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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