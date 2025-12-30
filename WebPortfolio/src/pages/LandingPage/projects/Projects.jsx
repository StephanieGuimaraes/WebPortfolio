import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ProfilePic from '../../../assets/MyProfile2.png';
import AghuPic from '../../../assets/ProjectsCardsPic/AghuPic.png';
import NovaWealth from '../../../assets/ProjectsCardsPic/NovaWealth.png';
import AQtech from '../../../assets/ProjectsCardsPic/AQtech.svg';
import ClaraBeep from '../../../assets/ProjectsCardsPic/ClaraBeep.png';
import FluxmedLogo from '../../../assets/ProjectsCardsPic/FluxmedLogo.png';
import KuarayPic from '../../../assets/ProjectsCardsPic/KuarayPic.png';
import LaicanSat from '../../../assets/ProjectsCardsPic/LaicanSat.jpg';
import PilotPic from '../../../assets/ProjectsCardsPic/Pilot.png';

const Projects = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Número de cards visíveis por vez (responsivo)
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3;
  };

  const cardsPerView = getCardsPerView();

  // Funções de navegação do carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, Cards.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : Math.min(prevIndex + 1, maxIndex);
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, Cards.length - cardsPerView);
      return prevIndex === 0 ? maxIndex : Math.max(0, prevIndex - 1);
    });
  };

  const Cards = [
    {
      title: "Pilot",
      subTitle: "End-to-end AdTech solution.",
      content: "full campaign management system that streamlines the advertising sales cycle from proposal to performance. Today, the industry relies on Pilot to handle their ad sales, allowing users to focus on what they do best while making their work lives easier and more efficient.",
      image: PilotPic
    },
    {
      title: "AQtech",
      subTitle: "Financial cockpit for construction industry.",
      content: "AQTech is a startup offering a financial cockpit (SaaS) focused on the construction industry, solving the chaos of spreadsheets (Excel) in managing feasibility studies and cash flow.",
      image: AQtech
    },
    {
      title: "Fluxmed",
      subTitle: "Manage your clinic with Fluxmed.",
      content: "Fluxmed is a comprehensive solution for clinic management, offering tools for patient scheduling, electronic health records, Teleservice and billing.",
      image: FluxmedLogo
    },
    {
      title: "AGHUx",
      subTitle: "Management App for University Hospitals.",
      content: "The goal of the application is to standardize the care and administrative practices of Federal University Hospitals and to allow the creation of standardized indicators, which will facilitate the adoption of common improvement projects for these hospitals.",
      image: AghuPic
    },
    {
      title: "NovaWealth",
      subTitle: "Site with insights on finance and software.",
      content: (
        <>
          NovaWealth is a Site created with a simple belief: Financial literacy and technological understanding are the cornerstones of building sustainable wealth in the modern economy. Site: <a href="https://novawealth.website" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">https://novawealth.website/</a>
        </>
      ),
      image: NovaWealth
    },
    {
      title: "CLARA Beep Solutions",
      subTitle: "Technology in laparoscopic surgery.",
      content: "CLARA is a tool to assist in performing laparoscopy procedures. The system provides greater precision and camera stability for doctors during the surgical procedure through an optical positioning control system that is easily adjustable via joystick or foot pedal.",
      image: ClaraBeep
    },
    {
      title: "Kuaray",
      subTitle: "A research to study the stratosphere.",
      content: "A research and development project from the University of Brasília (UnB), in partnership with the Nasa's Space Balloon Project, focused on low-cost platforms (such as the LAICAnSat stratospheric balloons) to study the stratosphere and phenomena like solar eclipses, capturing unprecedented 360-degree images and data for scientific dissemination and virtual reality.",
      image: KuarayPic
    },
    {
      title: "LaicanSat",
      subTitle: "Mockup with CubeSat Nanosatellite pattern.",
      content: "LaicanSat is a CubeSat 2U nanosatellite platform. It features an onboard computer, tracking system, and 360-degree cameras. Its purpose is to test new materials in space environments and to explore new mechanical designs, electronics, and sensors for aerospace research.",
      image: LaicanSat
    },
  ]
  
  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scale-102 {
          transform: scale(1.02);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <section id='projects' className='scroll-my-20 pt-24 pb-20 bg-slate-50 px-4 md:px-8 lg:px-64'>
        <div className='w-full mx-auto'>
            <div className='text-center mb-8 md:mb-12 lg:mb-16'>
              <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-600 mb-3 sm:mb-4 lg:mb-6'>{t('projects.title')}</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4'>{t('projects.description')}</p>
            </div>
            {/* Carrossel Container */}
            <div className='relative mb-8 py-4'>
              {/* Seta Esquerda */}
              <button
                onClick={prevSlide}
                className='hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-indigo-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110'
                disabled={currentIndex === 0}
              >
                <svg className='w-6 h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              {/* Cards do Carrossel */}
              <div className='mx-0 md:mx-12 md:overflow-x-hidden'>
                <div className='overflow-x-auto md:overflow-visible scrollbar-hide px-2 py-2'>
                  <div 
                    className='flex md:transition-transform md:duration-500 md:ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                  >
                  {Cards.map((card, index) => (
                    <div key={index} className='w-[85%] md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4 md:px-4'>
                      <button
                        onClick={() => setActiveCard(index)}
                        className={`group w-full rounded-2xl m-8 transition-all duration-300 flex flex-col overflow-hidden transform
                          ${activeCard === index 
                            ? 'bg-white shadow-2xl scale-105' 
                            : 'bg-white shadow-md hover:shadow-xl hover:scale-102 hover:-translate-y-1'}`
                        }
                      >
                        <div className='w-full h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative'>
                          <img 
                            src={card.image} 
                            alt={card.title} 
                            className='w-full h-full object-contain group-hover:object-cover transition-all duration-500 group-hover:scale-110'
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/10 to-transparent transition-opacity duration-300
                            ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                          />
                        </div>
                        <div className='p-6 w-full'>
                          <h3 className='text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 mb-2 text-left'>{card.title}</h3>
                          <h4 className='text-sm text-gray-600 text-left line-clamp-2 group-hover:text-gray-700 transition-colors duration-300'>{card.subTitle}</h4>
                        </div>
                      </button>
                    </div>
                  ))}
                  </div>
                </div>
              </div>

              {/* Seta Direita */}
              <button
                onClick={nextSlide}
                className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-indigo-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110'
                disabled={currentIndex + cardsPerView >= Cards.length}
              >
                <svg className='w-6 h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
            <div className='bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 shadow-sm'>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                    <div className='flex-shrink-0 bg-white rounded-xl shadow-md'>
                      <div className='w-80 lg:w-[350px] h-64 lg:h-72 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center'>
                        <img 
                          src={Cards[activeCard].image} 
                          alt={Cards[activeCard].title} 
                          className='max-w-full max-h-full object-contain hover:object-cover transition-all duration-300'
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className='text-2xl font-semibold text-indigo-600 mb-4'>{Cards[activeCard].title}</h3>
                      <p className='text-slate-700'>{Cards[activeCard].content}</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-center'>
              <div className='flex space-x-2'>
                {Cards.map((_, index) => (
                  <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-4 h-4 rounded-full transition-all ${activeCard === index 
                    ? 'bg-indigo-600'
                    : 'bg-slate-300 hover:bg-indigo-400'
                  }`} aria-label={`Go to project ${index + 1}`}
                  >

                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Projects