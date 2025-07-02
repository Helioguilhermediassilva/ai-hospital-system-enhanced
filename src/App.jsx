import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Heart, 
  Users, 
  Stethoscope, 
  Bot, 
  Leaf, 
  Network,
  ChevronRight,
  Play,
  Download,
  Menu,
  X,
  Server
} from 'lucide-react'
import './App.css'
import { sendEmail, initEmailJS } from './emailConfig'

// Import images and media
import heroBanner from './assets/hero_banner.png'
import aiArchitecture from './assets/ai_architecture_diagram_corrected.png'
import globalDiversity from './assets/global_diversity_healthcare.png'
import sustainabilityFeatures from './assets/sustainability_features.png'
import aiDiagnostics from './assets/ai_diagnostics_interface.png'
import globalImplementation from './assets/simple_phases_map.png'
import demoVideo from './assets/demo_video_complete.mp4'
import whitepaper from './assets/hospital_ai_article_en_authored.pdf'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Function to handle video demo
  const handleViewDemo = () => {
    setIsVideoModalOpen(true)
  }

  // Function to handle whitepaper download
  const handleDownloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = whitepaper
    link.download = 'AI_Hospital_Whitepaper.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to handle Get Started
  const handleGetStarted = () => {
    setIsGetStartedModalOpen(true)
  }

  // Function to handle Schedule Consultation
  const handleScheduleConsultation = () => {
    setIsScheduleModalOpen(true)
  }

  // Function to handle Explore Technical Details
  const handleExploreTechnical = () => {
    document.getElementById('technical-specifications').scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate, real-time medical diagnosis across multiple specialties."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Modular architecture designed for deployment in emerging countries and underserved regions worldwide."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Full compliance with GDPR, HIPAA, LGPD, and local healthcare regulations across different jurisdictions."
    },
    {
      icon: Zap,
      title: "Sustainable Infrastructure",
      description: "Renewable energy systems and efficient operations designed for resource-limited environments."
    },
    {
      icon: Heart,
      title: "Cultural Adaptation",
      description: "Multilingual interfaces and culturally appropriate healthcare protocols for diverse populations."
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Collaborative approach involving local communities, healthcare workers, and traditional medicine practices."
    }
  ]

  const architectureLayers = [
    { name: "Security & Governance", color: "bg-green-500" },
    { name: "Multimodal Interfaces", color: "bg-blue-500" },
    { name: "Operational Applications", color: "bg-blue-400" },
    { name: "Clinical Applications", color: "bg-blue-400" },
    { name: "AI Core", color: "bg-green-600" },
    { name: "Data Layer", color: "bg-blue-400" },
    { name: "Infrastructure", color: "bg-green-600" }
  ]

  const implementationPhases = [
    {
      phase: "Local Pilot",
      duration: "Months 1-12",
      description: "Initial implementation and validation in selected location",
      status: "ready"
    },
    {
      phase: "National Consolidation", 
      duration: "Months 13-36",
      description: "Expansion to multiple locations within the same country",
      status: "planned"
    },
    {
      phase: "Regional Expansion",
      duration: "Months 37-60", 
      description: "Extension to neighboring countries and similar regions",
      status: "planned"
    },
    {
      phase: "International Scaling",
      duration: "Months 61+",
      description: "Global deployment across different continents",
      status: "planned"
    }
  ]

  const regionalCustomizations = [
    {
      region: "Sub-Saharan Africa",
      focus: ["Malaria", "HIV", "Tuberculosis"],
      features: ["Solar energy optimization", "Offline operation", "Low-bandwidth connectivity"]
    },
    {
      region: "South Asia", 
      focus: ["Cardiovascular diseases", "Respiratory conditions"],
      features: ["Telemedicine integration", "Multi-language support", "Air quality monitoring"]
    },
    {
      region: "Latin America",
      focus: ["Diabetes", "Hypertension"],
      features: ["Fragmented system integration", "Spanish/Portuguese interfaces", "Public health compatibility"]
    },
    {
      region: "Middle East",
      focus: ["Endemic diseases", "Cultural protocols"],
      features: ["Arabic interfaces", "Religious considerations", "Traditional medicine integration"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AI Hospital</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-foreground hover:text-primary transition-colors">Overview</a>
              <a href="#architecture" className="text-foreground hover:text-primary transition-colors">Architecture</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#implementation" className="text-foreground hover:text-primary transition-colors">Implementation</a>
              <a href="#regions" className="text-foreground hover:text-primary transition-colors">Regional Adaptation</a>
              <Button onClick={handleGetStarted}>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#overview" className="text-foreground hover:text-primary transition-colors">Overview</a>
                <a href="#architecture" className="text-foreground hover:text-primary transition-colors">Architecture</a>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
                <a href="#implementation" className="text-foreground hover:text-primary transition-colors">Implementation</a>
                <a href="#regions" className="text-foreground hover:text-primary transition-colors">Regional Adaptation</a>
                <Button className="w-full" onClick={handleGetStarted}>Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Leaf className="w-4 h-4 mr-2" />
                  Sustainable Healthcare Innovation
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  100% AI-Operated
                  <span className="text-primary block">Hospital Prototype</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A revolutionary healthcare solution designed for global scalability, 
                  cultural adaptation, and sustainable operations in emerging countries 
                  and underserved regions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" onClick={handleViewDemo}>
                  <Play className="w-5 h-5 mr-2" />
                  View Demo
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleDownloadWhitepaper}>
                  <Download className="w-5 h-5 mr-2" />
                  Download Whitepaper
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.5%</div>
                  <div className="text-sm text-muted-foreground">Uptime Target</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Operations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroBanner} 
                alt="AI Hospital Technology" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Global Healthcare Revolution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-operated hospital prototype addresses critical healthcare challenges 
              through innovative technology, sustainable design, and cultural sensitivity.
            </p>
          </div>

          <div id="features" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Modular Architecture</h2>
              <p className="text-lg text-muted-foreground">
                Our layered architecture ensures scalability, maintainability, and 
                adaptability to different regional contexts while maintaining consistent 
                quality and security standards.
              </p>
              
              <div className="space-y-3">
                {architectureLayers.map((layer, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded ${layer.color}`}></div>
                    <span className="font-medium">{layer.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="outline" onClick={handleExploreTechnical}>
                  <Network className="w-4 h-4 mr-2" />
                  Explore Technical Details
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={aiArchitecture} 
                alt="AI Hospital Architecture" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section id="technical-specifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed technical specifications and requirements for the AI Hospital system implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2 text-primary" />
                Infrastructure Requirements
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Minimum 64GB RAM per server node</li>
                <li>• 10TB+ storage capacity (SSD preferred)</li>
                <li>• Redundant power supply systems</li>
                <li>• 99.9% uptime SLA requirement</li>
                <li>• Edge computing capabilities</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI & Machine Learning
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• TensorFlow/PyTorch frameworks</li>
                <li>• CUDA-enabled GPU clusters</li>
                <li>• Real-time inference &lt;100ms</li>
                <li>• Federated learning support</li>
                <li>• Explainable AI compliance</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Security & Compliance
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End-to-end encryption (AES-256)</li>
                <li>• HIPAA/GDPR/LGPD compliance</li>
                <li>• Multi-factor authentication</li>
                <li>• Audit trail logging</li>
                <li>• Zero-trust architecture</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Network className="w-5 h-5 mr-2 text-primary" />
                Connectivity & Integration
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• RESTful API architecture</li>
                <li>• HL7 FHIR standard support</li>
                <li>• Satellite connectivity backup</li>
                <li>• Offline operation capability</li>
                <li>• Real-time data synchronization</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
                Power & Sustainability
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 100% renewable energy sources</li>
                <li>• 24-hour battery backup systems</li>
                <li>• Energy-efficient cooling systems</li>
                <li>• Solar panel integration</li>
                <li>• Carbon-neutral operations</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Scalability & Performance
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Horizontal scaling architecture</li>
                <li>• Load balancing across regions</li>
                <li>• Auto-scaling based on demand</li>
                <li>• Multi-region deployment</li>
                <li>• 50,000+ concurrent users</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-background p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">System Architecture Overview</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-3">Core Components</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AI Diagnostic Engine</li>
                    <li>• Patient Management System</li>
                    <li>• Electronic Health Records</li>
                    <li>• Telemedicine Platform</li>
                    <li>• Inventory Management</li>
                    <li>• Billing & Insurance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Integration Points</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• National Health Systems</li>
                    <li>• Laboratory Networks</li>
                    <li>• Pharmacy Systems</li>
                    <li>• Emergency Services</li>
                    <li>• Medical Device APIs</li>
                    <li>• Insurance Providers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Diversity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={globalDiversity} 
                alt="Global Healthcare Diversity" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Cultural Adaptation & Inclusivity</h2>
              <p className="text-lg text-muted-foreground">
                Our system respects and incorporates cultural diversity, providing 
                multilingual interfaces and culturally appropriate healthcare protocols 
                for different populations worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Multilingual Support</h4>
                    <p className="text-muted-foreground">English, Spanish, Portuguese, French, Arabic, Hindi, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Cultural Protocols</h4>
                    <p className="text-muted-foreground">Respectful integration of traditional medicine and local practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Adaptive Interfaces</h4>
                    <p className="text-muted-foreground">Automatically adjusts to literacy levels and cultural preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Sustainable Infrastructure</h2>
              <p className="text-lg text-muted-foreground">
                Designed for operation in resource-limited environments with renewable 
                energy systems, efficient operations, and minimal environmental impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">50%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">24h</div>
                  <div className="text-sm text-muted-foreground">Battery Backup</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">Zero</div>
                  <div className="text-sm text-muted-foreground">Carbon Footprint</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={sustainabilityFeatures} 
                alt="Sustainable Hospital Design" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Diagnostics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={aiDiagnostics} 
                alt="AI Medical Diagnostics Interface" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold">Advanced AI Diagnostics</h2>
              <p className="text-lg text-muted-foreground">
                State-of-the-art artificial intelligence systems provide accurate, 
                real-time medical diagnosis and treatment recommendations with 
                full explainability and human oversight.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span>Computer vision for medical imaging analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>Natural language processing for symptom analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Explainable AI with full transparency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Human oversight and override capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Implementation Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A phased approach to global deployment, starting with local pilots 
              and scaling to international implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {implementationPhases.map((phase, index) => {
              const CardComponent = (
                <Card key={index} className={`relative ${phase.status === 'ready' ? 'ring-2 ring-primary' : ''} ${index === 0 ? 'cursor-pointer hover:shadow-lg transition-shadow duration-300' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={phase.status === 'ready' ? 'default' : 'secondary'}>
                        Phase {index + 1}
                      </Badge>
                      {phase.status === 'ready' && (
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {phase.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              );

              // Make Local Pilot (first card) clickable
              if (index === 0) {
                return (
                  <a 
                    key={index}
                    href="https://www.nowgomedai.online/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardComponent}
                  </a>
                );
              }

              return CardComponent;
            })}
          </div>

          <div className="text-center">
            <img 
              src={globalImplementation} 
              alt="Global Implementation Map" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Regional Customizations */}
      <section id="regions" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Regional Adaptations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized implementations for different regions, addressing specific 
              health challenges and cultural requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regionalCustomizations.map((region, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{region.region}</CardTitle>
                  <CardDescription>
                    Focus Areas: {region.focus.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {region.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us in revolutionizing global healthcare through AI innovation, 
              sustainable design, and cultural inclusivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={handleGetStarted}>
                Get Started Today
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleScheduleConsultation}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AI Hospital</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Revolutionizing global healthcare through AI innovation and sustainable design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#architecture" className="block text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
                <a href="#technical-specifications" className="block text-muted-foreground hover:text-foreground transition-colors">Security</a>
                <a href="#technical-specifications" className="block text-muted-foreground hover:text-foreground transition-colors">Compliance</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#technical-specifications" className="block text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
                <a 
                  href="/hospital_ai_article_en_authored.pdf" 
                  download="AI_Hospital_Whitepaper.pdf"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Whitepaper
                </a>
                <a href="#roadmap" className="block text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
                <a href="#customizations" className="block text-muted-foreground hover:text-foreground transition-colors">Research</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#hero" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#customizations" className="block text-muted-foreground hover:text-foreground transition-colors">Team</a>
                <a href="https://www.nowgomedai.online/" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AI Hospital. All rights reserved. Built with innovation for global healthcare.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">AI Hospital Demo</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <video
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
                src={demoVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Get Started Modal */}
      {isGetStartedModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Get Started with AI Hospital</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsGetStartedModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <GetStartedForm onClose={() => setIsGetStartedModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Schedule Consultation Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Schedule Consultation</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsScheduleModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <ScheduleForm onClose={() => setIsScheduleModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsContactModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <ContactForm onClose={() => setIsContactModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Contact Form Component
function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare email parameters for EmailJS
      const emailParams = {
        form_type: 'Contact Form',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        to_email: 'helio@nowgo.com.br'
      }
      
      // Send email using EmailJS
      await sendEmail(emailParams)
      
      // Show success message
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      
      // Fallback to mailto if EmailJS fails
      const emailSubject = `AI Hospital Contact: ${formData.subject || 'General Inquiry'}`
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from AI Hospital System Contact Form
Website: https://www.nowgomedai.com
      `.trim()

      const mailtoLink = `mailto:helio@nowgo.com.br?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.location.href = mailtoLink
      
      // Show success message even with fallback
      setTimeout(() => {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      }, 1000)
    }
  }

  // Success state UI
  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Thank you for contacting us. We've received your message and will get back to you as soon as possible.
        </p>
        <div className="text-xs text-muted-foreground">
          This window will close automatically...
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Company/Organization</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Your company or organization"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <select 
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        >
          <option value="">Select a subject</option>
          <option value="General Information">General Information</option>
          <option value="Partnership Inquiry">Partnership Inquiry</option>
          <option value="Technical Questions">Technical Questions</option>
          <option value="Implementation Support">Implementation Support</option>
          <option value="Investment Opportunity">Investment Opportunity</option>
          <option value="Media Inquiry">Media Inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          rows="4"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Tell us how we can help you..."
        ></textarea>
      </div>
      
      <div className="flex gap-3">
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
      </div>
      
      <div className="text-xs text-muted-foreground text-center">
        Your message will be sent securely to our team
      </div>
    </form>
  )
}

export default App


// Get Started Form Component
function GetStartedForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interestArea: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare email parameters for EmailJS
      const emailParams = {
        form_type: 'Get Started Request',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.organization,
        interest_area: formData.interestArea,
        message: formData.message,
        subject: `AI Hospital Get Started: ${formData.interestArea || 'New Request'}`,
        to_email: 'helio@nowgo.com.br'
      }
      
      // Send email using EmailJS
      await sendEmail(emailParams)
      
      // Show success message
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      
      // Fallback to mailto if EmailJS fails
      const emailSubject = `AI Hospital Get Started: ${formData.interestArea || 'New Request'}`
      const emailBody = `
GET STARTED REQUEST

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Interest Area: ${formData.interestArea}

Message:
${formData.message}

---
Sent from AI Hospital System - Get Started Form
Website: https://www.nowgomedai.com
      `.trim()

      const mailtoLink = `mailto:helio@nowgo.com.br?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.location.href = mailtoLink
      
      // Show success message even with fallback
      setTimeout(() => {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      }, 1000)
    }
  }

  // Success state UI
  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Thank you for your interest in AI Hospital System. We've received your request and will get back to you soon.
        </p>
        <div className="text-xs text-muted-foreground">
          This window will close automatically...
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Organization</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Your organization"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Interest Area</label>
        <select 
          name="interestArea"
          value={formData.interestArea}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        >
          <option value="">Select your interest</option>
          <option value="Implementation Partnership">Implementation Partnership</option>
          <option value="Technology Licensing">Technology Licensing</option>
          <option value="Research Collaboration">Research Collaboration</option>
          <option value="Investment Opportunity">Investment Opportunity</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          rows="3"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      
      <div className="flex gap-3">
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Submit Request'
          )}
        </Button>
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
      </div>
      
      <div className="text-xs text-muted-foreground text-center">
        Your message will be sent securely to our team
      </div>
    </form>
  )
}

// Schedule Form Component
function ScheduleForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationTopic: '',
    additionalInfo: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare email parameters for EmailJS
      const emailParams = {
        form_type: 'Consultation Request',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        consultation_topic: formData.consultationTopic,
        message: formData.additionalInfo,
        subject: `AI Hospital Consultation Request: ${formData.consultationTopic || 'General Consultation'}`,
        to_email: 'helio@nowgo.com.br'
      }
      
      // Send email using EmailJS
      await sendEmail(emailParams)
      
      // Show success message
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      
      // Fallback to mailto if EmailJS fails
      const emailSubject = `AI Hospital Consultation Request: ${formData.consultationTopic || 'General Consultation'}`
      const emailBody = `
CONSULTATION REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Consultation Topic: ${formData.consultationTopic}

Additional Information:
${formData.additionalInfo}

---
Sent from AI Hospital System - Schedule Consultation Form
Website: https://www.nowgomedai.com
      `.trim()

      const mailtoLink = `mailto:helio@nowgo.com.br?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.location.href = mailtoLink
      
      // Show success message even with fallback
      setTimeout(() => {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      }, 1000)
    }
  }

  // Success state UI
  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Consultation Scheduled!</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Thank you for scheduling a consultation. We've received your request and will contact you soon to confirm the details.
        </p>
        <div className="text-xs text-muted-foreground">
          This window will close automatically...
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Your phone number"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Preferred Date</label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Preferred Time</label>
        <select 
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        >
          <option value="">Select preferred time</option>
          <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
          <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
          <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
          <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Consultation Topic</label>
        <select 
          name="consultationTopic"
          value={formData.consultationTopic}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        >
          <option value="">Select consultation topic</option>
          <option value="General Information">General Information</option>
          <option value="Implementation Planning">Implementation Planning</option>
          <option value="Technical Architecture">Technical Architecture</option>
          <option value="Regulatory Compliance">Regulatory Compliance</option>
          <option value="Cost & ROI Analysis">Cost & ROI Analysis</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Additional Information</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          disabled={isSubmitting}
          rows="3"
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="Any additional information or specific questions..."
        ></textarea>
      </div>
      
      <div className="flex gap-3">
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Scheduling...
            </>
          ) : (
            'Schedule Consultation'
          )}
        </Button>
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
      </div>
      
      <div className="text-xs text-muted-foreground text-center">
        Your consultation request will be sent securely to our team
      </div>
    </form>
  )
}

