"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Database,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    { name: "JavaScript", category: "Frontend", icon: Code },
    { name: "React", category: "Frontend", icon: Code },
    { name: "Next.js", category: "Frontend", icon: Code },
    { name: "TypeScript", category: "Frontend", icon: Code },
    { name: "Tailwind CSS", category: "Frontend", icon: Palette },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "Python", category: "Backend", icon: Database },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "Git", category: "Tools", icon: Globe },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway dan admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifikasi.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard cuaca interaktif dengan visualisasi data dan prediksi cuaca.",
      tech: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Portfolio</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="text-emerald-600">John Doe</span>
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif
              </p>
              <div className="flex space-x-4">
                <Button onClick={() => scrollToSection("projects")} size="lg">
                  Lihat Projects
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")} size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-full">
                  <Code size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">About Me</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam mengembangkan aplikasi web
                  modern. Saya memiliki passion yang besar dalam teknologi dan selalu antusias untuk mempelajari hal-hal
                  baru.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Keahlian saya meliputi pengembangan frontend dengan React/Next.js, backend dengan Node.js/Python, dan
                  database management. Saya juga memiliki pengalaman dalam UI/UX design dan project management.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">15+</div>
                    <div className="text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">3+</div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">10+</div>
                    <div className="text-slate-600">Happy Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Skills & Technologies</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-slate-800 mb-2">{skill.name}</h4>
                      <Badge variant="secondary">{skill.category}</Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Featured Projects</h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-slate-800">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Get In Touch</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-slate-600">Tertarik untuk berkolaborasi? Mari diskusikan project Anda!</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Email</h4>
                    <p className="text-slate-600">john.doe@email.com</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Phone</h4>
                    <p className="text-slate-600">+62 812-3456-7890</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Location</h4>
                    <p className="text-slate-600">Jakarta, Indonesia</p>
                  </div>
                </div>
                <Separator className="my-8" />
                <div className="flex justify-center space-x-6">
                  <Button variant="outline" size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" asChild>
                    <a href="mailto:john.doe@email.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400">© 2024 John Doe. All rights reserved. Built with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
