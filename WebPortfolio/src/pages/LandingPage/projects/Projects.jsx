import React, { useState } from 'react'
import ProfilePic from '../../../assets/MyProfile2.png';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(0);

  const Cards = [
    {
      title: "Project 1",
      subTitle: "Subtitle 1",
      content: "This is the content for project 1.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Project 2",
      subTitle: "Subtitle 2",
      content: "This is the content for project 2.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Project 3",
      subTitle: "Subtitle 3",
      content: "This is the content for project 3.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img> 
    },
    {
      title: "Project 4",
      subTitle: "Subtitle 4",
      content: "This is the content for project 4.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Project 5",
      subTitle: "Subtitle 5",
      content: "This is the content for project 5.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img> 
    },
    {
      title: "Project 6",
      subTitle: "Subtitle 6",
      content: "This is the content for project 6.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Project 7",
      subTitle: "Subtitle 7",
      content: "This is the content for project 7.",
      image: <img src={ProfilePic} alt='Profile' className='w-80 lg:w-[350px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'></img>
    },
    {
      title: "Project 8",
      subTitle: "Subtitle 8",
      content: "This is the content for project 8.",
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