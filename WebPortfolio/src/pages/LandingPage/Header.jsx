import { useState } from "react";
import {CgNametag, CgPhone} from 'react-icons/cg';

const navList = [
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#testimonials', label: 'Testimonials'},
  {href: '#articles', label: 'Articles'},
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <div className="flex items-center space-x-2 hover:text-indigo-800 cursor-pointer">
            <CgNametag className="w-8 h-8 text-indigo-600"/> 
            <a href="#" className="text-2xl font-bold text-indigo-600">Stephanie</a>
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
      </div>
    </header>
    
  )
}

export default Header