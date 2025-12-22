import { Calendar, MapPin, Users, BookOpen, ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const Work = () => {
  const experiences = [
    {
      title: 'Teaching Assistant - Digital Logic & HDL',
      organization: 'Ahmedabad University • Prof. Harmeet Kaur',
      duration: 'Aug 2025 - Nov 2025',
      type: 'Teaching Assistant',
      location: 'Ahmedabad, Gujarat',
      description: 'Mentored undergraduate students in Digital Logic and Hardware Description Languages course. Facilitated both theoretical understanding and hands-on laboratory implementation of digital systems.',
      responsibilities: [
        'Conducted weekly 2-hour lab sessions mentoring students on Logisim circuit design and Verilog HDL programming',
        'Evaluated 10 comprehensive Lab Reports and 3 class assignments covering K-Maps, Boolean Algebra, and FSMs (Mealy/Moore)',
        'Supported theory classes by resolving queries regarding sequential and combinational logic'
      ],
      skills: [
        { name: 'Verilog HDL', url: 'https://en.wikipedia.org/wiki/Verilog' },
        { name: 'Logisim', url: 'http://www.cburch.com/logisim/' },
        { name: 'Digital Electronics', url: 'https://en.wikipedia.org/wiki/Digital_electronics' },
        { name: 'FSM Design', url: 'https://en.wikipedia.org/wiki/Finite-state_machine' },
        { name: 'Computer Architecture', url: 'https://en.wikipedia.org/wiki/Computer_architecture' }
      ]
    },
    {
      title: 'Freelance Web Developer',
      organization: 'Client: Urjit Mehta (M.Tech CS & AI)',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Freelance',
      location: 'Remote',
      description: 'Designed and developed "AI Nexus Portfolio", a premium, automated portfolio platform for a senior M.Tech student. Focused on creating a high-performance, responsive single-page application with automated CI/CD pipelines.',
      responsibilities: [
        'Integrated EmailJS for serverless contact form functionality',
        'Architected automated deployment pipeline using GitHub Actions and Firebase Hosting'
      ],
      githubLink: 'https://github.com/DevKansara97/urjit-ai-nexus',
      demoLink: 'https://urjit-mehta.web.app/',
      skills: [
        { name: 'React.js', url: 'https://react.dev/' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { name: 'Firebase', url: 'https://firebase.google.com/' },
        { name: 'GitHub Actions', url: 'https://github.com/features/actions' }
      ]
    },
    {
      title: 'Web Development Intern',
      organization: 'MICA University • Prof. Suresh Malodia',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Internship',
      location: 'Ahmedabad, Gujarat',
      description: 'Developed an interactive web application for a prompt engineering game ("Ghaziabad NH-9 Cattle Problem"). The platform simulated real-world traffic scenarios with dedicated interfaces for students and professors to interact with AI prompts.',
      responsibilities: [
        'Developed interactive web application using modern web technologies',
        'Implemented real-time data synchronization using Firebase Firestore',
        'Built a custom dashboard for professors to monitor student prompt performance'
      ],
      githubLink: 'https://github.com/DevKansara97/Ghaziabad-NH-9-Cattle-Problem-Professor-Presentation-Website',
      skills: [
        { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
        { name: 'Firebase', url: 'https://en.wikipedia.org/wiki/Firebase' },
        { name: 'Prompt Engineering', url: 'https://en.wikipedia.org/wiki/Prompt_engineering' },
        { name: 'Real-time Systems', url: 'https://en.wikipedia.org/wiki/Real-time_computing' }
      ]
    },
    {
      title: 'Volleyball Teaching Assistant',
      organization: 'Ahmedabad University',
      duration: 'Aug 2024 - Apr 2025',
      type: 'Teaching Assistant',
      location: 'Ahmedabad, Gujarat',
      description: 'Assisted in teaching volleyball to 1st year students through the university\'s Work Study Program, combining my athletic expertise with educational responsibilities.',
      responsibilities: [
        'Taught volleyball fundamentals to first-year university students',
        'Organized and conducted training sessions and practice matches'
      ],
      skills: [
        { name: 'Leadership', url: 'https://en.wikipedia.org/wiki/Leadership' },
        { name: 'Communication', url: 'https://en.wikipedia.org/wiki/Communication' },
        { name: 'Sports Coaching', url: 'https://en.wikipedia.org/wiki/Coach_(sport)' }
      ]
    }
  ];

  const positions = [
    {
      title: 'Competitive Programming Team Member',
      organization: 'Ahmedabad University',
      duration: 'Aug 2024 - May 2026',
      description: 'Contributing to collaborative learning environment and strengthening team\'s competitive programming abilities',
      responsibilities: [
        'Posting complex Data Structures and Algorithms problems with solutions',
        'Participating in programming contests and competitions',
        'Helping juniors improve their problem-solving skills'
      ]
    }
  ];

  const scrollVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey through internships, teaching roles, and freelance contributions
            </p>
          </motion.div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-portfolio-blue-dark" />
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={scrollVariants.initial}
                  whileInView={scrollVariants.whileInView}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={scrollVariants.transition}
                >
                  <Card className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark shadow-sm">
                    <div className="mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{exp.title}</h3>
                          <p className="text-xl text-portfolio-blue-dark font-semibold mb-2">{exp.organization}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-portfolio-blue-dark text-white self-start">
                          {exp.type}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                      
                      {/* Project Links */}
                      {(exp.githubLink || exp.demoLink) && (
                        <div className="flex gap-4 mb-6">
                          {exp.githubLink && (
                            <Button asChild variant="outline" size="sm" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all duration-300">
                              <a href={exp.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" /> View Code
                              </a>
                            </Button>
                          )}
                          {exp.demoLink && (
                            <Button asChild variant="outline" size="sm" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all duration-300">
                              <a href={exp.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <metric className="w-5 h-5 text-portfolio-blue-dark" />
                          <Users className="w-5 h-5 text-portfolio-blue-dark" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-600 flex items-start gap-2">
                              <div className="w-2 h-2 bg-portfolio-blue-dark rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all">
                              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                                {skill.name}
                              </a>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Users className="w-8 h-8 text-portfolio-blue-dark" />
              Positions of Responsibility
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={scrollVariants.initial}
                  whileInView={scrollVariants.whileInView}
                  viewport={{ once: true }}
                  transition={scrollVariants.transition}
                >
                  <Card className="p-8 hover-lift bg-white border-l-4 border-l-gray-300 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{position.title}</h3>
                    <p className="text-portfolio-blue-dark font-semibold mb-2">{position.organization}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4" />
                      {position.duration}
                    </p>
                    <p className="text-gray-700 mb-6">{position.description}</p>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;