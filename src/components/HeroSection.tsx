import Link from "next/link"; // a tags hame
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundBeams } from "./ui/background-beams";
import Pricing from "@/components/pricing";


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[65rem] w-full rounded-md flex flex-
     items-center justify-center relative overflow-hidden 
     mx-auto py-18 md:py-0 "
     >
      
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      
       <div className="p-4 relative z-10 w-full text-center">
        

<h1 className="mt-60 md:my-0 text-4xl md:text-7xl
       font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
       "> 
       Morgana: Elevating with AI-Driven Innovation
       </h1>
       <p
       className="mt-20 font-normal text-base md:text-lg
        text-neutral-300 max-w-lg mx-auto" // mx-margin left and right
       >Experience the Future: Seamlessly Designed, Securely Deployed, and Expertly Crafted by Our Team</p>

         <div className="mt-4">
            <Link href={"<Pricing/>"}>
                <Button 
                borderRadius="1.7rem"The Best Consultation
                
                className="bg-white dark:bg-black
                text-black dark:text-white 
                border-neutral-200 dark:border-slate-800"
                >
                    Get Started 
                    </Button>
                </Link>
         </div>
       </div>

        
        </div> 
        
        // mx max width
  )
}


export default HeroSection