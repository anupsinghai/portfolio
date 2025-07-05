import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  MapPin, 
  Code, 
  Globe, 
  Award, 
  Users, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'awards', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: 'OpenStreetMap', category: 'Mapping', level: 95 },
    { name: 'JOSM', category: 'Mapping', level: 90 },
    { name: 'Overpass Turbo', category: 'Mapping', level: 88 },
    { name: 'WordPress', category: 'Development', level: 92 },
    { name: 'React', category: 'Development', level: 85 },
    { name: 'JavaScript', category: 'Development', level: 88 },
    { name: 'HTML/CSS', category: 'Development', level: 90 },
    { name: 'Community Leadership', category: 'Soft Skills', level: 95 },
    { name: 'Training & Education', category: 'Soft Skills', level: 93 },
    { name: 'Digital Marketing', category: 'Marketing', level: 80 }
  ]

  const projects = [
    {
      title: 'Web Agency LMS Site',
      description: 'Built a comprehensive learning management system for a web agency using WordPress with payment integration and student/instructor dashboards.',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      technologies: ['WordPress', 'PHP', 'Payment Gateway'],
      link: '#'
    },
    {
      title: 'Amazon Affiliate Website',
      description: 'Created an autopilot affiliate marketing website with automated content generation and optimized conversion funnels.',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      technologies: ['WordPress', 'Affiliate Marketing', 'SEO'],
      link: '#'
    },
    {
      title: 'Mapping for Climate Ready Cities - Dhaka',
      description: 'Led mapping initiatives for climate resilience in Dhaka, creating detailed maps for disaster preparedness and urban planning.',
      category: 'Open Mapping',
      image: '/api/placeholder/400/250',
      technologies: ['OpenStreetMap', 'JOSM', 'Field Papers'],
      link: '#'
    },
    {
      title: 'Disaster Management Analytics Dashboard',
      description: 'Developed a comprehensive dashboard for analyzing disaster management data and filtering points of interest for emergency response.',
      category: 'Data Analysis',
      image: '/api/placeholder/400/250',
      technologies: ['GIS', 'Data Visualization', 'Analytics'],
      link: '#'
    }
  ]

  const services = [
    {
      title: 'WordPress Development',
      description: 'Custom WordPress websites with modern design, responsive layouts, and optimized performance.',
      price: 'From $80',
      features: ['Custom Theme Development', 'Plugin Integration', 'SEO Optimization', 'Mobile Responsive']
    },
    {
      title: 'Autopilot Streaming Website',
      description: 'Create automated streaming websites for passive income generation with content management systems.',
      price: 'From $100',
      features: ['Automated Content', 'Monetization Setup', 'User Management', 'Analytics Dashboard']
    },
    {
      title: 'Open Mapping Training',
      description: 'Comprehensive training programs for OpenStreetMap tools, community mapping, and GIS technologies.',
      price: 'Contact for Quote',
      features: ['JOSM Training', 'Community Building', 'Field Mapping', 'Data Quality Assurance']
    }
  ]

  const awards = [
    {
      title: 'YouthMappers Leadership Fellow',
      year: '2024',
      organization: 'YouthMappers',
      description: 'Recognized for outstanding leadership in the global mapping community'
    },
    {
      title: 'Community Outreach Award',
      year: '2023',
      organization: 'YouthMappers',
      description: 'Awarded for exceptional community engagement and outreach efforts'
    },
    {
      title: 'OSM Community Champion',
      year: '2023',
      organization: 'State of the Map Thailand',
      description: 'Honored as a champion of the OpenStreetMap community in Asia Pacific'
    },
    {
      title: 'Open Mapping Guru Fellowship',
      year: '2023',
      organization: 'Open Mapping Hub, Asia Pacific',
      description: 'Selected as an Open Mapping Guru for the Asia Pacific region'
    }
  ]

  const testimonials = [
    {
      name: 'curshionj',
      country: 'United States',
      rating: 5,
      text: 'He was amazing, He followed everything I ask, There was no delay on his end and communication was excellent. Im coming back',
      project: 'WordPress Development'
    },
    {
      name: 'abdullamajid373',
      country: 'United Kingdom',
      rating: 5,
      text: 'Very happy with the work I received. Will use him again',
      project: 'WordPress Development'
    },
    {
      name: 'redvisitor',
      country: 'Argentina',
      rating: 5,
      text: 'The professional understood the situation and was friendly and competent. Excellent service delivery.',
      project: 'WordPress Development'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl gradient-text">Brazil Singh</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'portfolio', 'services', 'awards', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item 
                      ? 'text-[var(--electric-orange)] font-semibold' 
                      : 'text-gray-700 hover:text-[var(--electric-orange)]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {['home', 'about', 'skills', 'portfolio', 'services', 'awards', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-[var(--electric-orange)]"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center particle-bg fluid-gradient">
        <div className="container-custom">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="hero-title font-bold mb-6">
              Brazil Singh
            </h1>
            <p className="hero-subtitle mb-8 opacity-90">
              Open Mapping Guru & WordPress Developer
            </p>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-80">
              Bridging the gap between digital innovation and community impact through cutting-edge mapping technologies and modern web development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="cta-button"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title font-bold mb-8 gradient-text">About Me</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm Brazil Singh, a dedicated individual making significant contributions to the world of mapping and disaster preparedness. Currently serving as Open Mapping Guru at the AP Hub and Regional Ambassador of YouthMappers, I have consistently demonstrated my commitment to helping communities through technology.
                </p>
                <p className="text-lg leading-relaxed">
                  Born in Magura, Bangladesh on May 25, 2002, I'm currently pursuing a Bachelor of Science in Computer Science and Engineering at Eastern University. I skillfully integrate my academic background with real-world applications, engaging in website development and specializing in WordPress, digital marketing, and community outreach.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion for mapping has driven my active involvement in numerous projects and disaster response initiatives, making me a recognized figure in the open mapping ecosystem. I'm also working with a grocery delivery company to solve their routing and logistics challenges using OpenStreetMap data.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">🇧🇩 Bangladesh</Badge>
                <Badge variant="secondary" className="px-4 py-2">🎓 Computer Science</Badge>
                <Badge variant="secondary" className="px-4 py-2">🗺️ Open Mapping</Badge>
                <Badge variant="secondary" className="px-4 py-2">💻 WordPress Expert</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="clean-drop-shadow rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-[var(--electric-orange)] to-[var(--vibrant-teal)] p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold mb-2">5+ Years</h3>
                    <p className="text-lg opacity-90">Mapping Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="skill-card hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge variant="outline">{skill.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full gradient-bg transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card clean-drop-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[var(--electric-orange)] to-[var(--vibrant-teal)] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {project.category === 'Open Mapping' ? '🗺️' : 
                     project.category === 'Web Development' ? '💻' : '📊'}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge>{project.category}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full gradient-bg text-white hover:opacity-90">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="clean-drop-shadow hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-2xl font-bold gradient-text">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-[var(--electric-orange)] mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 gradient-bg text-white hover:opacity-90">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section-padding">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="clean-drop-shadow hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--golden-yellow)] flex items-center justify-center text-2xl">
                      🏆
                    </div>
                    <div>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                      <div className="text-sm text-gray-600">{award.organization} • {award.year}</div>
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {award.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="clean-drop-shadow hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[var(--golden-yellow)] text-[var(--golden-yellow)]" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <div className="text-sm text-gray-600">{testimonial.country} • {testimonial.project}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 clean-drop-shadow">
              <div className="text-3xl font-bold gradient-text">5.0</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[var(--golden-yellow)] text-[var(--golden-yellow)]" />
                ))}
              </div>
              <div className="text-gray-600">42 Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <h2 className="section-title font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-gray-700 mb-8">
                Ready to bring your project to life? Whether you need mapping expertise, WordPress development, 
                or community training, I'm here to help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--electric-orange)] flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">contact@brazilsingh.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibrant-teal)] flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600">Magura, Bangladesh</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--deep-purple)] flex items-center justify-center text-white">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Website</div>
                    <div className="text-gray-600">osmacademy.org</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[var(--electric-blue)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[var(--electric-blue)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            <Card className="clean-drop-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Project inquiry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full gradient-bg text-white hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">Brazil Singh</div>
            <p className="text-gray-400 mb-6">
              Open Mapping Guru & WordPress Developer
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Brazil Singh. All rights reserved. | Built with passion for open mapping and web development.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

