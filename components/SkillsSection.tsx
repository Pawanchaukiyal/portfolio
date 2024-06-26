
import { skills } from '@/data';
import React from 'react'
import { InfiniteMovingCards } from './ui/imc';

const SkillsSection = () => {
  return (
    <div className='py-20' id='testimonials'>
     <h1 className='heading'>
     What about my 
     <span className='text-purple'>Skills</span>    
    </h1>  

    <div className='flex flex-col items-center max-lg:mt-10'>
    <InfiniteMovingCards
     items={skills}
     direction="right"
     speed='slow'
    />
    </div>
  
    </div>
  )
}

export default SkillsSection
