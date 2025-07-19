import { Trophy, Medal, Users, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const ExtraCurricular = () => {
  const achievements = [
    {
      title: 'District Level Volleyball Player',
      category: 'Sports Achievement',
      description: 'Selected for Gandhinagar district volleyball team demonstrating athletic skills and sportsmanship.',
      details: [
        'Selected for district-level volleyball team',
        'Competed in state-level tournaments'
      ],
      icon: Trophy,
      featured: true
    },
    {
      title: 'Ahmedabad University Volleyball Team',
      category: 'University Sports',
      duration: 'Aug 2024 - Apr 2025',
      description: 'Right Spiker in the university volleyball team, representing Ahmedabad University in inter-university competitions.',
      details: [
        'Selected as right spiker for university team',
        'Selected for Gandhinagar District Team'
      ],
      icon: Medal,
      featured: true
    }
  ];

  const volunteerWork = [
    {
      title: 'Volunteer at TIDE Foundation',
      organization: 'Together in Development and Education (TIDE) Foundation',
      duration: 'Mar 2025 - Apr 2026',
      hours: '30 hours',
      description: 'Volunteered to guide government school students in identifying and solving local social problems using simple, innovative solutions.',
      responsibilities: [
        'Mentored government school students on problem-solving approaches',
        'Helped students identify local social issues in their communities'
      ],
      impact: [
        'Worked with 30+ students from government schools',
        'Helped develop a community-focused solution proposal'
      ]
    }
  ];

  const leadership = [
    {
      title: 'Student Mentorship & Guidance',
      role: 'Navsari District 1st',
      organization: 'SFA Convent High School',
      duration: 'May 2025',
      description: 'Mentored high school students as District Topper (HSC 2023), sharing strategies for academic success and goal achievement.',
      activities: [
        'Conducted a mentorship session for high school students',
        'Shared study strategies and time-management techniques'
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
              Extra-Curricular Activities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond academics, I'm passionate about sports, community service, and leadership development
            </p>
          </div>

          {/* Sports Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Trophy className="w-8 h-8 text-portfolio-blue-dark" />
              Sports Achievements
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark animate-slide-in-left">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-portfolio-blue-dark rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-portfolio-blue-dark text-white hover:bg-portfolio-blue-dark">
                          {achievement.category}
                        </Badge>
                        {achievement.featured && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{achievement.title}</h3>
                      {achievement.duration && (
                        <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4" />
                          {achievement.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Users className="w-8 h-8 text-portfolio-blue-dark" />
              Community Service
            </h2>
            {volunteerWork.map((work, index) => (
              <Card key={index} className="p-8 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark animate-slide-in-left">
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{work.title}</h3>
                      <p className="text-xl text-portfolio-blue-dark font-semibold mb-2">{work.organization}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {work.duration}
                        </span>
                        <Badge variant="outline" className="border-green-500 text-green-600">
                          {work.hours} volunteered
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{work.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Responsibilities</h4>
                    <ul className="space-y-2">
                      {work.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <div className="w-2 h-2 bg-portfolio-blue-dark rounded-full mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Impact Created</h4>
                    <ul className="space-y-2">
                      {work.impact.map((impact, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Leadership Experience */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins flex items-center gap-3">
              <Award className="w-8 h-8 text-portfolio-blue-dark" />
              Leadership & Mentorship
            </h2>
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 hover-lift bg-white border-portfolio-blue/20 animate-slide-in-left">
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">{leader.title}</h3>
                      <p className="text-xl text-portfolio-blue-dark font-semibold mb-2">{leader.role}</p>
                      <p className="text-gray-600 mb-2">{leader.organization}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4" />
                        {leader.duration}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-portfolio-blue-dark text-white self-start hover:bg-portfolio-blue-dark">
                      Leadership
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{leader.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Activities</h4>
                  <ul className="space-y-2">
                    {leader.activities.map((activity, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <div className="w-2 h-2 bg-portfolio-blue-dark rounded-full mt-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExtraCurricular;
