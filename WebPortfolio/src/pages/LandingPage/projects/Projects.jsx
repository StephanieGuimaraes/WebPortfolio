import React, { useState } from 'react'
import ProfilePic from '../../../assets/MyProfile2.png';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(0);

  const Cards = [
    {
      title: "Pilot",
      subTitle: "Subtitle 1",
      content: "This is the content for project 1.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "RV Software",
      subTitle: "Subtitle 2",
      content: "This is the content for project 2.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "AQtech",
      subTitle: "Subtitle 3",
      content: "This is the content for project 3.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img> 
    },
    {
      title: "Fluxmed",
      subTitle: "Manage your clinic with Fluxmed.",
      content: "Fluxmed is a comprehensive solution for clinic management, offering tools for patient scheduling, electronic health records, Teleservice and billing.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "AGHUx",
      subTitle: "Management Application for University Hospitals",
      content: "The goal of the application is to standardize the care and administrative practices of Federal University Hospitals and to allow the creation of standardized indicators, which will facilitate the adoption of common improvement projects for these hospitals.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img> 
    },
    {
      title: "CLARA Beep Solutions",
      subTitle: "Technology and innovation in laparoscopic surgery",
      content: "CLARA is a tool to assist in performing laparoscopy procedures. The system provides greater precision and camera stability for doctors during the surgical procedure through an optical positioning control system that is easily adjustable via joystick or foot pedal.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Kuaray",
      subTitle: "Subtitle 7",
      content: "This is the content for project 7.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "LaicanSat",
      subTitle: "Mockup with CubeSat Nanosatellite pattern.",
      content: "LaicanSat is a CubeSat 2U nanosatellite platform. It features an onboard computer, tracking system, and 360-degree cameras. Its purpose is to test new materials in space environments and to explore new mechanical designs, electronics, and sensors for aerospace research.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
  ]
  
  return (
    <section id='projects' className='scroll-my-20 py-24 bg-slate-50 lg:px-64'>
        <div className='w-full mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-indigo-600 mb-4'>Projects</h2>
                <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}

export default Projects