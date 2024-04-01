'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}
const FeaturedCourses = () => {
    const featuresdCourses = courseData.courses.filter((course: Course) => course.
        isFeatured)
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <div className="text-center">
                    <h2
                        className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED COURSES
                    </h2>
                    <p className='mt-2 text-3xl tracking-tight leading-8
                    font-extrabold text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>


            <div className="container mx-auto px-4">
  <div className='mt-10'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
      {featuresdCourses.map((course: Course) => (
        <div key={course.id} className="flex justify-center">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-2 text-white">{course.title}</h3>
              <p className="text-gray-200 text-center">{course.description}</p>
              <p className="text-center mt-4 text-gray-300">Instructor: {course.instructor}</p>
              <p className="text-center mt-2 text-yellow-400">Price: ${course.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>





            <div className='mt-20 text-center'>
                <Link href={'/courses'}
                    className='px-4 py-2 rounded border border-neutral-600 
                text-neutral-700 bg-white  hover:bg-gray-100 transition duration-200'
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses