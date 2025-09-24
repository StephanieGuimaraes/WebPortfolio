import {BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import HeroPic from '../assets/Chopper540.jpg';

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Stephanie Guimarães</h1>
            <hr/>
            <p className='mt-10 text-slate-300 font-sans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="" width={250} height={250}
            className='rounded-full w-full border-8 border-white'/>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About me</p>
            <p className='text-slate-300'>
                Let´s build quality in programming ad design with our services
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                Show More...
            </button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsLinkedin size={40}/>
                <BsGithub size={40}/>
            </div>
        </div>
    </section>
  )
}

export default hero