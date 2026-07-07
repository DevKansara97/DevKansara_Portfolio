import { Calendar, MapPin, Users, BookOpen, ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const Work = () => {
  const experiences = [
    {
      title: 'LLM Engineering Intern',
      organization: 'Blink Analytics - Serin AI',
      duration: 'Jun 2026 - Jul 2026',
      type: 'Internship',
      location: 'Remote',
      description: 'Built data analytics pipelines and automated optimization tools using LLM metrics and embedding frameworks.',
      responsibilities: [
        'Configured PostHog data pipelines with GCP BigQuery to analyze user behavior via Google BigQuery/SQL.',
        'Built zero-shot embedding prototypes using cosine similarity to minimize LLM API call dependencies.',
        'Built a job-candidate recommendation engine using ESCO/O*NET ontology matching and interview performance metrics.'
      ],
      skills: [
        { name: 'LLM Engineering', url: 'https://en.wikipedia.org/wiki/Large_language_model' },
        { name: 'GCP BigQuery', url: 'https://cloud.google.com/bigquery' },
        { name: 'PostHog & HogQL', url: 'https://posthog.com/' },
        { name: 'Vector Embeddings', url: 'https://en.wikipedia.org/wiki/Word_embedding' }
      ]
    },
    {
      title: 'Freelance Web Developer',
      organization: 'Freelance',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Freelance',
      location: 'Remote',
      description: 'Developed "AI Nexus Portfolio", a high-performance portfolio platform for a senior M.Tech student.',
      responsibilities: [
        'Integrated EmailJS for serverless contact forms.',
        'Architected automated CI/CD pipelines using GitHub Actions and Firebase Hosting.'
      ],
      githubLink: 'https://github.com/DevKansara97/urjit-ai-nexus',
      demoLink: 'https://urjit-mehta.web.app/',
      skills: [
        { name: 'React.js', url: 'https://react.dev/' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { name: 'Firebase', url: 'https://firebase.google.com/' }
      ]
    },
    {
      title: 'Web Development Intern',
      organization: 'MICA University',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Internship',
      location: 'Ahmedabad, Gujarat',
      description: 'Developed an interactive web app simulating traffic scenarios for a prompt engineering game.',
      responsibilities: [
        'Implemented real-time data synchronization using Firebase Firestore.',
        'Built a custom analytics dashboard for tracking student prompt performance.'
      ],
      githubLink: 'https://github.com/DevKansara97/Ghaziabad-NH-9-Cattle-Problem-Professor-Presentation-Website',
      skills: [
        { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
        { name: 'Firebase', url: 'https://en.wikipedia.org/wiki/Firebase' },
        { name: 'Prompt Engineering', url: 'https://en.wikipedia.org/wiki/Prompt_engineering' }
      ]
    }
  ];

  const positions = [
    {
      title: 'Teaching Assistant - Discrete Mathematics',
      organization: 'Ahmedabad University',
      duration: 'Jan 2026 - Apr 2026',
      description: 'Assisted in course delivery, student academic support, and grading evaluations.',
      responsibilities: [
        'Evaluated in-class problem sets and assignments.',
        'Resolved student academic queries and managed administrative records.'
      ]
    },
    {
      title: 'Teaching Assistant - Digital Logic & HDL',
      organization: 'Ahmedabad University',
      duration: 'Aug 2025 - Nov 2025',
      description: 'Mentored undergraduate students in theoretical and laboratory digital systems implementation.',
      responsibilities: [
        'Conducted weekly 2-hour lab sessions on Logisim circuit design and Verilog HDL.',
        'Evaluated lab reports and assignments covering K-Maps, Boolean Algebra, and FSMs.',
        'Supported lecture sessions by resolving queries on sequential and combinational logic.'
      ]
    },
    {
      title: 'Competitive Programming Team Member',
      organization: 'Ahmedabad University',
      duration: 'Aug 2024 - May 2026',
      description: 'Collaborate with peers to solve complex algorithmic challenges and foster a programming culture.',
      responsibilities: [
        'Publishing advanced DSA problem explanations and solutions.',
        'Competing in institutional and open programming contests.',
        'Mentoring junior members on algorithmic techniques.'
      ]
    },
    {
      title: 'Volleyball Teaching Assistant',
      organization: 'Ahmedabad University',
      duration: 'Aug 2024 - Apr 2025',
      description: 'Coached first-year university students as part of the university work-study program.',
      responsibilities: [
        'Taught fundamental volleyball skills and court strategies.',
        'Organized and refereed weekly training drills and practice matches.'
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey through software engineering, internships, and leadership roles.
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-1 font-poppins">{exp.title}</h3>
                          <p className="text-xl text-portfolio-blue-dark font-semibold mb-2">{exp.organization}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
                        <Badge variant="secondary" className="bg-portfolio-blue-dark text-white self-start mt-2 lg:mt-0">
                          {exp.type}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                      
                      {/* Project Links */}
                      {(exp.githubLink || exp.demoLink) && (
                        <div className="flex gap-4 mb-6">
                          {exp.githubLink && (
                            <Button asChild variant="outline" size="sm" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all">
                              <a href={exp.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" /> View Code
                              </a>
                            </Button>
                          )}
                          {exp.demoLink && (
                            <Button asChild variant="outline" size="sm" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all">
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
                          <Users className="w-5 h-5 text-portfolio-blue-dark" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-portfolio-blue-dark rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm tracking-wide uppercase text-gray-500">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-all text-xs">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-poppins">{position.title}</h3>
                    <p className="text-portfolio-blue-dark font-semibold mb-2">{position.organization}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4" />
                      {position.duration}
                    </p>
                    <p className="text-gray-700 mb-6 text-sm">{position.description}</p>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
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