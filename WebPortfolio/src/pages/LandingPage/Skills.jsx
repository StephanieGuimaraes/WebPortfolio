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
        icon: <CgCodeSlash className='w-5 h-5 text-indigo-600' />,
        name: 'Scrum',
        level: 'Advanced',
    },
    {
        icon: <SiAltiumdesigner className='w-5 h-5 text-indigo-600' />,
        name: 'Altium Designer',
        level: 'Beginner',
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
    <>
        <style jsx>{`
                @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1.5s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 1s;
        }
        
        .animation-delay-400 {
          animation-delay: 1.2s;
        }
        
        .animation-delay-600 {
          animation-delay: 1.6s;
        }

        .animation-delay-800 {
          animation-delay: 1.8s;
        }
        
        .title-animated {
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .card-animated {
          opacity: 0;
        }
        
        /* Delays para Software Skills (após 1s + 0.5s delay) */
        .software-card-delay-1 { animation-delay: 1.6s; }
        .software-card-delay-2 { animation-delay: 1.7s; }
        .software-card-delay-3 { animation-delay: 1.8s; }
        .software-card-delay-4 { animation-delay: 1.9s; }
        .software-card-delay-5 { animation-delay: 2.0s; }
        .software-card-delay-6 { animation-delay: 2.1s; }
        .software-card-delay-7 { animation-delay: 2.2s; }
        .software-card-delay-8 { animation-delay: 2.3s; }
        
        /* Delays para Engineering Skills (após 1.2s + 0.5s delay) */
        .engineering-card-delay-1 { animation-delay: 1.8s; }
        .engineering-card-delay-2 { animation-delay: 1.9s; }
        .engineering-card-delay-3 { animation-delay: 2.0s; }
        .engineering-card-delay-4 { animation-delay: 2.1s; }
        .engineering-card-delay-5 { animation-delay: 2.2s; }
        .engineering-card-delay-6 { animation-delay: 2.3s; }
        .engineering-card-delay-7 { animation-delay: 2.4s; }
        .engineering-card-delay-8 { animation-delay: 2.5s; }
        
        /* Delays para Other Skills (após 1.6s + 0.5s delay) */
        .other-card-delay-1 { animation-delay: 2.2s; }
        .other-card-delay-2 { animation-delay: 2.3s; }
        .other-card-delay-3 { animation-delay: 2.4s; }`}
        </style>
        <section id='skills' className='scroll-my-20 py-24 bg-slate-50 lg:px-64'>
            <div className='w-full mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-indigo-600 mb-4'>Skills & Education</h2>
                    <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='mb-6'>
                    <h3 className='text-2xl font-semibold mb-6 text-indigo-600 underline decoration-2 underline-offset-4 title-animated animate-slide-in-left animation-delay-200'>
                        Software
                    </h3>
                    <div>
                        {softwareSkills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`inline-flex items-start bg-white text-slate-800 px-4 py-2 m-2 rounded-2xl shadow hover:shadow-md transition text-base font-medium gap-2 card-animated animate-fade-in-up software-card-delay-${Math.min(index + 1, 8)}`}
                        >
                            {skill.icon}
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold'>{skill.name}</span>
                                <span className='text-xs text-slate-500'>{skill.level}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='mb-6'>
                    <h3 className='text-2xl font-semibold text-indigo-600 mb-6 underline decoration-2 underline-offset-4 title-animated animate-slide-in-left animation-delay-400'>
                        Engineering
                    </h3>
                    <div>
                        {engineeringSkills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`inline-flex items-start bg-white text-slate-800 px-4 py-2 m-2 rounded-2xl shadow hover:shadow-md transition text-base font-medium gap-2 card-animated animate-fade-in-up engineering-card-delay-${Math.min(index + 1, 8)}`}
                        >
                            {skill.icon}
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold'>{skill.name}</span>
                                <span className='text-xs text-slate-500'>{skill.level}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='mb-6'>
                    <h3 className='text-2xl font-semibold text-indigo-600 mb-6 underline decoration-2 underline-offset-4 title-animated animate-slide-in-left animation-delay-600'>
                        Other Skills
                    </h3>
                    <div>
                        {otherSkills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`inline-flex items-start bg-white text-slate-800 px-4 py-2 m-2 rounded-2xl shadow hover:shadow-md transition text-base font-medium gap-2 card-animated animate-fade-in-up other-card-delay-${index + 1}`}
                        >
                            {skill.icon}
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold'>{skill.name}</span>
                                <span className='text-xs text-slate-500'>{skill.level}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-indigo-600 mb-6 underline decoration-2 underline-offset-4 title-animated animate-slide-in-left animation-delay-800'>Education</h3>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills