"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Instagram } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setIsVisible(true)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      if (observerRef.current) observerRef.current.observe(section)
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{ scrollBehavior: "smooth" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-orange-500">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {["home", "tools", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-orange-500 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-4">
                <p className="text-orange-500 text-lg font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight relative">
                  <span className="text-white">Himanshu Mishra</span>
                </h1>
                <div className="relative">
                  <div className="h-1 w-0 bg-orange-500 animate-expand-line"></div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl leading-relaxed">
                  <span className="text-gray-300">Turning ideas into interactive</span>
                  <span className="bg-orange-500 text-black px-2 py-1 rounded font-semibold">
                    web experiences.
                  </span>
                  <span className="text-gray-300"> Master skills, build projects, and make an impact.</span>
                </h2>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="/Himanshu_Mishra_CV.pdf"
                  download="Himanshu_Mishra_CV.pdf"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border border-orange-500 hover:bg-orange-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative w-100 h-160 mx-auto">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 shadow-2xl animate-float-gentle overflow-hidden">
                  <img
                    src="/professional-headshot-of-a-developer.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white font-medium">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Essential Tools Section */}
      <section id="tools" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("tools") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">
              Essential <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Tools</span>
            </h2>
            <div
              className={`w-24 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
                visibleSections.has("tools") ? "animate-expand-line" : "w-0"
              }`}
            ></div>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 transition-all duration-1000 delay-500 ${
              visibleSections.has("tools") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
              {
                name: "AWS",
                icon: "https://api.iconify.design/simple-icons:amazonaws.svg?color=white",
              },

              { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            ].map((tool, index) => (
              <div
                key={tool.name}
                className="flex flex-col items-center group hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-3 p-3 bg-gray-900 rounded-lg border border-gray-700 group-hover:border-orange-500 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-orange-500 transition-colors duration-300 font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Projects</span>
            </h2>
            <div
              className={`w-24 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
                visibleSections.has("projects") ? "animate-expand-line" : "w-0"
              }`}
            ></div>
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
              visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                title: "Smart Attendance System",
                description: "AI-powered attendance tracker using facial recognition for real-time, accurate, and reliable logging.",
                tech: ["React", "Node.js", "MongoDB", "Python"],
                image: "/modern-ecommerce-interface.png",
              },
              {
                title: "Resume Analyser",
                description: "AI-driven resume builder that creates, analyzes, and optimizes resumes with ATS-friendly insights.",
                tech: ["React", "MongoDB", "Python", "Node.js"],
                image: "/task-management-dashboard.png",
              },
              {
                title: "Jarvis",
                description: "An desktop tool that converts voice instructions into automated workflows, streamlining coding, installations, and system tasks.",
                tech: ["Future"],
                image: "/preview/project4.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-gray-800 hover:border-orange-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-xs rounded border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">
              Experience & <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Internships</span>
            </h2>
            <div
              className={`w-24 h-1 bg-orange-500 mx-auto transition-all duration-1000 delay-300 ${
                visibleSections.has("experience") ? "animate-expand-line" : "w-0"
              }`}
            ></div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                title: "Sarvpriye Foundation",
                company: "Web Developer Intern",
                period: "May 2025 - Present",
                achievements: ["Developed responsive UI components to improve usability and accessibility.",
                  "Collaborated on frontend-backend integration to ensure smooth application functionality.",
                  "Worked on template design and layout enhancements to modernize the interface.",],
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
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-orange-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-500">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-300">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">
              Let's Work <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">Together</span>
            </h2>
            <div
              className={`w-24 h-1 bg-orange-500 mx-auto mb-6 transition-all duration-1000 delay-300 ${
                visibleSections.has("contact") ? "animate-expand-line" : "w-0"
              }`}
            ></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-500 ${
              visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800 hover:border-orange-500">
                  <Mail className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">himanshu.2010m@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800 hover:border-orange-500">
                  <Phone className="text-orange-500" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 7235034984</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/himanshu-MlSHRA"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-900 rounded-lg hover:bg-orange-500 transition-colors group border border-gray-800"
                  >
                    <Github className="group-hover:text-black" size={20} />
                    <span className="group-hover:text-black">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/himanahu-mishra-b4577b20b/"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-900 rounded-lg hover:bg-blue-600 transition-colors group border border-gray-800"
                  >
                    <Linkedin className="group-hover:text-white" size={20} />
                    <span className="group-hover:text-white">LinkedIn</span>
                  </a>
                  <a
      href="https://leetcode.com/u/Nv128tJjl0/"
      className="flex items-center gap-3 px-4 py-3 bg-gray-900 rounded-lg hover:bg-yellow-400 transition-colors group border border-gray-800"
    >
      <img
        src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg"
        alt="LeetCode"
        className="w-5 h-6 invert brightness-0 group-hover:invert-0"
      />
      <span className="group-hover:text-black">LeetCode</span>
    </a>
    <a
      href="https://www.instagram.com/anshul1ll/"
      className="flex items-center gap-2 px-4 py-3 bg-gray-900 rounded-lg hover:bg-pink-500 transition-colors group border border-gray-800"
    >
      <Instagram className="text-white group-hover:text-white w-7 h-7" />
      <span className="group-hover:text-white">Instagram</span>
    </a>
                </div>
              </div>
            </div>

            {/* Hire Me CTA */}
            <div className="bg-orange-500 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">Ready to Hire Me?</h3>
              <p className="mb-6 text-black">
                I'm available for freelance projects, full-time positions, and exciting collaborations.
              </p>
              <div className="space-y-4">
                <a
  href="/Himanshu_Mishra_CV.pdf"
  download="Himanshu_Mishra_CV.pdf"
  className="w-full block px-6 py-3 bg-black text-orange-500 rounded-lg font-semibold text-center hover:bg-gray-900 transition-colors"
>
  Download My Resume
</a>

               <a
      href="tel:+91 7235034984"
      className="w-full block px-6 py-3 border-2 border-black text-black bg-transparent rounded-lg font-semibold text-center hover:bg-black hover:text-orange-500 transition-colors"
    >
      Schedule a Call
    </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 mb-6">
            <div className="text-center md:text-left">
              <p className="text-gray-300 font-medium">Himanshu Mishra</p>
              <p className="text-gray-500 text-sm">Crafting digital experiences with passion and precision</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 font-medium mb-3">Built with</p>
              <div className="flex gap-2 justify-center md:justify-end flex-wrap">
                {[
                  {
  name: "TypeScript",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
},
                  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                ].map((tech) => (
                  <div key={tech.name} className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm">© 2025 • All rights reserved</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes paintStroke {
          0% {
            opacity: 0;
            transform: scale(1.25);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .animate-stroke {
          animation: paintStroke 1s forwards;
        }
      `}</style>
    </div>
  )
}