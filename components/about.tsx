"use client";

//update with scroll framer motion for about section
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {motion, useScroll, useTransform} from 'framer-motion'
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target: ref,
      offset:[ "0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1]);
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1]);

  return (
    <motion.section ref = {ref} style= {{scale:scaleProgress, opacity:opacityProgress,}} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    // initial= {{opacity: 0, y:100}}
    // animate= {{opacity:1, y:0}}
    // transition={{delay:0.00100000075}}
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
        
    </motion.section>
  )
}
