import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import {FaLocationArrow} from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pt-36 pb-20'>

     <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" 
      />
      <Spotlight className='top-10 h-[80vh] w-[50vw] left-full' fill="purple" 
      />            
      <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill="blue" 
      />
     </div>     
         {/* grid ag from materia uind dot b */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> 
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-3xl text-center  text-blue-100 max-w-80 '>
           {/* Web page using Nexjs and Acternity */}
           Welcome To My Portfolio
          </h2>

          <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words="Shaping visions into flawless user experiences"
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hey👋👋 I&apos;m Pawan Chaukiyal, a Full Stack Web Devloper
          </p>

          <a href="#projects">
          <MagicButton
           title="show my work"
           icon={<FaLocationArrow/>}
           position='right'
           />
          </a>

        </div>
      </div>

    </div>
  )
}

export default Hero
