import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {CgMenu, CgNametag, CgPhone} from 'react-icons/cg';
import Logo1 from '../../assets/logos/Logo1_rbg.png';

const navList = [
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  //{href: '#articles', label: 'Articles'},
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between py-4 px-6 lg:px-64">
        <div className="flex items-center space-x-2 hover:text-indigo-800 cursor-pointer">
            {/* <CgNametag className="w-8 h-8 text-indigo-600"/> */}
            <a href="#home" className="block">
                <img 
                    src={Logo1} 
                    alt='Logo' 
                    className='w-32 sm:w-40 md:w-48 lg:w-[200px] rounded-4xl pr-4 sm:pr-6 lg:pr-12'
                />
            </a>
            {/* <a href="#" className="text-2xl font-bold text-indigo-600"></a> */}
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-indigo-600 font-medium">
            {navList.map((link) => (
              <a href={link.href} key={link.href} className="text-lg hover:text-indigo-800 transition">
                {link.label}
              </a>
          ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2 bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-800 transition text-md cursor-pointer">
            <CgPhone className="w-4 h-4 text-white"/>
            <a href="#" className="text-lg text-white font-medium">Contact</a>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center p-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <AiOutlineClose className="w-6 h-6 text-indigo-600" /> : <CgMenu className="w-6 h-6 text-indigo-600" />}
          </button>
        </div>
      </div>
      {
        isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-md px-6 py-4 space-y-3 text-indigo-600 font-medium">
             {navList.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="block hover:text-indigo-800 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
             ))}
          </div>
        )
      }
    </header>
    
  )
}

export default Header