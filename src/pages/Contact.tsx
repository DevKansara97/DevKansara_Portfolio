import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';

// Import Firestore functions and the initialized db instance
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if firebase.js is in a different location

import { useState } from 'react'; // Import useState hook

// Custom LeetCode Icon Component (retained from previous update)
const LeetCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.23 1.23 0 0 0-.963.637L7.15 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982zM3.535 0a1.23 1.23 0 0 0-.963.637L-2.838 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982z" />
  </svg>
);

// Custom Codeforces Icon Component (retained from previous update)
const Codeforces = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.8 0H5.2C2.3 0 0 2.3 0 5.2v13.6C0 21.7 2.3 24 5.2 24h13.6c2.9 0 5.2-2.3 5.2-5.2V5.2C24 2.3 21.7 0 18.8 0zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-10.9c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4z" />
  </svg>
);


const Contact = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(''); // To display success/error messages

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
      url: 'https://www.linkedin.com/in/devkansara97/',
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Dev_Kansara97/',
      icon: LeetCode
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Dev_Kansara',
      icon: Codeforces
    }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form refresh
    setIsSending(true);
    setStatus(''); // Clear previous status message

    try {
      // Add a new document to the 'messages' collection in Firestore
      // UPDATED: Use the new project ID 'dev-kansara' in the collection path
      await addDoc(collection(db, `artifacts/dev-kansara/public/data/messages`), {
        name,
        email,
        subject,
        message,
        timestamp: new Date(), // Add a timestamp for when the message was sent
      });
      setStatus('Message sent successfully!');
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSending(false); // Re-enable the button
    }
  };

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
              I'm always open to discussing new opportunities, interesting projects!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card
                      key={index}
                      className="p-6 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-blue-dark">
                          <contact.icon className="w-6 h-6 text-white" />
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
                <Button
                  className="bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white"
                  asChild
                >
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="p-8 bg-white border-portfolio-blue/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Send Me a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="border-gray-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="border-gray-300"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white" disabled={isSending}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSending ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status && (
                    <p className={`text-center text-sm mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                      {status}
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Connect With Me Online</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 text-center hover-lift bg-white border-portfolio-blue/5 animate-fade-in">
                  <div className="w-16 h-16 bg-portfolio-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* Render the custom icon component */}
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">{social.name}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white"
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
                className="bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white"
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
