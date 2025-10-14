import React from 'react'
import HeroPic from '../../assets/Chopper540.jpg';

const projectsCard = () => {
  return (
    <div className='max-w-md max-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
        <div className='md:flex'>
            <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                    Hospital Management System
                </div>
                <a href='#'>Subheading</a>
                <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus delectus consequatur.
                </p>
            </div>
            <div className='md:shrink-0 p-5'>
                <img src={HeroPic} alt='Hero' width={150} height={150}/>
            </div>
        </div>
    </div>
  )
}

export default projectsCard