"use client";

import React, { useState, useEffect, useRef } from "react";
import { Download, Mail, Phone, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPython, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiVercel, SiFigma, SiDocker, SiAmazonwebservices, SiNginx, SiPostgresql, SiSocketdotio, SiPostman} from "react-icons/si";

export default function Portfolio() {
  {/* State Management */}
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  {/* Intersection Observer Setup */}
  useEffect(() => {
    setIsVisible(true);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observerRef.current) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  {/* Navigation Handler */}
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  {/* Tech Stack Data */}
  const techLogos = [
    { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript", href: "https://javascript.com" },
    { node: <SiTailwindcss className="text-teal-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython className="text-blue-600" />, title: "Python", href: "https://python.org" },
    { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiHtml5 className="text-orange-500" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 className="text-blue-500" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-white" />, title: "GitHub", href: "https://github.com" },
    { node: <SiVercel className="text-purple-500" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiFigma className="text-orange-200 " />, title: "Figma", href: "https://figma.com" },
    { node: <SiDocker className="text-blue-500" />, title: "Docker", href: "https://docker.com" },
    { node: <SiAmazonwebservices className="text-orange-400" />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiNginx className="text-green-600" />, title: "Nginx", href: "https://nginx.org" },
    { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiSocketdotio className="text-white" />, title: "Socket.io", href: "https://socket.io" },
    { node: <SiPostman className="text-orange-500" />, title: "Postman", href: "https://postman.com" },
  ];

  {/* Projects Data */}
  const projects = [
    {
      title: "Smart Attendance System",
      description: "AI-powered attendance tracker using facial recognition for real-time, accurate, and reliable logging.",
      tech: ["React", "Node.js", "MongoDB", "Python"],
      image: "/modern-ecommerce-interface.png",
      liveDemo: "#",
      github: "https://github.com/himanshu-MlSHRA/smart-attendance-system"
    },
    {
      title: "Resume Analyser",
      description: "AI-driven resume builder that creates, analyzes, and optimizes resumes with ATS-friendly insights.",
      tech: ["React", "MongoDB", "Python", "Node.js"],
      image: "/task-management-dashboard.png",
      liveDemo: "#",
      github: "https://github.com/himanshu-MlSHRA/AI-Resume-Builder"
    },
    {
      title: "Jarvis",
      description: "Desktop tool that converts voice instructions into automated workflows for coding and system tasks.",
      tech: ["Future"],
      image: "/project4.png",
      liveDemo: "#",
      github: "#"
    },
  ];

  {/* Experience Data */}
  const experiences = [
    {
      title: "Sarvpriye Foundation",
      company: "Web Developer Intern",
      period: "May 2025 - Present",
      achievements: [
        "Developed responsive UI components to improve usability and accessibility.",
        "Collaborated on frontend-backend integration for smooth functionality.",
        "Worked on template design and layout enhancements.",
      ],
    },
    {
      title: "ACM",
      company: "Editorial Team Member",
      period: "July 2025 - Present",
      achievements: [
        "Edited and reviewed technical content for clarity and accuracy.",
        "Collaborated on publication planning and formatting.",
        "Ensured consistency and quality across articles.",
      ],
    },
  ];

  {/* Social Links Data */}
  const socialLinks = [
    { icon: Github, href: "https://github.com/himanshu-MlSHRA", label: "GitHub", color: "hover:bg-orange-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/himanahu-mishra-b4577b20b/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { 
      icon: () => (
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg" alt="LeetCode" className="w-4 h-4" />
      ), 
      href: "https://leetcode.com/u/Nv128tJjl0/", 
      label: "LeetCode", 
      color: "hover:bg-yellow-500/90" 
    },
    { icon: Instagram, href: "https://www.instagram.com/anshul1ll/", label: "Instagram", color: "hover:bg-pink-500" },
  ];

  {/* Navigation Items */}
  const navItems = ["home", "tools", "projects", "experience", "contact"];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navigation Section */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-orange-500">Portfolio</div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-orange-500 transition-colors capitalize text-sm"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className={`space-y-5 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-3">
                <p className="text-orange-500 text-base font-medium">Hello, I'm</p>
                <div className="flex flex-col">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    HIMANSHU
                  </h1>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    <span className="bg-orange-500 text-black px-2 py-1 rounded-lg">MISHRA</span>
                  </h1>
                </div>
                <div className="h-1 w-0 bg-orange-500 animate-expand-line"></div>
              </div>

              <h2 className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                Turning ideas into interactive{" "}
                <span className="bg-orange-500 text-black px-2 py-1 rounded font-semibold mx-1">
                  web experiences
                </span>
                . Master skills, build projects, and make an impact.
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/Himanshu_Mishra_CV.pdf"
                  download="Himanshu_Mishra_CV.pdf"
                  className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 text-sm"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2.5 border border-orange-500 hover:bg-orange-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Profile Image Section - Fixed Sizing */}
            <div className={`relative mt-10 lg:mt-0 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative w-74 h-100 sm:w-80 sm:h-80 lg:w-120 lg:h-165 mx-auto">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-black via-black to-black shadow-2xl animate-float-gentle overflow-hidden border-2 border-black">
                  <img
                    src="/Himanshu.png"
                    alt="Himanshu Mishra"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white font-medium">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools/Technologies Section */}
      <section id="tools" className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has("tools") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Essential <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Tools</span>
            </h2>
            <div className={`w-20 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
              visibleSections.has("tools") ? "animate-expand-line" : "w-0"
            }`}></div>
          </div>
          
          {/* Logo Loop Component */}
          <div className="h-[120px] sm:h-[150px] lg:h-[200px] relative overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={60}
              gap={80}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#11182"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Featured <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Projects</span>
            </h2>
            <div className={`w-20 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
              visibleSections.has("projects") ? "animate-expand-line" : "w-0"
            }`}></div>
          </div>

          {/* Projects Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${
            visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Experience & <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Internships</span>
            </h2>
            <div className={`w-20 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
              visibleSections.has("experience") ? "animate-expand-line" : "w-0"
            }`}></div>
          </div>

          {/* Experience List */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Let's Work <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Together</span>
            </h2>
            <div className={`w-20 h-1 bg-orange-500 mx-auto mb-4 transition-all duration-1000 delay-300 ${
              visibleSections.has("contact") ? "animate-expand-line" : "w-0"
            }`}></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          {/* Contact Content */}
          <div className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-500 ${
            visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <ContactInfo />
              <SocialLinks socialLinks={socialLinks} />
            </div>

            {/* Call to Action Card */}
            <CallToActionCard />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

{/* Project Card Component */}
function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-gray-800 hover:border-orange-500">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded border border-gray-700">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <ProjectButton 
            onClick={() => project.liveDemo !== "#" && window.open(project.liveDemo, '_blank')}
            disabled={project.liveDemo === "#"}
            icon={ExternalLink}
            label="Live Demo"
            isDisabled={project.liveDemo === "#"}
          />
          <ProjectButton 
            onClick={() => project.github !== "#" && window.open(project.github, '_blank')}
            disabled={project.github === "#"}
            icon={Github}
            label="Code"
            isDisabled={project.github === "#"}
          />
        </div>
      </div>
    </div>
  );
}

{/* Project Button Component */}
function ProjectButton({ onClick, disabled, icon: Icon, label, isDisabled }: any) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 hover:transform hover:scale-105 text-xs ${
        isDisabled 
          ? "border-gray-600 text-gray-500 bg-gray-800 cursor-not-allowed" 
          : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      }`}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}

{/* Experience Card Component */}
function ExperienceCard({ experience }: { experience: any }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-orange-500">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-orange-500">{experience.title}</h3>
          <p className="text-gray-300">{experience.company}</p>
        </div>
        <span className="text-gray-400 text-sm mt-1 md:mt-0">{experience.period}</span>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-300">Key Achievements:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
          {experience.achievements.map((achievement: string, i: number) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{/* Contact Information Component */}
function ContactInfo() {
  return (
    <div className="space-y-3">
      <ContactItem 
        icon={Mail}
        label="Email"
        value="himanshu.2010m@gmail.com"
        href="mailto:himanshu.2010m@gmail.com"
      />
      <ContactItem 
        icon={Phone}
        label="Phone"
        value="+91 7235034984"
        href="tel:+917235034984"
      />
    </div>
  );
}

{/* Contact Item Component */}
function ContactItem({ icon: Icon, label, value, href }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800 hover:border-orange-500 group">
      <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors flex-shrink-0 mt-1">
        <Icon className="text-orange-500" size={20} />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-300 text-sm">{label}</p>
        <a href={href} className="text-gray-400 hover:text-orange-400 transition-colors break-words text-sm">
          {value}
        </a>
      </div>
    </div>
  );
}

{/* Social Links Component */}
function SocialLinks({ socialLinks }: { socialLinks: any[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Connect With Me</h3>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-2 bg-gray-900 rounded-lg transition-colors group border border-gray-800 ${social.color} text-sm`}
          >
            <social.icon size={16} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

{/* Call to Action Card Component */}
function CallToActionCard() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-center shadow-2xl">
      <h3 className="text-xl font-bold mb-3 text-black">Ready to Hire Me?</h3>
      <p className="mb-4 text-black/90 text-sm">
        I'm available for freelance projects, full-time positions, and collaborations.
      </p>
      <div className="space-y-2">
        <a
          href="/Himanshu_Mishra_CV.pdf"
          download="Himanshu_Mishra_CV.pdf"
          className="w-full block px-4 py-2.5 bg-black text-orange-500 rounded-lg font-semibold text-center hover:bg-gray-900 transition-colors hover:scale-105 transform duration-300 text-sm"
        >
          Download My Resume
        </a>
        <a
          href="tel:+917235034984"
          className="w-full block px-4 py-2.5 border border-black text-black bg-transparent rounded-lg font-semibold text-center hover:bg-black hover:text-orange-500 transition-colors hover:scale-105 transform duration-300 text-sm"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
}

{/* Footer Component */}
function Footer() {
  return (
    <footer className="py-6 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 mb-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300 font-medium">Himanshu Mishra</p>
            <p className="text-gray-500 text-xs">Crafting digital experiences with passion</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 font-medium text-sm mb-1">Built with</p>
            <div className="flex gap-2 justify-center md:justify-end">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
        <div className="text-center pt-3 border-t border-gray-800">
          <p className="text-gray-500 text-xs">© 2025 • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}