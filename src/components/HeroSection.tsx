"use client";

import * as React from "react";
import Image from 'next/image';

// Constants
const COLORS = {
  primary: 'rgba(29,123,167,1)',
  background: '#FEFCF4',
  buttonBg: '#262624',
  buttonText: '#FEFCF4',
  text: '#262624'
} as const;

const FONTS = {
  primary: 'RocaOne-Rg, sans-serif'
} as const;

const HeroSection: React.FC = () => {
  return (
    <section 
      className="flex overflow-hidden flex-col justify-center items-center xl:px-16 md:px-8 px-5 xl:pt-8 xl:pb-16 md:py-12 py-8" 
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="w-full max-w-[1288px]">
        <div className="flex items-center justify-center xl:min-h-[600px]">
          <div className="flex flex-col xl:flex-row items-center xl:items-center gap-4 md:gap-6 xl:gap-0 max-w-[1120px] w-full">
                          {/* Mobile Image - Hidden on desktop */}
              <div className="flex xl:hidden w-full justify-center mb-4 md:mb-6">
                <Image 
                  src="/Group 1000001527.png" 
                  alt="Friendly robot working on laptop" 
                  width={400}
                  height={400}
                  className="w-full max-w-[350px] md:max-w-[450px] aspect-square object-contain"
                  draggable={false}
                />
              </div>
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col text-center xl:text-left w-full xl:flex-[2.8] xl:pr-0">
              <h1 
                className="text-4xl tracking-tight md:max-w-[545px] px-4 md:px-0 mx-auto xl:mx-0" 
                style={{
                  fontWeight: "500", 
                  fontSize: "clamp(40px, 8vw, 66px)", 
                  lineHeight: "1.1",
                  color: COLORS.text,
                  fontFamily: FONTS.primary
                }}
              >
                The Chrome <span style={{color: '#1D7BA7'}}>Extension</span> that bridge tabs to <span style={{color: '#1D7BA7'}}>life</span>
              </h1>
              
              <p 
                className="md:max-w-[700px] mt-6 xl:mt-[38px] px-4 md:px-0 mx-auto xl:mx-0 text-lg md:text-xl" 
                style={{
                  lineHeight: "140%", 
                  fontWeight: "normal",
                  color: COLORS.text
                }}
              >
                When AI can interact with web pages, it creates meaningful value, but also opens up new risks. We're releasing Claude for Chrome as a limited research preview to learn from real-world use.
                <br /><br />
                Our goal is to explore safe ways for AI to browse the web—not just for our products, but for the entire AI ecosystem.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="mt-6 xl:mt-[38px] flex justify-center xl:justify-start">
                <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] px-4 md:px-0">
                  <button 
                    className="inline-flex items-center justify-center relative shrink-0 h-11 rounded-xl px-5 min-w-[6rem] whitespace-nowrap text-base flex items-center gap-2 w-full md:w-auto justify-center transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]" 
                    type="button"
                    style={{
                      backgroundColor: COLORS.buttonBg,
                      color: COLORS.buttonText
                    }}
                  >
                    Meet Claude for Chrome
                    <div className="flex items-center justify-center w-4 h-4" style={{width: "20px", height: "20px"}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4" aria-hidden="true">
                        <path d="M10 3C10.2761 3.00006 10.5 3.2239 10.5 3.5V15.293L14.6465 11.1465C14.8418 10.9514 15.1583 10.9513 15.3536 11.1465C15.5487 11.3417 15.5486 11.6583 15.3536 11.8535L10.3535 16.8535C10.2598 16.9473 10.1326 17 10 17C9.90062 17 9.8042 16.9703 9.72268 16.916L9.64651 16.8535L4.6465 11.8535C4.45138 11.6582 4.45128 11.3417 4.6465 11.1465C4.84172 10.9513 5.15827 10.9514 5.35353 11.1465L9.50003 15.293V3.5C9.50003 3.22386 9.72389 3 10 3Z"></path>
                      </svg>
                    </div>
                  </button>
                  
                  <button 
                    className="inline-flex items-center justify-center relative shrink-0 h-11 rounded-xl px-5 min-w-[6rem] whitespace-nowrap text-base w-full md:w-auto justify-center transition-colors duration-200 hover:bg-gray-100" 
                    type="button"
                    style={{
                      color: COLORS.text,
                      borderColor: COLORS.text,
                      border: `1px solid ${COLORS.text}`
                    }}
                  >
                    Read the blog post
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Desktop Image */}
            <div className="hidden xl:flex justify-end flex-shrink-0 xl:flex-[2.2] xl:pl-8">
              <Image 
                src="/Group 1000001527.png" 
                alt="Friendly robot working on laptop" 
                width={600}
                height={600}
                className="w-full max-w-[400px] xl:max-w-[600px] aspect-square object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
