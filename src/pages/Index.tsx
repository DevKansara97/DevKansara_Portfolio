import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section with Asymmetrical Design */}
        <div className="relative h-screen flex items-center translate-x-11">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-6 lg:px-12 xl:px-20 z-10 translate-x-10">
            {/*
              Added 'translate-x-8' to shift the text content block slightly to the right.
              This will move it 32px (8 Tailwind units) to the right from its original position.
            */}
            <div className="max-w-2xl animate-slide-in-left translate-x-15">
              <p className="text-lg text-gray-600 mb-4 font-inter">Hi, I am</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                Dev Kansara
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 font-inter">
                Computer Science Engineering Student <br/> Aspiring Software Engineer 
              </p>
            </div>
          </div>

          {/* Right Side - Background Design */}
          <div className="hidden lg:block lg:w-1/2 h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-blue-dark/30 transform -skew-x-12 origin-top-right"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-portfolio-blue/10 to-transparent"></div>

            {/* Container for your photo */}
            <div className="absolute inset-0 flex items-center justify-center animate-slide-in-right">
              {/*
                Added '-translate-x-8' to shift the circular image container slightly to the left.
                This will move it 32px (8 Tailwind units) to the left from its original centered position.
              */}
              <div className="w-85 h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-blue-dark flex items-center justify-center shadow-2xl overflow-hidden -translate-x-10 -translate-y-10">
                <img
                  src="/myImg.png"
                  alt="Dev Kansara's Profile Picture"
                  className="w-full h-full object-cover rounded-full -translate-y-"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/320x320/cccccc/ffffff?text=Image+Error"; // Fallback
                    e.currentTarget.alt = "Image failed to load";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

