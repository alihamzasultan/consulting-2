
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import CardStackDemo from "@/components/cardsection";


import Pricing from "@/components/pricing";



import UpcomingWebinars from "@/components/ui/UpcomingWebinars";






export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) ">
      
      <HeroSection/>
      
      <UpcomingWebinars />
      <CardStackDemo />

      <Pricing/>
      <Footer/>
      
      
    </main>


  );
}
