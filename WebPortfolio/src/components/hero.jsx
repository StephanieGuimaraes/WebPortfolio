import {BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/Chopper540.jpg';

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Stephanie Guimarães</h1>
            <hr/>
            <p className='mt-10 text-xl text-slate-300 font-sans'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="" width={250} height={250}
            className='rounded-full w-full border-8 border-white'/>
        </div>
        <div>
            <p>About me</p>
            <p>
                Let´s build quality in programming ad design with our services
            </p>
            <button>
                Show More...
            </button>
        </div>
    </section>
  )
}

export default hero