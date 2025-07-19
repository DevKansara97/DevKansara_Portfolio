import { Calendar, MapPin, Users, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Work = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      organization: 'MICA University, Ahmedabad',
      supervisor: 'Prof. Suresh Malodia',
      duration: 'Jun 2025 - Jul 2025',
      type: 'Internship',
      location: 'Ahmedabad, Gujarat',
      description: 'Worked on developing an interactive web application for a prompt engineering game, simulating real-world traffic problems with separate student/professor interfaces.',
      responsibilities: [
        'Developed interactive web application using modern web technologies',
        'Implemented real-time data synchronization using Firebase Firestore'
      ],
      skills: [
        { name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
        { name: 'Firebase', url: 'https://en.wikipedia.org/wiki/Firebase' },
        { name: 'Web Development', url: 'https://en.wikipedia.org/wiki/Web_development' },
        { name: 'Prompt Engineering', url: 'https://en.wikipedia.org/wiki/Prompt_engineering' },
        { name: 'Real-time Systems', url: 'https://en.wikipedia.org/wiki/Real-time_computing' }
      ]
    },
    {
      title: 'Volleyball Teaching Assistant',
      organization: 'Ahmedabad University',
      program: 'Work Study Program',
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
        { name: 'Sports Coaching', url: 'https://en.wikipedia.org/wiki/Coach_(sport)' },
        { name: 'Team Management', url: 'https://en.wikipedia.org/wiki/Team_management' },
        { name: 'Student Mentoring', url: 'https://en.wikipedia.org/wiki/Mentorship' }
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
        'Helping juniors improve their problem-solving skills',
        'Organizing coding practice sessions'
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey through internships, teaching roles, and leadership positions
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-portfolio-blue-dark" />
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark animate-slide-in-left">
                  <div className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{exp.title}</h3>
                        <p className="text-xl text-portfolio-blue-dark font-semibold mb-2">{exp.organization}</p>
                        {exp.supervisor && (
                          <p className="text-gray-600 mb-2">Under supervision of {exp.supervisor}</p>
                        )}
                        {exp.program && (
                          <p className="text-gray-600 mb-2">Program: {exp.program}</p>
                        )}
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
                      <Badge variant="secondary" className="bg-portfolio-blue-dark text-white self-start hover:bg-portfolio-blue-dark">
                        {exp.type}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
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
                          <Badge key={i} variant="outline" className="border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white cursor-pointer">
                            <a href={skill.url} target="_blank" rel="noopener noreferrer">
                              {skill.name}
                            </a>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="mt-16"> {/* Added top margin for separation */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Users className="w-8 h-8 text-portfolio-blue-dark" />
              Positions of Responsibility
            </h2>
            {/* Removed flex justify-center wrapper */}
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="p-6 hover-lift bg-white border-portfolio-blue/20 animate-slide-in-left"> {/* Re-added animate-slide-in-right */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{position.title}</h3>
                      <p className="text-portfolio-blue-dark font-semibold mb-2">{position.organization}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4" />
                        {position.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{position.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <div className="w-2 h-2 bg-portfolio-blue-dark rounded-full mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
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

export default Work;
