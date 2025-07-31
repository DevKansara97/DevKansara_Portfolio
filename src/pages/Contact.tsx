import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, X, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import emailjs from '@emailjs/browser';

// Custom LeetCode Icon Component
const LeetCode = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.23 1.23 0 0 0-.963.637L7.15 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982zM3.535 0a1.23 1.23 0 0 0-.963.637L-2.838 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982z" />
  </svg>
);

// Custom Codeforces Icon Component
const Codeforces = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.8 0H5.2C2.3 0 0 2.3 0 5.2v13.6C0 21.7 2.3 24 5.2 24h13.6c2.9 0 5.2-2.3 5.2-5.2V5.2C24 2.3 21.7 0 18.8 0zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-10.9c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4z" />
  </svg>
);

const Contact = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({ type: '', title: '', text: '' });

  // Ref for the form element, needed by EmailJS
  const form = useRef(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("yCJlIdWmSxjkCsX2d");
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'devrk485@gmail.com',
      link: 'mailto:devrk485@gmail.com',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      await emailjs.sendForm('service_1pdir67', 'template_8x804cn', form.current, 'yCJlIdWmSxjkCsX2d');

      setMessageBoxContent({
        type: 'success',
        title: 'Message Sent!',
        text: 'Thank you for your message. I will get back to you soon.'
      });
      setShowMessageBox(true);

      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessageBoxContent({
        type: 'error',
        title: 'Failed to Send Message',
        text: 'There was an error sending your message. Please try again later.'
      });
      setShowMessageBox(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects!
            </p>
          </div>

          {/* Main Content Grid: Stacks on small screens, 2 columns on large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column Content (Contact Info, Resume) */}
            <div className="flex flex-col gap-8">
              {/* Contact Information List */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark transition-all duration-300 ease-in-out"
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
                            target={contact.link.startsWith('mailto:') || contact.link.startsWith('tel:') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('mailto:') || contact.link.startsWith('tel:') ? 'noopener noreferrer' : ''}
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

              {/* Resume */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins text-center lg:text-left">Resume</h3>
                <Button
                  className="bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white transition-colors duration-300 ease-in-out mx-auto lg:mx-0"
                  asChild
                >
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column Content (Contact Form) */}
            <div>
              <Card className="p-6 bg-white border-portfolio-blue/20 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 h-full">
                <h2 className="text-xl font-bold text-gray-900 mb-6 font-poppins text-center">Send Me a Message</h2>
                <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="first_name"
                        type="text"
                        placeholder="Your First Name"
                        className="border-gray-300"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="last_name"
                        type="text"
                        placeholder="Your Last Name"
                        className="border-gray-300"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="border-gray-300"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your project or opportunity..."
                      rows={6}
                      className="border-gray-300"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white transition-colors duration-300 ease-in-out" disabled={isSending}>
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
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">Connect With Me Online</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 text-center hover-lift bg-white border-portfolio-blue/5 h-full">
                  <div className="w-16 h-16 bg-portfolio-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">{social.name}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-portfolio-blue-dark text-portfolio-blue-dark hover:bg-portfolio-blue-dark hover:text-white transition-colors duration-300 ease-in-out"
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
            <Card className="p-8 bg-gradient-to-r from-portfolio-blue/10 to-portfolio-blue-dark/10 border-portfolio-blue/30 max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
                Let's Build Something Amazing Together!
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to connect,
                I'd love to hear from you. Let's create something impactful!
              </p>
              <Button
                size="lg"
                className="bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] hover:text-white transition-colors duration-300 ease-in-out"
                asChild
              >
                <a href="mailto:devrk485@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </Card>
          </div>
        </div>

        {/* Custom Message Box */}
        {showMessageBox && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`p-6 rounded-lg shadow-lg max-w-sm w-full text-center border ${
                messageBoxContent.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setShowMessageBox(false)}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
              <div className={`flex items-center justify-center mb-4 ${
                  messageBoxContent.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                {messageBoxContent.type === 'success' ? (
                  <CheckCircle className="w-8 h-8 mr-2" />
                ) : (
                  <XCircle className="w-8 h-8 mr-2" />
                )}
                <h4 className="text-xl font-semibold">{messageBoxContent.title}</h4>
              </div>
              <p className="text-muted-foreground mb-6">
                {messageBoxContent.text}
              </p>
              <Button onClick={() => setShowMessageBox(false)} className="bg-primary hover:bg-secondary">
                Close
              </Button>
            </div>
          </div>
        )}
        
      </section>
    </Layout>
  );
};

export default Contact;
