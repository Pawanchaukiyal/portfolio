import React from 'react';
import {companies} from '@/data'

const companySection = () => {
  return (
    <div className='py-20'>
     {/* <h1 className='heading text-2xl'> 
  Tools
     </h1>     */}
     <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
        {companies.map(({id,img,name,nameImg})=>(
           <div key={id} className='flex md:max-w-60 max-w-32 gap-2'> 
             <img
             src={img}
             alt={name}
             className='md:w-10 w-5'
             />
            <img
             src={nameImg}
             alt={name}
             className='md:w-24 w-20'
             />
           </div>
        ))}
    </div>
    </div>
  )
}

export default companySection