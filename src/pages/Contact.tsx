
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dev.k1@ahduni.edu.in',
      link: 'mailto:dev.k1@ahduni.edu.in',
      primary: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7990943632',
      link: 'tel:+917990943632'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Navsari, Gujarat, India'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DevKansara97',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dev-kansara',
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Dev_Kansara97/',
      icon: ExternalLink
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Dev_Kansara',
      icon: ExternalLink
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className={`p-6 hover-lift bg-white ${contact.primary ? 'border-l-4 border-l-portfolio-blue' : 'border-portfolio-blue/20'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${contact.primary ? 'bg-portfolio-blue' : 'bg-portfolio-blue/20'}`}>
                          <contact.icon className={`w-6 h-6 ${contact.primary ? 'text-white' : 'text-portfolio-blue-dark'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{contact.label}</h3>
                          {contact.link ? (
                            <a 
                              href={contact.link} 
                              className="text-portfolio-blue-dark hover:text-portfolio-blue transition-colors font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="animate-slide-in-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Resume</h3>
                <Button className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="p-8 bg-white border-portfolio-blue/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Send Me a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input id="name" type="text" placeholder="Your Name" className="border-gray-300" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" type="text" placeholder="What's this about?" className="border-gray-300" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Connect With Me Online</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 text-center hover-lift bg-white border-portfolio-blue/20 animate-fade-in">
                  <div className="w-16 h-16 bg-portfolio-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">{social.name}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-portfolio-blue text-portfolio-blue-dark hover:bg-portfolio-blue hover:text-white"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-portfolio-blue/10 to-portfolio-blue-dark/10 border-portfolio-blue/30">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Let's Build Something Amazing Together!
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to connect, 
                I'd love to hear from you. Let's create something impactful!
              </p>
              <Button 
                size="lg" 
                className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white"
                asChild
              >
                <a href="mailto:dev.k1@ahduni.edu.in">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
