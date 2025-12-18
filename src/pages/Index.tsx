import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          
          {/* Mobile / Small Screen Version */}
          <div className="block lg:hidden w-full flex flex-col items-center justify-center text-center px-6 py-10">
            {/* Centered Circle Image with Black Border */}
            <div className="w-56 h-56 rounded-full border-4 border-black bg-gradient-to-br from-portfolio-blue to-portfolio-blue-dark flex items-center justify-center shadow-2xl overflow-hidden mb-8">
              <img
                src="/myImg.png"
                alt="Dev Kansara's Profile Picture"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/320x320/cccccc/ffffff?text=Image+Error";
                  e.currentTarget.alt = "Image failed to load";
                }}
              />
            </div>

            {/* Centered Text Section */}
            <div className="animate-slide-in-left flex flex-col items-center justify-center">
              <p className="text-lg text-gray-600 mb-2 font-inter">Hi, I am</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                Dev Kansara
              </h1>
              <p className="text-lg text-gray-700 font-inter">
                Computer Science Engineering Student <br /> Aspiring Software Engineer
              </p>
            </div>
          </div>

          {/* Desktop / Large Screen Version */}
          <div className="hidden lg:flex h-full w-full items-center translate-x-11">
            {/* Left Content */}
            <div className="w-1/2 px-6 lg:px-12 xl:px-20 z-10 translate-x-10">
              <div className="max-w-2xl animate-slide-in-left translate-x-15">
                <p className="text-lg text-gray-600 mb-4 font-inter">Hi, I am</p>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                  Dev Kansara
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 mb-8 font-inter">
                  Computer Science Engineering Student <br /> Aspiring Software Engineer
                </p>
              </div>
            </div>

            {/* Right Background & Image */}
            <div className="w-1/2 h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-blue-dark/30 transform -skew-x-12 origin-top-right"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-portfolio-blue/10 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center animate-slide-in-right">
                <div className="w-85 h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-blue-dark flex items-center justify-center shadow-2xl overflow-hidden -translate-x-10 -translate-y-10">
                  <img
                    src="/myImg.png"
                    alt="Dev Kansara's Profile Picture"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/320x320/cccccc/ffffff?text=Image+Error";
                      e.currentTarget.alt = "Image failed to load";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Index;
