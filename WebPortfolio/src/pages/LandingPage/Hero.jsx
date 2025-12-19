import React from 'react'
import { CgCodeSlash } from 'react-icons/cg';
import {FaFileDownload} from 'react-icons/fa';
import ProfilePic from '../../assets/MyProfile2.png';
import HeroBackground from '../../assets/BackGroundImage.png';
import {BsLinkedin, BsGithub } from 'react-icons/bs';


const Hero = () => {
  return (
    <section 
        id='home' 
        className='scroll-m-20 bg-slate-50 h-[90vh] flex items-center justify-center'
        style={{backgroundImage: `url(${HeroBackground})`}}
        >
        <div className='w-full mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:px-64'>
            <div className='max-w-xl text-center lg:text-left space-y-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 leading-tight'>Welcome to My Portfolio</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quos necessitatibus porro quidem illo excepturi.</p>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 items-center'>
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
                        Resume
                        <FaFileDownload className='w-5 h-5 text-indigo-600'/>
                    </a>
                </div>
                <div className='inline-flex mt-5 space-x-4 cursor-pointer '>
                    <BsLinkedin size={25} className='text-indigo-600 hover:text-indigo-800'/>
                    <BsGithub size={25} className='text-indigo-600 hover:text-indigo-800'/>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero