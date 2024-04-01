"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  return (
<div className="h-[40rem] flex items-center flex-col justify-center w-full">
  <h2 className="text-center text-2xl font-bold mb-4">Our Exceptional Team</h2>
  <h3 className="text-center text-lg  mb-8">Meet the talented individuals driving our success</h3>
  <div className="flex items-center justify-center w-full">
    <CardStack items={CARDS} />
  </div>
</div>


  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Zues",
    designation: "Chairman and CEO of Morgana",
    content: (
      <p>
    Has over<Highlight>5 years</Highlight> of professional
experience as a Data Scientist building data science systems for the
public and private sector
      </p>
    ),
  },
  {
    id: 1,
    name: "Hades",
    designation: "Chief Operations Officer of Morgana",
    content: (
<p>
  <Highlight>15+ years</Highlight>
   of developing custom software and machine learning solutions
  with an interest in real estate, blockchain technology, and machine
  learning.
</p>

    ),
  },
  {
    id: 2,
    name: "Poseidon",
    designation: "Chief Technology Officer of Morgana",
    content: (
<p>
  <Highlight>Poseidon </Highlight>  with
  <Highlight> over 10 years </Highlight> experience in custom software development,
  PyTorch Large Language Models, course creation, and YouTube content production.
</p>


    ),
  },
];

export default CardStackDemo;