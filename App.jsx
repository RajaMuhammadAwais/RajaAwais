import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Server,
  Cloud,
  Code,
  Shield,
  Monitor,
  Cpu,
  Database,
  GitBranch,
  Terminal,
  Settings,
  Zap,
  Network
} from 'lucide-react'
import './App.css'
import cyberpunkCityBg from './assets/cyberpunk-city-night-lights-yyli97fabab54h02.jpg'
import cyberpunkCursor from './assets/cyberpunk-cursor.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'


function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Cyberpunk cursor effect
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    // Create cursor element if not exists
    let cyberCursor = document.getElementById('cyberpunk-cursor');
    if (!cyberCursor) {
      cyberCursor = document.createElement('img');
      cyberCursor.id = 'cyberpunk-cursor';
      cyberCursor.src = cyberpunkCursor;
      cyberCursor.style.position = 'fixed';
      cyberCursor.style.pointerEvents = 'none';
      cyberCursor.style.zIndex = '9999';
      cyberCursor.style.width = '32px';
      cyberCursor.style.height = '32px';
      cyberCursor.style.transform = 'translate(-50%, -50%)';
      cyberCursor.style.transition = 'none'; // instant movement
      document.body.appendChild(cyberCursor);
    }
    const moveCursor = (e) => {
      cyberCursor.style.left = e.clientX + 'px';
      cyberCursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (cyberCursor) cyberCursor.remove();
      document.body.style.cursor = '';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'research', 'certifications', 'devops-explained']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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
  }

  const skills = {
    "Operating Systems": [
      { name: "Linux (CentOS, Ubuntu, RedHat)", icon: <Terminal className="w-4 h-4" /> },
      { name: "Bash Scripting", icon: <Code className="w-4 h-4" /> },
      { name: "System Administration", icon: <Settings className="w-4 h-4" /> }
    ],
    "Cloud & Virtualization": [
      { name: "AWS (EC2, S3, IAM, VPC)", icon: <Cloud className="w-4 h-4" /> },
      { name: "Docker", icon: <Server className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <Server className="w-4 h-4" /> }
    ],
    "DevOps Tools & Automation": [
      { name: "Ansible", icon: <Settings className="w-4 h-4" /> },
      { name: "Jenkins", icon: <Zap className="w-4 h-4" /> },
      { name: "GitHub", icon: <Github className="w-4 h-4" /> },
      { name: "CI/CD pipelines", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Infrastructure as Code (IaC)", icon: <Code className="w-4 h-4" /> }
    ],
    "Programming & Scripting": [
      { name: "Python", icon: <Code className="w-4 h-4" /> },
      { name: "Bash", icon: <Terminal className="w-4 h-4" /> },
      { name: "Shell Scripting", icon: <Terminal className="w-4 h-4" /> }
    ],
    "AI & Machine Learning": [
      { name: "AI/ML Concepts", icon: <Cpu className="w-4 h-4" /> },
      { name: "Deep Learning", icon: <Cpu className="w-4 h-4" /> },
      { name: "Data Science", icon: <Database className="w-4 h-4" /> }
    ],
    "Networking & Security": [
      { name: "Deep Packet Inspection (DPI)", icon: <Shield className="w-4 h-4" /> },
      { name: "NDPI", icon: <Network className="w-4 h-4" /> },
      { name: "DPDK", icon: <Network className="w-4 h-4" /> }
    ],
    "Monitoring & Visualization": [
      { name: "ELK Stack (Elasticsearch, Logstash, Kibana)", icon: <Monitor className="w-4 h-4" /> },
      { name: "Grafana", icon: <Monitor className="w-4 h-4" /> },
      { name: "Prometheus", icon: <Database className="w-4 h-4" /> }
    ]
  }

  const projects = [
    {
      title: "Application Classification using Deep Packet Inspection and ELK",
      description: "Implemented Deep Packet Inspection (DPI) for classifying network applications and integrated them with ELK Stack for real-time data visualization and monitoring. Focused on traffic analysis and classification using network protocols, enhancing security and performance through advanced data visualization.",
      type: "Final Year Project"
    },
    {
      title: "CyberScout",
      description: "Developed a network monitoring tool that detects malicious activities in real-time by leveraging the ELK Stack and automated traffic inspection. Integrated threat intelligence feeds with logs for real-time alerting and incident response.",
      github: "CyberScout Project",
      type: "Security Tool"
    },
    {
      title: "NeXSim",
      description: "Developed a network traffic simulator for performance testing using Python and real-time monitoring with Grafana. Focused on creating a realistic environment for testing network configurations and performance.",
      github: "NeXSim Project",
      type: "Network Simulator"
    }
  ]

  const certifications = [
    "DPDK Workshop (UET Taxila)",
    "NDPI Training (UET Taxila)",
    "Linux Administration (UET Taxila)",
    "ELK Stack (UET Taxila)"
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* --- CYBERPUNK OVERLAYS & ANIMATIONS --- */}
      <div className="cyberpunk-bg-anim" />
      <div className="cyberpunk-circuit-overlay" />
      <div className="cyberpunk-grit-overlay" />
      {/* Animated neon lines (circuit effect) */}
      <div className="cyberpunk-anim-line" style={{ top: '15vh' }} />
      <div className="cyberpunk-anim-line" style={{ top: '40vh', animationDelay: '2s' }} />
      <div className="cyberpunk-anim-line" style={{ top: '70vh', animationDelay: '4s' }} />
      {/* Abstract data viz dots */}
      <div className="cyberpunk-dataviz-dots">
        <span className="cyberpunk-dataviz-dot" />
        <span className="cyberpunk-dataviz-dot" style={{ animationDelay: '0.4s' }} />
        <span className="cyberpunk-dataviz-dot" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border flex justify-center">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row justify-center items-center gap-6 mt-4 animate-fade-in-down">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Research', 'Certifications', 'DevOps'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`cyberpunk-nav-link neon-glow transition-all duration-300 relative animate-nav-glow${activeSection === item.toLowerCase().replace(' ', '-') ? ' neon-text-blue' : ''}`}
                  style={{
                    animationDelay: `${0.1 * idx}s`,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cyberpunkCityBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch-effect neon-text-blue" data-text="Raja Muhammad Awais">
            Raja Muhammad Awais
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 neon-text-pink animate-bounce">
            DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Building Secure, Efficient, and Scalable Systems in a Cyber-Punk World
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('about')}
              className="cyber-button text-lg px-8 py-3"
            >
              View Portfolio
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="cyber-button text-lg px-8 py-3"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-green">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I am a DevOps Engineer with a strong foundation in Linux Administration, Cloud Computing, and Automation. 
                I currently work at Robotics World, Abbottabad, where I focus on implementing Deep Packet Inspection (DPI), 
                configuring the ELK stack, and utilizing automation tools such as Ansible, Docker, and Kubernetes.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                I have contributed to research with M.Phil students on Deep Packet Inspection and Network Traffic Identification. 
                My passion is to apply my skills to real-world challenges, helping organizations build secure, efficient, and scalable systems.
              </p>
              <div className="about-images-cyberpunk">
                <img src={image1} alt="About visual 1" />
                <img src={image2} alt="About visual 2" />
              </div>
            </div>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="neon-text-blue">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>03155406093</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>muhammadawaisturk1@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>Raja Muhammad Awais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-primary" />
                  <span>RajaMuhammadAwais GitHub</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl neon-text-blue">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillList.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-green">Work Experience</h2>
          <Card className="cyber-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl neon-text-blue">DevOps Engineer</CardTitle>
              <CardDescription className="text-lg">Robotics World, Abbottabad • Present</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p>• Specializing in cloud infrastructure management, automation, and containerization using Docker and Kubernetes.</p>
                <p>• Responsible for maintaining and troubleshooting Linux systems, setting up and managing CI/CD pipelines, and ensuring smooth deployment with Ansible.</p>
                <p>• Implemented ELK Stack to centralize log management and monitoring, with a focus on Deep Packet Inspection (DPI) and network traffic analysis.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl neon-text-blue">{project.title}</CardTitle>
                    {project.github && <ExternalLink className="w-5 h-5 text-primary" />}
                  </div>
                  <Badge variant="secondary" className="w-fit">{project.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                  {project.github && (
                    <p className="text-xs text-muted-foreground mt-3">GitHub: {project.github}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-green">Research Contributions</h2>
          <Card className="cyber-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl neon-text-blue">Deep Packet Inspection and Identification Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Contributed to the research efforts alongside M.Phil students focused on improving Deep Packet Inspection (DPI) 
                techniques and their applications in network traffic identification. Assisted in developing algorithms and providing 
                insights into traffic classification, aiming to improve network security and performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-pink">Certifications & Workshops</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="cyber-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="neon-border">
                      <Shield className="w-4 h-4 mr-2" />
                      Certified
                    </Badge>
                    <span className="font-medium">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Explained Section */}
      <section id="devops-explained" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text-green">What is a DevOps Engineer?</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="cyber-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    A DevOps Engineer is a technology professional who bridges the gap between software development (Dev) and 
                    IT operations (Ops). They are responsible for streamlining and automating the software development lifecycle, 
                    from code creation to deployment and maintenance.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 neon-text-blue">Key Responsibilities:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Automating deployment pipelines and infrastructure</li>
                        <li>• Managing cloud infrastructure and containerization</li>
                        <li>• Implementing monitoring and logging solutions</li>
                        <li>• Ensuring system security and compliance</li>
                        <li>• Optimizing performance and scalability</li>
                        <li>• Facilitating collaboration between development and operations teams</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 neon-text-pink">Core Technologies:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Cloud className="w-4 h-4 text-primary" />
                          <span className="text-sm">Cloud Platforms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Server className="w-4 h-4 text-primary" />
                          <span className="text-sm">Containerization</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GitBranch className="w-4 h-4 text-primary" />
                          <span className="text-sm">CI/CD Pipelines</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Monitor className="w-4 h-4 text-primary" />
                          <span className="text-sm">Monitoring Tools</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-4 h-4 text-primary" />
                          <span className="text-sm">Automation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-primary" />
                          <span className="text-sm">Security</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    In today's fast-paced technology landscape, DevOps Engineers are crucial for organizations looking to 
                    deliver software quickly, reliably, and at scale. They enable continuous integration and deployment, 
                    reduce time-to-market, and improve overall system reliability and performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              © 2025 Raja Muhammad Awais. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

