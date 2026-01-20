
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-160px)] flex items-center justify-center overflow-hidden">
      {/* Background Split Layer - Matches the Wix template 40/60 split */}
      <div className="absolute inset-0 flex">
        <div className="w-[40%] bg-[#E8E0D5]"></div>
        <div className="w-[60%] bg-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-0">
        
        {/* Floating Profile Card - Exact Wix Style */}
        <div className="w-full max-w-[420px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-20">
          <div className="bg-[#F4ECE6] flex flex-col items-center pt-16 pb-12 px-10">
            <div className="w-56 h-56 rounded-full overflow-hidden mb-10 shadow-sm bg-gray-200 border-4 border-white">
              {/* Punta al file profile.jpg nel tuo repository GitHub */}
              <img 
                src="https://raw.githubusercontent.com/MrFox81/MrFoxWebSite/main/profile.jpg" 
                alt="Valerio Volpe" 
                className="w-full h-full object-cover transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/LzY8W8V/valerio-volpe-placeholder.jpg'; 
                }}
              />
            </div>
            <h2 className="text-[40px] font-black text-center mb-6 tracking-tight text-black leading-[1.1]">
              Valerio<br/>Volpe
            </h2>
            <div className="w-16 h-[2px] bg-[#4A6CF7] mb-8"></div>
            <p className="text-[12px] font-bold tracking-[0.35em] uppercase text-gray-800 text-center">
              ICT Senior Site Manager
            </p>
          </div>
          
          {/* Social Links Footer */}
          <div className="w-full py-5 bg-white flex justify-center gap-8 text-black border-t border-gray-50">
            <a href="https://www.linkedin.com/in/Mr-Fox/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors text-lg"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/Mr.Fox81" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors text-lg"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/mr.fox.81/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A6CF7] transition-colors text-lg"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 lg:pl-32 py-16 lg:py-0 text-left">
          <div className="mb-10">
            <h1 className="text-[110px] leading-none font-black text-black tracking-tighter">Hello</h1>
            <p className="text-2xl font-bold tracking-tight text-black uppercase mt-2">This is me.</p>
          </div>
          
          <div className="flex gap-4 mb-12">
            <Link to="/resume" className="bg-[#4A6CF7] text-white px-10 py-[12px] rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 shadow-md">
              Resume
            </Link>
            <Link to="/blog" className="border-2 border-black text-black px-10 py-[12px] rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
              Blog
            </Link>
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-gray-800 text-[18px] leading-relaxed font-medium">
              Lavoro nella tecnologia da oltre vent’anni.
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Abbastanza a lungo da aver costruito e gestito sistemi complessi, e da aver capito che il punto non è cosa fanno le tecnologie, ma cosa succede alle persone e alle organizzazioni che ci vivono dentro ogni giorno.
            </p>
            <p className="text-gray-900 text-[16px] leading-relaxed font-bold italic border-l-2 border-[#4A6CF7] pl-4">
              Oggi mi interessa dare un senso all’innovazione, non solo farla funzionare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
