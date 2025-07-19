import { Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Education = () => {
  const educationData = [
    {
      year: 'Pursuing',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Ahmedabad University',
      school: 'School of Engineering and Applied Science',
      grade: '3.76/4.00 CGPA',
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

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Education & Learning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and continuous learning in computer science and software development
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-portfolio-blue-dark" />
              Academic Background
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <Card key={index} className={`p-8 hover-lift bg-white border-l-4 ${edu.status === 'current' ? 'border-l-portfolio-blue-dark' : 'border-l-portfolio-blue-dark'} animate-slide-in-left`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 lg:mb-0">
                      <div className={`w-3 h-3 rounded-full ${edu.status == 'current' ? 'bg-portfolio-blue-dark' : 'bg-portfolio-blue-dark'}`}></div>
                      <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                      {edu.status === 'current' && (
                        <Badge
                          variant="secondary"
                          className="bg-portfolio-blue-dark text-white hover:bg-portfolio-blue-dark hover:text-white" // Added hover styles
                        >
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-portfolio-blue-dark">{edu.grade}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-600 mb-4">{edu.school}</p>

                  {edu.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="border-portfolio-blue-dark text-portfolio-blue-dark">
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Award className="w-8 h-8 text-portfolio-blue-dark" />
              Certifications
            </h2>
            {/* Added a flex container with justify-center to center the grid */}
            <div className="flex justify-center translate-x-5">
              <div className="grid lg:grid-cols-2 gap-8 translate-x-10">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="p-8 hover-lift bg-white border-portfolio-blue-dark/20 animate-slide-in-right h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{cert.title}</h3>
                          <p className="text-portfolio-blue-dark font-medium mb-1">{cert.issuer}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {cert.date}
                          </p>
                        </div>
                        <div className="flex-shrink-0 ml-4 flex items-center gap-2">
                          <Award className="w-8 h-8 text-portfolio-blue-dark" />
                          {cert.link && <ExternalLink className="w-5 h-5 text-gray-500" />}
                        </div>
                      </div>
                      <p className="text-gray-600">{cert.description}</p>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
