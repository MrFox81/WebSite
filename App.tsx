
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const Navbar = () => {
  const location = useLocation();
  
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative pb-1 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${
      isActive ? 'text-[#4A6CF7]' : 'text-black hover:text-[#4A6CF7]'
    }`;
  };

  const getUnderlineClass = (path: string) => {
    const isActive = location.pathname === path;
    return `absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#4A6CF7] transition-transform duration-300 origin-left ${
      isActive ? 'scale-x-100' : 'scale-x-0'
    }`;
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-10 py-10 flex flex-col md:flex-row justify-between items-center">
      <Link to="/" className="flex items-center gap-3 mb-8 md:mb-0 group">
        <div className="w-5 h-5 bg-[#4A6CF7]"></div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-black uppercase">MR.FOX</span>
          <span className="text-gray-300 text-2xl font-light">/</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">Personal website</span>
        </div>
      </Link>
      
      <div className="flex gap-10">
        <Link to="/" className={getLinkClass('/')}>
          Home
          <span className={getUnderlineClass('/')}></span>
        </Link>
        <Link to="/about" className={getLinkClass('/about')}>
          About Me
          <span className={getUnderlineClass('/about')}></span>
        </Link>
        <Link to="/resume" className={getLinkClass('/resume')}>
          Resume
          <span className={getUnderlineClass('/resume')}></span>
        </Link>
        <Link to="/blog" className={getLinkClass('/blog')}>
          Blog
          <span className={getUnderlineClass('/blog')}></span>
        </Link>
        <Link to="/contact" className={getLinkClass('/contact')}>
          Contact
          <span className={getUnderlineClass('/contact')}></span>
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white px-10 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-t border-gray-100 pt-12">
      <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] leading-relaxed mb-10 md:mb-0">
        © 2025 by Valerio Volpe.<br/>
        Professional ICT Portfolio
      </div>
      <div className="flex flex-col md:flex-row gap-20 text-left">
        <div className="min-w-[140px]">
          <p className="text-[11px] font-bold text-black mb-4 tracking-[0.2em] uppercase">Call</p>
          <p className="text-[14px] text-gray-600 font-medium">+39 333 2562061</p>
        </div>
        <div className="min-w-[140px]">
          <p className="text-[11px] font-bold text-black mb-4 tracking-[0.2em] uppercase">Write</p>
          <p className="text-[14px] text-gray-600 font-medium">valerio.volpe@gmail.com</p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-black mb-4 tracking-[0.2em] uppercase">Follow</p>
          <div className="flex gap-5 text-lg mt-1 text-black">
            <a href="https://www.linkedin.com/in/Mr-Fox/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/Mr.Fox81" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/mr.fox.81/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col pt-32">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
