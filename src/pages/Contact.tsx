import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; 
import { useState } from 'react';

// Custom Icons
const LeetCode = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.23 1.23 0 0 0-.963.637L7.15 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982zM3.535 0a1.23 1.23 0 0 0-.963.637L-2.838 11.838a1.23 1.23 0 0 0 0 1.206l5.37 11.201a1.23 1.23 0 0 0 .963.637h6.982a1.23 1.23 0 0 0 1.134-.783 1.23 1.23 0 0 0-.214-1.27l-5.37-11.201a1.23 1.23 0 0 0 0-1.206l5.37-11.201a1.23 1.23 0 0 0 .214-1.27 1.23 1.23 0 0 0-1.134-.783h-6.982z" />
  </svg>
);

const Codeforces = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.8 0H5.2C2.3 0 0 2.3 0 5.2v13.6C0 21.7 2.3 24 5.2 24h13.6c2.9 0 5.2-2.3 5.2-5.2V5.2C24 2.3 21.7 0 18.8 0zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-10.9c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4z" />
  </svg>
);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dev.k1@ahduni.edu.in', link: 'mailto:dev.k1@ahduni.edu.in' },
    { icon: Phone, label: 'Phone', value: '+91 7990943632', link: 'tel:+917990943632' },
    { icon: MapPin, label: 'Location', value: 'Navsari, Gujarat, India' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/DevKansara97', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devkansara97/', icon: Linkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Dev_Kansara97/', icon: LeetCode },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Dev_Kansara', icon: Codeforces }
  ];

  // Slow Cinematic Motion Config
  const slowScrollVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: 1.2, // Slowed down from 0.8 to 1.2
      ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth flow
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');
    try {
      await addDoc(collection(db, `artifacts/dev-kansara/public/data/messages`), {
        name, email, subject, message, timestamp: new Date(),
      });
      setStatus('Message sent successfully!');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just a friendly chat about tech!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Column */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={slowScrollVariants}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Contact Details</h2>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-6 hover-lift bg-white border-l-4 border-l-portfolio-blue-dark shadow-sm">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-portfolio-blue-dark shadow-lg">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{contact.label}</p>
                      {contact.link ? (
                        <a href={contact.link} className="text-lg font-semibold text-gray-900 hover:text-portfolio-blue-dark transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-900">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              <motion.div transition={{ delay: 0.3 }} className="pt-6">
                <Button className="h-14 px-8 bg-portfolio-blue-dark text-white hover:bg-[#6bb7cc] transition-all shadow-lg" asChild>
                  <a href="/Resume.pdf" target="_blank">
                    <Download className="w-5 h-5 mr-3" />
                    Download Full Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Form Column - Slightly delayed for a "wave" effect */}
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={slowScrollVariants}
              transition={{ ...slowScrollVariants.transition, delay: 0.2 }}
            >
              <Card className="p-8 lg:p-10 bg-white border-gray-100 shadow-xl rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Dev Kansara" className="h-12 bg-gray-50 border-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dev@example.com" className="h-12 bg-gray-50 border-none" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                    <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Project Inquiry" className="h-12 bg-gray-50 border-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your vision..." rows={5} className="bg-gray-50 border-none resize-none" required />
                  </div>
                  <Button type="submit" disabled={isSending} className="w-full h-14 bg-portfolio-blue-dark text-white text-lg font-bold hover:bg-[#5ea4b8] shadow-lg transition-all">
                    {isSending ? 'Sending Message...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-3" />
                  </Button>
                  {status && <p className={`text-center font-medium mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>{status}</p>}
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Social Grid with Staggered Slow Delay */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center font-poppins tracking-wide">Professional Presence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.2, // Staggered delay for each card
                    ease: "easeOut" 
                  }}
                >
                  <Card className="group p-6 text-center hover:border-portfolio-blue-dark transition-all duration-500 bg-white shadow-sm hover:shadow-xl cursor-pointer relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 w-1 h-full bg-portfolio-blue-dark scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                    <div className="w-12 h-12 bg-gray-50 group-hover:bg-portfolio-blue-dark rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-500">
                      <social.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{social.name}</h3>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-portfolio-blue-dark uppercase tracking-widest hover:underline">
                      View Profile
                    </a>
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

export default Contact;