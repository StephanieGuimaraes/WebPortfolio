import React from 'react'
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaFigma, FaGitAlt, FaGithub, FaUnity } from 'react-icons/fa';
import { CgCodeSlash } from 'react-icons/cg';
import { SiCypress, SiAltiumdesigner } from 'react-icons/si';
import { LuRotate3D } from 'react-icons/lu';
import { PiCircuitryLight } from 'react-icons/pi';

const softwareSkills = [
    {
        icon: <RiJavascriptFill className='w-5 h-5 text-indigo-600' />,
        name: 'JavaScript',
        level: 'Advanced',
    },
    {
        icon: <BiLogoTypescript className='w-5 h-5 text-indigo-600' />, 
        name: 'TypeScript',
        level: 'Advanced',
    },
    {
        icon: <FaReact className='w-5 h-5 text-indigo-600' />,
        name: 'React',
        level: 'Advanced',
    },
    {
        icon: <RiTailwindCssFill className='w-5 h-5 text-indigo-600' />,
        name: 'Tailwind CSS',
        level: 'Intermediate',
    },
    {
        icon: <FaCss3Alt className='w-5 h-5 text-indigo-600' />,
        name: 'CSS',
        level: 'Advanced',
    },
    {
        icon: <FaHtml5 className='w-5 h-5 text-indigo-600' />,
        name: 'HTML',
        level: 'Advanced',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Api Rest',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Api integration',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Material UI',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Ant Design',
        level: 'Beginner',
    },
    {
        icon: <FaNodeJs className='w-5 h-5 text-indigo-600' />,
        name: 'Node.js',
        level: 'Beginner',
    },
    {
        icon: <FaFigma className='w-5 h-5 text-indigo-600' />,
        name: 'Figma',
        level: 'Intermediate',
    },
    {
        icon: <FaGitAlt className='w-5 h-5 text-indigo-600' />,
        name: 'Git',
        level: 'Advanced',
    },
    {
        icon: <FaGithub className='w-5 h-5 text-indigo-600' />,
        name: 'GitHub',
        level: 'Advanced',
    },
    {
        icon: <FaGithub className='w-5 h-5 text-indigo-600' />, 
        name: 'GitActions',
        level: 'Beginner',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Aggrid',
        level: 'Beginner',
    },
    {
        icon: <SiCypress className='w-5 h-5 text-indigo-600' />,
        name: 'Cypress',
        level: 'Beginner',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'C++',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'C#',
        level: 'Beginner',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'CI/CD Pipeline',
        level: 'Advanced',
    }
]

const engineeringSkills = [
    {
        icon: <FaUnity className='w-5 h-5 text-indigo-600' />,
        name: 'Unity 3D',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'SolidWorks',
        level: 'Intermediate',
    },
    {
        icon: <LuRotate3D className='w-5 h-5 text-indigo-600' />,
        name: 'PrusaSlicer',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: '3D Printing',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Matlab',
        level: 'Beginner',
    },
    {
        icon: <PiCircuitryLight className='w-5 h-5 text-indigo-600' />,
        name: 'STM32',
        level: 'Beginner',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Firmware Development',
        level: 'Beginner',
    },
    {
        icon: <SiAltiumdesigner className='w-5 h-5 text-indigo-600' />,
        name: 'Altium Designer',
        level: 'Beginner',
    },
        {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Scrum',
        level: 'Advanced',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Agile Methodologies',
        level: 'Advanced',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Atlassian Tools',
        level: 'Intermediate',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'VsCode',
        level: 'Advanced',
    }
]

const otherSkills = [
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'English',
        level: 'Advanced',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Portuguese',
        level: 'Native',
    },
    {
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Spanish',
        level: 'Beginner',
    },
]

const Skills = () => {
  return (
    <section id='skills' className='scroll-my-20 py-24 bg-slate-50'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-indigo-600 mb-4'>Skills & Education</h2>
                <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}

export default Skills