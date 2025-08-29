"use client";
import { useState } from 'react';
import Image from 'next/image';

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
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Overview</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Thesis</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Pricing</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Discord</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Latest</a>
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Risk & Safety</a>
            </nav>
            <div className="flex items-center">
              {/* GitHub Star Badge - merged inline */}
              <div className="flex justify-center items-center xl:h-[28.5px] xl:w-[114px] md:h-[25px] md:w-[100px] h-[22px] w-[88px] xl:mr-3 mr-2">
                <div>
                  <svg
                    width="114"
                    height="28.5"
                    viewBox="0 0 120 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="github-star xl:w-[114px] xl:h-[28.5px] md:w-[100px] md:h-[25px] w-[88px] h-[22px] flex-shrink-0"
                  >
                    <path
                      d="M0 15.0001C0 6.71584 6.71573 0.000107058 15 0.000107058H105C113.284 0.000107058 120 6.71584 120 15.0001C120 23.2844 113.284 30.0001 105 30.0001H15C6.71573 30.0001 0 23.2844 0 15.0001Z"
                      fill="#262624"
                    />
                    <path
                      d="M101.931 6.73872C102.244 5.82476 103.536 5.82476 103.849 6.73872L105.256 10.849C105.397 11.259 105.782 11.5345 106.216 11.5345H110.652C111.647 11.5345 112.046 12.8181 111.227 13.3829L107.731 15.794C107.357 16.0519 107.2 16.5272 107.347 16.957L108.704 20.9202C109.021 21.845 107.974 22.6381 107.169 22.0831L103.466 19.5291C103.119 19.2902 102.661 19.2902 102.315 19.5291L98.6111 22.0831C97.8064 22.6381 96.7598 21.845 97.0763 20.9202L98.433 16.957C98.5802 16.5272 98.4234 16.0519 98.0494 15.794L94.5531 13.3829C93.7341 12.8181 94.1337 11.5345 95.1286 11.5345H99.5648C99.9981 11.5345 100.384 11.259 100.524 10.849L101.931 6.73872Z"
                      fill="#F5DB9A"
                    />
                    <text
                      fill="#FAF9F5"
                      xmlSpace="preserve"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Geist Mono"
                      fontSize="18"
                      letterSpacing="0.02em"
                      className="xl:text-lg md:text-base text-sm"
                    >
                      <tspan x="34.761" y="22.2635">
                        50000
                      </tspan>
                    </text>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.6399 4C9.22198 4 4.03369 9.04165 4.03369 15.2788C4.03369 20.2646 7.35801 24.4849 11.9697 25.9786C12.5463 26.0909 12.7575 25.7359 12.7575 25.4373C12.7575 25.1758 12.7385 24.2796 12.7385 23.3457C9.50991 24.0181 8.83759 22.0012 8.83759 22.0012C8.31874 20.694 7.54996 20.3581 7.54996 20.3581C6.49325 19.6671 7.62694 19.6671 7.62694 19.6671C8.7991 19.7419 9.41417 20.8249 9.41417 20.8249C10.4516 22.5427 12.1234 22.0573 12.796 21.7585C12.892 21.0302 13.1996 20.5261 13.5263 20.246C10.9512 19.9845 8.242 19.0136 8.242 14.6812C8.242 13.4487 8.70289 12.4404 9.43318 11.6562C9.31796 11.3762 8.91433 10.2182 9.54864 8.66833C9.54864 8.66833 10.5286 8.3695 12.7382 9.82608C13.6843 9.57919 14.6599 9.4536 15.6399 9.45254C16.6199 9.45254 17.6189 9.58339 18.5414 9.82608C20.7512 8.3695 21.7312 8.66833 21.7312 8.66833C22.3655 10.2182 21.9617 11.3762 21.8464 11.6562C22.596 12.4404 23.0379 13.4487 23.0379 14.6812C23.0379 19.0136 20.3286 19.9657 17.7343 20.246C18.1572 20.6008 18.5221 21.2729 18.5221 22.3374C18.5221 23.8499 18.5031 25.0638 18.5031 25.4371C18.5031 25.7359 18.7146 26.0909 19.2909 25.9788C23.9026 24.4847 27.2269 20.2646 27.2269 15.2788C27.2459 9.04165 22.0386 4 15.6399 4Z"
                      fill="#FAF9F5"
                    />
                  </svg>
                </div>
              </div>
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
                <a href="#" className="block w-full text-left px-4 py-3 rounded-lg bg-[#1D7BA7] text-[#FEFCF4] font-medium transition-colors duration-200 hover:bg-[#1a6b94]">
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
