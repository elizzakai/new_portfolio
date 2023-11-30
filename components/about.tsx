"use client";

//update with scroll framer motion for about section
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
export default function About() {


  const {ref} = useSectionInView("About", 0.8);

  return (
    <section ref = {ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32'
    id = "about"
    >
        <SectionHeading> About me</SectionHeading>
        <p className='mb-3'>
        A GT 🐝 {" "}
        <span className="font-medium">December 2023</span> graduate with
        applicable experiences in {" "}
        <span className="font-medium">design & front-end development.</span>.{" "} 
        Looking for
        <span className="italic"> new grad roles </span> for Spring - Fall 2024.
        I do give off
        <span className="font-medium"> curious-george energy </span>, as I am looking to learn new technologies & skills.
        </p>
        <p>
        On a normal day, you can catch me practicing my <span className="underline">ollie</span> and fumbling. {" "}
        </p>
        
    </section>
  )
}
