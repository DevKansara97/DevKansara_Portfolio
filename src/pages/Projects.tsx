
// import { Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import Layout from '@/components/Layout';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Five-Cycle Non-Pipelined RISC Processor (25-bit)',
//       duration: 'Feb 2025 - Apr 2025',
//       organization: 'Ahmedabad University',
//       teamSize: 4,
//       description: 'Implemented a 25-bit RISC processor in Verilog HDL (five-stage non-pipelined). Designed ALU, Control, and Output Logic and integrated all modules for functionality.',
//       skills: ['Verilog HDL', 'Microchip Studio', 'OshonSoft AVR Simulator', 'EDA Playground'],
//       keyOutcomes: 'Successfully designed and integrated 25-bit RISC processor modules (ALU, Control, Output Logic) in Verilog, demonstrating advanced computer architecture and HDL proficiency.',
//       category: 'Hardware Design',
//       featured: true
//     },
//     {
//       title: 'Randomized Route Optimization in Decentralized Traffic Networks',
//       duration: 'Feb 2025 - Mar 2025',
//       organization: 'Ahmedabad University',
//       teamSize: 5,
//       description: 'Developed randomized route optimization for traffic networks using a Boltzmann-like Randomized A* algorithm. Focused on mathematical modeling and problem formulation with Python.',
//       skills: ['Python', 'Google Colab', 'GitHub', 'Probability Theory', 'Graph Data Structure', 'Randomized A* algorithm'],
//       keyOutcomes: 'Implemented Randomized A* for route optimization; modeled problems with Python and Graph Data Structures and enhanced understanding of probability theory in networks.',
//       category: 'Algorithms & AI',
//       featured: true
//     }
//   ];

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'Hardware Design':
//         return 'bg-red-100 text-red-800 border-red-200';
//       case 'Algorithms & AI':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'Web Development':
//         return 'bg-green-100 text-green-800 border-green-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
//               My Projects
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A showcase of my technical projects, from hardware design to algorithmic solutions
//             </p>
//           </div>

//           {/* Featured Projects */}
//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
//               <Code className="w-8 h-8 text-portfolio-blue-dark" />
//               Featured Projects
//             </h2>
//             <div className="space-y-8">
//               {projects.map((project, index) => (
//                 <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue animate-slide-in-left">
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{project.title}</h3>
//                           <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
//                             <span className="flex items-center gap-1">
//                               <Calendar className="w-4 h-4" />
//                               {project.duration}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <Users className="w-4 h-4" />
//                               Team of {project.teamSize}
//                             </span>
//                           </div>
//                           <p className="text-portfolio-blue-dark font-medium mb-4">{project.organization}</p>
//                         </div>
//                         <Badge className={`ml-4 ${getCategoryColor(project.category)} hover:${getCategoryColor(project.category)}`}>
//                           {project.category}
//                         </Badge>
//                       </div>
                      
//                       <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                      
//                       <div className="mb-6">
//                         <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
//                         <p className="text-gray-600">{project.keyOutcomes}</p>
//                       </div>
                      
//                       <div className="mb-6">
//                         <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {project.skills.map((skill, i) => (
//                             <Badge key={i} variant="outline" className="border-portfolio-blue text-portfolio-blue-dark">
//                               {skill}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div className="flex gap-4">
//                         <Button variant="outline" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue hover:text-white">
//                           <Github className="w-4 h-4 mr-2" />
//                           View Code
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Projects;

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
      description: 'Implemented a 25-bit RISC processor in Verilog HDL (five-stage non-pipelined). Designed ALU, Control, and Output Logic and integrated all modules for functionality.',
      skills: ['Verilog HDL', 'Microchip Studio', 'OshonSoft AVR Simulator', 'EDA Playground'],
      keyOutcomes: 'Successfully designed and integrated 25-bit RISC processor modules (ALU, Control, Output Logic) in Verilog, demonstrating advanced computer architecture and HDL proficiency.',
      category: 'Hardware Design',
      featured: true
    },
    {
      title: 'Randomized Route Optimization in Decentralized Traffic Networks',
      duration: 'Feb 2025 - Mar 2025',
      organization: 'Ahmedabad University',
      teamSize: 5,
      description: 'Developed randomized route optimization for traffic networks using a Boltzmann-like Randomized A* algorithm. Focused on mathematical modeling and problem formulation with Python.',
      skills: ['Python', 'Google Colab', 'GitHub', 'Probability Theory', 'Graph Data Structure', 'Randomized A* algorithm'],
      keyOutcomes: 'Implemented Randomized A* for route optimization; modeled problems with Python and Graph Data Structures and enhanced understanding of probability theory in networks.',
      category: 'Algorithms & AI',
      featured: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hardware Design':
        // Changed to use portfolio-blue theme colors
        return 'bg-portfolio-blue/20 text-portfolio-blue-dark border-portfolio-blue';
      case 'Algorithms & AI':
        // Changed to use portfolio-blue theme colors
        return 'bg-portfolio-blue/20 text-portfolio-blue-dark border-portfolio-blue';
      case 'Web Development':
        return 'bg-green-100 text-green-800 border-green-200';
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
                <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue animate-slide-in-left">
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
                            <Badge key={i} variant="outline" className="border-portfolio-blue text-portfolio-blue-dark">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" className="border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue hover:text-white">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
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
