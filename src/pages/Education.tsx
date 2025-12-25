import { Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      year: 'Pursuing',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Ahmedabad University',
      school: 'School of Engineering and Applied Science',
      grade: '3.75/4.00 CGPA',
      status: 'current',
      achievements: ['University Merit Scholarship', 'Competitive Programming Team Member']
    },
    {
      year: '2023',
      degree: 'HSC (Science)',
      institution: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
      school: 'St. Francis of Assisi Convent High School, Navsari',
      grade: '91.84%',
      status: 'completed',
      achievements: ['District Topper', 'Student Mentorship Program']
    }
  ];

  const certifications = [
    {
      title: 'Introduction to RISC-V (LFD110)',
      issuer: 'Linux Foundation',
      date: 'May 2025',
      description: 'Gained solid understanding of open-source RISC-V Instruction Set Architecture and assembly programming.',
      link: 'RISC-V Certificate.pdf'
    },
    {
      title: 'Career Essentials in Software Development',
      issuer: 'Microsoft and LinkedIn',
      date: 'Aug 2024',
      description: 'Comprehensive program covering programming principles, development methodologies, and industry best practices.',
      link: 'CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.pdf'
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
              Education & Learning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and continuous learning in computer science and software development
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-portfolio-blue-dark" />
              Academic Background
            </h2>
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={scrollVariants.initial}
                  whileInView={scrollVariants.whileInView}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={scrollVariants.transition}
                >
                  <Card className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-medium text-gray-500 flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </span>
                          {edu.status === 'current' && (
                            <Badge className="bg-portfolio-blue-dark text-white">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{edu.degree}</h3>
                        <p className="text-xl text-portfolio-blue-dark font-semibold mb-1">{edu.institution}</p>
                        <p className="text-gray-600">{edu.school}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <span className="text-3xl font-bold text-portfolio-blue-dark">{edu.grade}</span>
                        <p className="text-sm text-gray-500 font-medium">Academic Performance</p>
                      </div>
                    </div>

                    {edu.achievements && (
                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <Badge key={i} variant="outline" className="border-portfolio-blue-dark/30 text-portfolio-blue-dark py-1.5 px-4 bg-portfolio-blue-dark/5">
                            <Award className="w-4 h-4 mr-2" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Award className="w-8 h-8 text-portfolio-blue-dark" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={scrollVariants.initial}
                  whileInView={scrollVariants.whileInView}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...scrollVariants.transition, delay: index * 0.1 }}
                >
                  <a
                    href={cert.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="p-8 hover-lift bg-white border-portfolio-blue-dark/10 h-full flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-portfolio-blue-dark/5 rounded-xl">
                            <Award className="w-8 h-8 text-portfolio-blue-dark" />
                          </div>
                          {cert.link && (
                            <div className="flex items-center gap-1 text-xs font-semibold text-portfolio-blue-dark uppercase tracking-wider">
                              Verify <ExternalLink className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{cert.title}</h3>
                        <p className="text-portfolio-blue-dark font-semibold mb-2">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                          <Calendar className="w-4 h-4" />
                          {cert.date}
                        </p>
                        <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;