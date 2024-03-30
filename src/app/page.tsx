
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import { TabsDemo } from "@/components/TabsDemo";
import MusicTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";



import UpcomingWebinars from "@/components/ui/UpcomingWebinars";





export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) ">
      
      <HeroSection/>
      <TabsDemo/>
      <FeaturedCourses/> 

      <MusicTestimonialCards />
      <UpcomingWebinars />
      <Footer/>
      
      
    </main>


  );
}
