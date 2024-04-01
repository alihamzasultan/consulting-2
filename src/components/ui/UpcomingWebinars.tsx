'use client'
import Link from "next/link"
import { HoverEffect } from "../ui/card-hover-effect";


function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'AI Usage Advisory',
      description:
        'Expert advice on leveraging AI technologies to drive business growth and innovation.',
      slug: 'ai-usage-advisory',
      isFeatured: true,
    },
    {
      title: 'Custom Solutions Licensing',
      description:
        'Licensing of custom AI solutions tailored to meet specific business needs and challenges.',
      slug: 'custom-solutions-licensing',
      isFeatured: true,
    },
    {
      title: 'PyTorch Large Language Models Development',
      description:
        'Development of custom PyTorch Large Language Models for advanced AI applications.',
      slug: 'pytorch-large-language-models-development',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SERVICES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Unlock the Power of AI</p>
        </div>
       
        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars