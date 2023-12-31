
"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact", .65);

  return (
    <motion.section id="contact" ref = {ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial= {{opacity: 0, }}
    whileInView={{opacity: 1,}}
    transition={{duration: 1,}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contact me directly at {" "} 
        <a className='underline' href="mailto:elizzakaimachiande@gmail.com"> elizzakaimachiande@gmail.com </a> {" "}
        or through this form.</p>

        <form className='mt-10 flex flex-col'>
            <input className='h-14 px-4 rounded-lg borderBlack ' type="email" placeholder='Your email' />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message'/>
            <button type = "submit" className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /> {" "} 
            </button>
        </form>
    </motion.section>
  )
}
