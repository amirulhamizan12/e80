"use client";
import { useState } from 'react';
import Image from 'next/image';
import GithubBadge from './GithubBadge';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEFCF4]">
      <div className="xl:pl-10 xl:pr-8 md:px-6 px-4">
        <div className="flex justify-between items-center h-16">
          <Image 
            src="/4164d5e266abcfc6da4c.svg" 
            alt="Logo" 
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          
          {/* Desktop Navigation - hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-800 hover:text-gray-600 transition-colors">Overview</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Thesis</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Pricing</a>
              <a href="https://discord.gg/6vnSfMW94D" className="text-gray-800 hover:text-gray-600 transition-colors">Discord</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Latest</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Risk & Safety</a>
            </nav>
            <div className="flex items-center">
              <GithubBadge />
              <button 
                className="h-10 w-[116px] rounded-xl px-6 text-sm flex items-center justify-center gap-2" 
                style={{ backgroundColor: '#1D7BA7', color: '#FEFCF4' }}
                type="button"
              >
                Try Now
              </button>
            </div>
          </div>

          {/* Mobile and Tablet - CTA Button and Hamburger */}
          <div className="flex xl:hidden items-center space-x-3">
            <button 
              className="h-9 md:h-10 md:w-[116px] w-20 rounded-xl px-3 md:px-6 text-xs md:text-sm flex items-center justify-center gap-2" 
              style={{ backgroundColor: '#1D7BA7', color: '#FEFCF4' }}
              type="button"
            >
              Try Now
            </button>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-16 left-4 right-4 md:left-6 md:right-6 z-40">
            <div className="bg-[#FEFCF4] border border-gray-200 rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Menu Items */}
              <div className="p-2">
                <a href="/" className="block w-full text-left px-4 py-3 rounded-lg bg-[#1D7BA7] text-[#FEFCF4] font-medium transition-colors duration-200 hover:bg-[#1a6b94]">
                  Overview
                </a>
                <a href="#" className="block w-full text-left px-4 py-3 rounded-lg text-[#262624] font-medium hover:bg-[#F8F2DF] transition-colors duration-200">
                  Thesis
                </a>
                <a href="#" className="block w-full text-left px-4 py-3 rounded-lg text-[#262624] font-medium hover:bg-[#F8F2DF] transition-colors duration-200">
                  Use Cases
                </a>
                <a href="#" className="block w-full text-left px-4 py-3 rounded-lg text-[#262624] font-medium hover:bg-[#F8F2DF] transition-colors duration-200">
                  Update
                </a>
                <a href="#" className="block w-full text-left px-4 py-3 rounded-lg text-[#262624] font-medium hover:bg-[#F8F2DF] transition-colors duration-200">
                  Wizardry
                </a>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gray-200 mx-2"></div>
              
              {/* Footer Section */}
              <div className="bg-[#F8F2DF] p-3 rounded-b-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* GitHub Octocat Icon */}
                    <svg 
                      className="w-5 h-5 text-[#262624]" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-[#262624] font-medium">50000</span>
                  </div>
                  
                  {/* Star Icon */}
                  <svg 
                    className="w-5 h-5 text-[#F5DB9A]" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
