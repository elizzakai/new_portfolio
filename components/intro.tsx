
"use client";


import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowRight} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();
  return (
    <section ref = {ref} id="home" className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0 '>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial= {{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: "tween", duration: 0.2,}}
                >
                <Image
                src="/imgs/mee.jpeg"
                alt = "Elizza picture"
                height= "192"
                width="192"
                quality = "95"
                priority = {true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1'
                />
                </motion.div>


                <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial= {{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: "spring", stiffness: 125, delay:0.1, duration:0.7}}
                >
                  🐝
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px=4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial = {{opacity: 0, y: 100}}
        animate = {{opacity: 1, y: 0}}
        >
        <span className="font-bold">hello, i'm elizza.</span> i'm a{" "}
        <span className="font-bold">computational media student </span> from {" "}
        <span className="font-bold">georgia tech.</span> {" "} 
        <span className="">i currently work as a </span> {" "}
        <span className="font-bold">research assistant </span> at the {" "}
        <span className="italic">school of interactive computing.</span> {" "}
        <span className="">my focus is </span> {" "} 
        <span className="font-bold"> frontend swe & design </span> using {" "}
        <span className="underline">react, angular, </span> {" "}
        <span className="underline"> figma, illustrator </span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial = {{opacity: 0, y: 100 }}
        animate = {{opacity: 1, y:0}}
        transition={{delay: .1,}}
        >
          <Link href ="#contact"
          className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>
            Contact me here  <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
          </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack' href="/cv_liza_dev.pdf" download>
              develop.CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack' href="/cv_elizza_desi.pdf" download>
              design.CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='bg-white p-4 text-gray-700 py-3 flex items-center gap-2  text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack'
            href = "https://linkedin.com/in/elizza/" target = "_blank">
            <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 py-3 flex items-center gap-2  text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack'
            href = "https://github.com/elizzakai" target = "_blank">
            <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
