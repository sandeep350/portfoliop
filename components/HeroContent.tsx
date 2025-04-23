"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        
        {/* Welcome Box */}
        <motion.div 
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9] flex items-center'
        > 
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>
        
        {/* Headline */}
        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="text-lg my-5 max-w-[600px]"
          style={{ color: "#06b6d4" }} 
        >
          <h2>Providing</h2>
          <h2>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700"
              style={{ color: "#7c3aed" }}>
              the best
            </span>
          </h2>
          <h2>project experience</h2>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg my-5 max-w-[600px] text-cyan-500"
          style={{ color: "#ffffff" }}
        >
          I&apos;m a fullstack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#about"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!!
        </motion.a>
      </div>

      {/* Image */}
      <motion.div 
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Illustration of coding and design icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent;
