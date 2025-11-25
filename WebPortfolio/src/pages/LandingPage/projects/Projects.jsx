import React, { useState } from 'react'
import ProfilePic from '../../../assets/MyProfile2.png';
import PilotPic from '../../../assets/ProjectsCardsPic/Pilot.png';
import SoftwareRVPic from '../../../assets/ProjectsCardsPic/SoftwareRV.png';

const Projects = () => {
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
      subTitle: "End-to-end AdTech solution",
      content: "This is the content for project 1.",
      image: PilotPic
    },
    {
      title: "RV Software",
      subTitle: "Subtitle 2",
      content: "This is the content for project 2.",
      image: PilotPic
    },
    {
      title: "AQtech",
      subTitle: "Subtitle 3",
      content: "This is the content for project 3.",
      image: PilotPic
    },
    {
      title: "Fluxmed",
      subTitle: "Manage your clinic with Fluxmed.",
      content: "Fluxmed is a comprehensive solution for clinic management, offering tools for patient scheduling, electronic health records, Teleservice and billing.",
      image: PilotPic
    },
    {
      title: "AGHUx",
      subTitle: "Management Application for University Hospitals",
      content: "The goal of the application is to standardize the care and administrative practices of Federal University Hospitals and to allow the creation of standardized indicators, which will facilitate the adoption of common improvement projects for these hospitals.",
      image: PilotPic
    },
    {
      title: "CLARA Beep Solutions",
      subTitle: "Technology in laparoscopic surgery",
      content: "CLARA is a tool to assist in performing laparoscopy procedures. The system provides greater precision and camera stability for doctors during the surgical procedure through an optical positioning control system that is easily adjustable via joystick or foot pedal.",
      image: PilotPic
    },
    {
      title: "Kuaray",
      subTitle: "Subtitle 7",
      content: "This is the content for project 7.",
      image: PilotPic
    },
    {
      title: "LaicanSat",
      subTitle: "Mockup with CubeSat Nanosatellite pattern.",
      content: "LaicanSat is a CubeSat 2U nanosatellite platform. It features an onboard computer, tracking system, and 360-degree cameras. Its purpose is to test new materials in space environments and to explore new mechanical designs, electronics, and sensors for aerospace research.",
      image: PilotPic
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
      `}</style>
      <section id='projects' className='scroll-my-20 pt-24 pb-16 bg-slate-50 px-4 md:px-8 lg:px-64'>
        <div className='w-full mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-indigo-600 mb-4'>Projects</h2>
                <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* Carrossel Container */}
            <div className='relative mb-8'>
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
              <div className='overflow-x-auto md:overflow-hidden mx-0 md:mx-12 scrollbar-hide'>
                <div 
                  className='flex md:transition-transform md:duration-500 md:ease-in-out'
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                >
                  {Cards.map((card, index) => (
                    <div key={index} className='w-[85%] md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-3'>
                      <button
                        onClick={() => setActiveCard(index)}
                        className={`w-full rounded-md transition-all duration-300 flex flex-col overflow-hidden
                          ${activeCard === index 
                            ? 'bg-white shadow-lg border-b-4 border-indigo-600' 
                            : 'bg-slate-100 hover:bg-indigo-200'}`
                        }
                      >
                        <div className='w-full h-48 overflow-hidden'>
                          <img 
                            src={card.image} 
                            alt={card.title} 
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='p-4 w-full'>
                          <h3 className='text-base font-semibold text-indigo-600 mb-2 text-left'>{card.title}</h3>
                          <h4 className='text-sm text-indigo-500 text-left line-clamp-2'>{card.subTitle}</h4>
                        </div>
                      </button>
                    </div>
                  ))}
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
                    <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
                      <img 
                        src={Cards[activeCard].image} 
                        alt={Cards[activeCard].title} 
                        className='w-80 lg:w-[350px] rounded-lg object-cover'
                      />
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