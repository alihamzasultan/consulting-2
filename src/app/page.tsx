import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MusicTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/ui/Instructors";

import UpcomingWebinars from "@/components/ui/UpcomingWebinars";





export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) ">
      
      <HeroSection/>
      <FeaturedCourses/> 
      <WhyChooseUs/>
      <MusicTestimonialCards />
      <UpcomingWebinars />
      <Instructors/>
      <Footer/>
      
      
    </main>


  );
}
