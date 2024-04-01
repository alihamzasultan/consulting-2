import React from 'react';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';

// Define the AboutUs component
function AboutUs() {
  // Data for each team member
  const teamMembers = [
    {
      name: "Zeus",
      role: "Chairman and CEO",
      bio: "Graduated from Texas Tech University with a Master of Business Administration and a Master of Science in Data Science. Over 5 years of professional experience as a Data Scientist building data science systems for the public and private sector.",
      image: "courses/m1.jpg"
    },
    {
      name: "Hades",
      role: "Chief Operations Officer",
      bio: "Over 15+ years of experience developing custom software and machine learning solutions. Specializes in real estate, blockchain technology, and machine learning.",
      image:  "courses/m2.jpg"
    },
    {
      name: "Poseidon",
      role: "Chief Technology Officer",
      bio: "Over 10 years of experience developing custom software and PyTorch Large Language Models. Provides educational content on developing Large Language Models through courses and YouTube videos.",
      image:  "courses/m3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36 relative ">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-gray-800 dark:text-white">
          About Us
        </h1>
        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6 mb-8 transition-transform transform hover:scale-105">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            We are a software and consulting company dedicated to leveraging AI to create innovative solutions that add value to our clients' businesses. Our mission is to empower organizations with AI-driven insights and technologies, enabling them to thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map through each team member to create a card */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img className="w-full h-64 object-cover object-center shadow-md" src={member.image} alt={member.name} /> {/* Fixed height of 64px */}
              <div className="p-4 text-black dark:text-white">
                <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
                <p className="text-teal-500 text-sm mb-2">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12"></div> {/* Add margin from the bottom to prevent content from touching the footer */}
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
