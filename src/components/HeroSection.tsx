import Link from "next/link"; // a tags hame
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";




const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-
     items-center justify-center relative overflow-hidden 
     mx-auto py-18 md:py-0 "
     >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
       <div className="p-4 relative z-10 w-full text-center">
        

<h1 className="mt-200 md:my-0 text-4xl md:text-7xl
       font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
       "> 
        Master the art of music
       </h1>
       <p
       className="mt-4 font-normal text-base md:text-lg
        text-neutral-300 max-w-lg mx-auto" // mx-margin left and right
       >Lorem, ipsum dolor sit amet consectetur adipisicing 
        elit. Consequuntur minima eos qui. In omnis reiciendis
         nam similique praesentium laboriosam quae eveniet 
         magni laudantium illo animi ipsa alias, assumenda 
         hic quisquam.</p>

         <div className="mt-4">
            <Link href={"/courses"}>
                <Button 
                borderRadius="1.7rem"
                className="bg-white dark:bg-black
                text-black dark:text-white 
                border-neutral-200 dark:border-slate-800"
                >
                    Explore courses
                    </Button>
                </Link>
         </div>
       </div>

        
        </div> 
        
        // mx max width
  )
}


export default HeroSection