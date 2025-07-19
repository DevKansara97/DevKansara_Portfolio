import { Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Projects = () => {
  const projects = [
    {
      title: 'Five-Cycle Non-Pipelined RISC Processor (25-bit)',
      duration: 'Feb 2025 - Apr 2025',
      organization: 'Ahmedabad University',
      teamSize: 4,
      description: 'Implemented a 25-bit RISC (Reduced Instruction Set Computer) processor in Verilog HDL, based on a five-stage non-pipelined architecture. This design adheres to the RISC philosophy for faster execution and greater hardware efficiency. The project involved designing key modules like the Instruction Fetch, Instruction Decode, Execute, Memory Access, and Write Back stages, including ALU, Control, and Output Logic, all successfully integrated for full functionality.',
      skills: ['Verilog HDL', 'Microchip Studio', 'OshonSoft AVR Simulator', 'EDA Playground'],
      keyOutcomes: 'Successfully designed and integrated 25-bit RISC processor modules (ALU, Control, Output Logic) in Verilog, demonstrating advanced computer architecture and HDL proficiency.',
      category: 'Hardware Design',
      featured: true,
      githubLink: 'https://github.com/DevKansara97/Five-cycle-non-pipelined-RISC-processor-using-Verilog-HDL',
      demoLink: null
    },
    {
      title: 'Randomized Route Optimization in Decentralized Traffic Networks',
      duration: 'Feb 2025 - Mar 2025',
      organization: 'Ahmedabad University',
      teamSize: 5,
      description: 'Explored a probabilistic routing framework for decentralized traffic networks, aiming to minimize average travel time and alleviate congestion. Developed for the CSE400: Fundamentals of Probability in Computing course, this project implements a Randomized A* algorithm that introduces controlled randomness in path selection using a Boltzmann probability distribution. The cost function combines actual travel costs with heuristically estimated distances (Euclidean, Manhattan, Diagonal). Baseline algorithms used for comparison include Dijkstra’s and Standard A*.',
      skills: ['Python', 'Google Colab', 'GitHub', 'Probability Theory', 'Graph Data Structure', 'Randomized A* algorithm'],
      keyOutcomes: 'Implemented Randomized A* for route optimization; modeled problems with Python and Graph Data Structures and enhanced understanding of probability theory in networks.',
      category: 'Algorithms & AI',
      featured: true,
      githubLink: 'https://github.com/DevKansara97/Randomized-Route-Optimization-in-Decentralized-Traffic-Networks',
      demoLink: null
    },
    {
      title: 'Linear Regression Analysis: Head Size vs. Brain Weight',
      duration: 'Self-Study Project',
      organization: 'Independent',
      teamSize: 1,
      description: 'This project implements a simple linear regression model to analyze the relationship between head size and brain weight using the headbrain.csv dataset. It demonstrates key concepts by calculating slope, intercept, and R² score manually, visualizing data with scatter plots and regression lines, and evaluating model confidence levels. The project also compares manual results with scikit-learn’s built-in regression functions, serving as a comprehensive guide for beginners in linear regression and Python libraries.',
      skills: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib', 'Linear Regression', 'Data Analysis', 'Machine Learning'],
      keyOutcomes: 'Successfully implemented and compared linear regression models both manually and using scikit-learn, providing a foundational understanding of the algorithm and its practical application in data analysis.',
      category: 'Data Science & ML',
      featured: true,
      githubLink: 'https://github.com/DevKansara97/Linear-Regression-Analysis-Head-Size-vs.-Brain-Weight',
      demoLink: null
    },
    {
      title: 'QR Code Generator Application',
      duration: 'Academic Project (First Year)',
      organization: 'Ahmedabad University',
      teamSize: 1,
      description: 'Developed a user-friendly desktop application for generating QR codes for text and location data. This project addresses the ubiquitous need for quick information sharing in marketing, event management, product packaging, and contactless payments. The application allows users to easily generate QR codes, save them as image files, and display them within the application, demonstrating proficiency in GUI development and integration of external libraries.',
      skills: ['Python', 'tkinter', 'qrcode', 'Pillow (PIL)', 'OS Module'],
      keyOutcomes: 'Successfully created a practical desktop tool for QR code generation and display, showcasing skills in GUI development and file handling. The project provides a foundation for future extensions like batch processing and database integration.',
      category: 'Software Development',
      featured: true,
      githubLink: 'https://github.com/DevKansara97/QR-code-generator',
      demoLink: null
    },
    {
      title: 'Optical Character Recognition (OCR) using Tesseract',
      duration: 'Aug 2024 Sep 2025', 
      organization: 'Team Project', // Assuming a team project based on Team Size
      teamSize: 4,
      description: 'Developed an OCR system using Python, integrating Tesseract OCR, OpenCV, and Pillow for accurate text detection and extraction from images. A key focus was on image pre-processing techniques using Pillow to improve text recognition accuracy and optimize the overall process.',
      skills: ['Python', 'Tesseract OCR', 'OpenCV', 'Pillow', 'Image Processing', 'Text Recognition'],
      keyOutcomes: 'Improved text recognition accuracy and optimized image pre-processing techniques, demonstrating practical application of OCR technologies.',
      category: 'Computer Vision & AI', // New category
      featured: true,
      githubLink: null, // Placeholder, please provide if available
      demoLink: null // Placeholder, please provide if available
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hardware Design':
        return 'bg-portfolio-blue/1 text-portfolio-blue-dark border-portfolio-blue';
      case 'Algorithms & AI':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Web Development':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Data Science & ML':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Software Development':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Computer Vision & AI': // New category color
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical projects, from hardware design to algorithmic solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Code className="w-8 h-8 text-portfolio-blue-dark" />
              Featured Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark animate-slide-in-left">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{project.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {project.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              Team of {project.teamSize}
                            </span>
                          </div>
                          <p className="text-portfolio-blue-dark font-medium mb-4">{project.organization}</p>
                        </div>
                        <Badge className={`ml-4 ${getCategoryColor(project.category)} hover:${getCategoryColor(project.category)}`}>
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                        <p className="text-gray-600">{project.keyOutcomes}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-portfolio-blue-dark text-portfolio-blue-dark">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {project.githubLink && (
                          <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.demoLink && (
                          <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
