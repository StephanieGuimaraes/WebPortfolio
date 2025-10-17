import React from 'react'
import { CgCodeSlash } from 'react-icons/cg';
import {FaFileDownload} from 'react-icons/fa';

const Hero = () => {
  return (
    <section id='home' className='scroll-m-20 bg-slate-50 py-16'>
        <div className='container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
            <div className='max-w-xl text-center lg:text-left space-y-6'>
                <h1 className='text-xl sm:text-4xl lg:text-6xl font-bold text-indigo-600 leading-tight'>Welcome to My Portfolio</h1>
                <p className='text-slate-800 text-sm lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quos necessitatibus porro quidem illo excepturi.</p>
                <div className='space-x-6'>
                    <a 
                        href="#"
                        className='inline-flex items-center bg-indigo-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-full hover:bg-indigo-800 transition text-base font-medium gap-3'
                    >
                        Projects
                        <CgCodeSlash className='w-5 h-5 text-white'/>
                    </a>
                    <a 
                        href="#"
                        className='inline-flex items-center border-2 border-indigo-600 text-indigo-600 px-3 py-1 sm:px-6 sm:py-3 rounded-full hover:bg-indigo-100 transition text-base font-medium gap-3'
                    >
                        Download Resume
                        <FaFileDownload className='w-5 h-5 text-indigo-600'/>
                    </a>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero