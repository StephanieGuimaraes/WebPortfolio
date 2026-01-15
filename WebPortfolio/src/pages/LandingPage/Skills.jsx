import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaFigma, FaGitAlt, FaGithub, FaUnity, FaGraduationCap, FaAngular } from 'react-icons/fa';
import { CgCodeSlash } from 'react-icons/cg';
import { SiCypress, SiAltiumdesigner } from 'react-icons/si';
import { LuRotate3D } from 'react-icons/lu';
import { PiCircuitryLight } from 'react-icons/pi';
import LogoUnb from '../../assets/logos/LogoUnb.png';
import LogoIfg from '../../assets/logos/LogoIfg.png';

const softwareSkills = [
    {
        icon: <RiJavascriptFill className='w-4 h-4' />,
        name: 'JavaScript',
        level: 'Advanced',
        percentage: 90,
        color: 'text-yellow-500'
    },
    {
        icon: <BiLogoTypescript className='w-4 h-4' />, 
        name: 'TypeScript',
        level: 'Advanced',
        percentage: 90,
        color: 'text-blue-600'
    },
    {
        icon: <FaReact className='w-4 h-4' />,
        name: 'React',
        level: 'Advanced',
        percentage: 95,
        color: 'text-cyan-500'
    },
    {
        icon: <FaAngular className='w-4 h-4' />,
        name: 'Angular',
        level: 'Intermediate',
        percentage: 60,
        color: 'text-red-500'
    },
    {
        icon: <RiTailwindCssFill className='w-4 h-4' />,
        name: 'Tailwind CSS',
        level: 'Intermediate',
        percentage: 80,
        color: 'text-teal-500'
    },
    {
        icon: <FaCss3Alt className='w-4 h-4' />,
        name: 'CSS',
        level: 'Advanced',
        percentage: 90,
        color: 'text-blue-500'
    },
    {
        icon: <FaHtml5 className='w-4 h-4' />,
        name: 'HTML',
        level: 'Advanced',
        percentage: 95,
        color: 'text-orange-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Api Rest',
        level: 'Intermediate',
        percentage: 75,
        color: 'text-green-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Api integration',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-emerald-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Material UI',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-purple-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Ant Design',
        level: 'Beginner',
        percentage: 50,
        color: 'text-red-500'
    },
    {
        icon: <FaNodeJs className='w-4 h-4' />,
        name: 'Node.js',
        level: 'Beginner',
        percentage: 45,
        color: 'text-green-600'
    },
    {
        icon: <FaFigma className='w-4 h-4' />,
        name: 'Figma',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-pink-500'
    },
    {
        icon: <FaGitAlt className='w-4 h-4' />,
        name: 'Git',
        level: 'Advanced',
        percentage: 90,
        color: 'text-orange-600'
    },
    {
        icon: <FaGithub className='w-4 h-4' />,
        name: 'GitHub',
        level: 'Advanced',
        percentage: 88,
        color: 'text-gray-700'
    },
    {
        icon: <FaGithub className='w-4 h-4' />, 
        name: 'GitActions',
        level: 'Beginner',
        percentage: 40,
        color: 'text-gray-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Aggrid',
        level: 'Beginner',
        percentage: 45,
        color: 'text-blue-400'
    },
    {
        icon: <SiCypress className='w-4 h-4' />,
        name: 'Cypress',
        level: 'Beginner',
        percentage: 40,
        color: 'text-emerald-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'C++',
        level: 'Intermediate',
        percentage: 60,
        color: 'text-blue-700'
    },
    {
        icon: <CgCodeSlash className='w-6 h-6' />,
        name: 'C#',
        level: 'Beginner',
        percentage: 35,
        color: 'text-purple-600'
    },
    {
        icon: <CgCodeSlash className='w-6 h-6' />,
        name: 'CI/CD Pipeline',
        level: 'Advanced',
        percentage: 85,
        color: 'text-gray-600'
    }
];

const engineeringSkills = [
    {
        icon: <FaUnity className='w-4 h-4' />,
        name: 'Unity 3D',
        level: 'Intermediate',
        percentage: 70,
        color: 'text-gray-800'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'SolidWorks',
        level: 'Intermediate',
        percentage: 65,
        color: 'text-red-600'
    },
    {
        icon: <LuRotate3D className='w-4 h-4' />,
        name: 'PrusaSlicer',
        level: 'Intermediate',
        percentage: 75,
        color: 'text-orange-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: '3D Printing',
        level: 'Intermediate',
        percentage: 80,
        color: 'text-blue-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Matlab',
        level: 'Beginner',
        percentage: 35,
        color: 'text-amber-500'
    },
    {
        icon: <PiCircuitryLight className='w-4 h-4' />,
        name: 'STM32',
        level: 'Beginner',
        percentage: 40,
        color: 'text-blue-700'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Firmware Development',
        level: 'Beginner',
        percentage: 45,
        color: 'text-indigo-500'
    },
    {
        icon: <SiAltiumdesigner className='w-4 h-4' />,
        name: 'Altium Designer',
        level: 'Beginner',
        percentage: 30,
        color: 'text-yellow-600'
    }
];

const otherSkills = [
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Scrum',
        level: 'Advanced',
        percentage: 95,
        color: 'text-blue-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Kanban',
        level: 'Advanced',
        percentage: 90,
        color: 'text-blue-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Agile Methodologies',
        level: 'Advanced',
        percentage: 95,
        color: 'text-blue-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'JIRA',
        level: 'Advanced',
        percentage: 90,
        color: 'text-blue-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Bitrix',
        level: 'Intermediate',
        percentage: 80,
        color: 'text-blue-600'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Atlassian Tools',
        level: 'Advanced',
        percentage: 85,
        color: 'text-blue-500'
    }
];

const languages = [
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'English',
        level: 'Advanced',
        percentage: 90,
        color: 'text-blue-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Portuguese',
        level: 'Native',
        percentage: 100,
        color: 'text-green-500'
    },
    {
        icon: <CgCodeSlash className='w-4 h-4' />,
        name: 'Spanish',
        level: 'Beginner',
        percentage: 35,
        color: 'text-red-500'
    }
];


const education = [
    {
        logo: <img src={LogoUnb} alt="University Logo" className="w-12 h-12 rounded-lg object-contain"/>,
        institution: 'University of Brasília (UnB)',
        degree: 'Bachelor degree in Mechatronics Engineering',
        period: '2015 - 2022'
    },
    {
        logo: <img src={LogoIfg} alt="University Logo" className="w-12 h-12 rounded-lg object-contain"/>,
        institution: 'Instituto Federal de Goiás (IFG)',
        degree: 'Technical degree in Electronics',
        period: '2011 - 2015'
    }
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('software');
    const { t } = useTranslation();

    const tabs = [
        { id: 'software', label: t('skills.tabs.software'), icon: '💻' },
        { id: 'engineering', label: t('skills.tabs.engineering'), icon: '⚙️' },
        { id: 'other', label: t('skills.tabs.other'), icon: '📋' },
        { id: 'languages', label: t('skills.tabs.languages'), icon: '🌍' }
    ];

    const getSkillsData = () => {
        switch (activeTab) {
            case 'software': return softwareSkills;
            case 'engineering': return engineeringSkills;
            case 'other': return otherSkills;
            case 'languages': return languages;
            default: return softwareSkills;
        }
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'Native': return 'bg-green-500';
            case 'Advanced': return 'bg-blue-500';
            case 'Intermediate': return 'bg-yellow-500';
            case 'Beginner': return 'bg-red-500';
            default: return 'bg-gray-400';
        }
    };

    const SkillCard = ({ skill, index }) => {
        return (
            <div className="group bg-white rounded-lg p-3 shadow-lg hover:shadow-xl transform transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-1">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-6 h-6 bg-indigo-50 rounded-md group-hover:bg-indigo-100 transition-colors duration-300 flex-shrink-0">
                        <div className={skill.color}>
                            <div className="w-4 h-4">{skill.icon}</div>
                        </div>
                    </div>
                    <h4 className="text-xs font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 leading-tight truncate">
                        {skill.name}
                    </h4>
                </div>
                
                {/* Level and Percentage */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">{skill.level}</span>
                    <span className={`px-1 py-0.5 rounded-full text-xs font-bold text-white ${getLevelColor(skill.level)}`}>
                        {skill.percentage}%
                    </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                </div>
            </div>
        );
    };

    return (
        <section id='skills' className='scroll-my-20 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 sm:px-6 md:px-8 lg:px-64'>
            <div className='w-full mx-auto'>
                {/* Header */}
                <div className='text-center mb-8 md:mb-12 lg:mb-16'>
                    <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-3 sm:mb-4 lg:mb-6'>
                        {t('skills.title')}
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4'>
                        {t('skills.description')}
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mb-10 md:mb-16 lg:mb-20">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold transition-all duration-300 transform text-xs sm:text-sm md:text-base ${
                                    activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-lg sm:shadow-xl md:shadow-2xl scale-105 sm:scale-110'
                                        : 'bg-white text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl hover:scale-105'
                                }`}
                            >
                                {/* //<span className="text-xl">{tab.icon}</span> */}
                                <span className="truncate">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
                        {getSkillsData().map((skill, index) => (
                            <SkillCard 
                                key={`${activeTab}-${index}`} 
                                skill={skill} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h3 className='text-3xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-3 sm:mb-4 md:mb-6'>
                            {t('skills.education.title')}
                        </h3>
                        <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4'>
                            {t('skills.education.description')}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                        {edu.logo}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
                                            {edu.institution}
                                        </h4>
                                        <p className="text-gray-600 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm">
                                            {edu.degree}
                                        </p>
                                        <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-bold shadow-lg">
                                            <FaGraduationCap className="w-3 h-3 mr-1 sm:mr-2" />
                                            {edu.period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills