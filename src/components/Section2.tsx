'use client';

import { useEffect, useRef } from 'react';
import { PiFlaskFill } from "react-icons/pi";

const ResearchPreviewBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition -= scrollSpeed;
      
      // Reset position when first item is completely out of view
      const firstItem = scrollElement.firstElementChild as HTMLElement;
      if (firstItem && scrollPosition <= -firstItem.offsetWidth) {
        scrollPosition = 0;
      }
      
      scrollElement.style.transform = `translateX(${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div 
      className="w-full bg-gradient-to-r from-[#F5DB9A] via-[#F7E4B3] to-[#F5DB9A] overflow-hidden relative shadow-sm"
      style={{ height: 'clamp(40px, 8vw, 52px)' }}
    >
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      
      {/* Seamless infinite scroll container */}
      <div className="relative w-full h-full flex items-center">
        <div 
          ref={scrollRef}
          className="flex items-center"
          style={{
            willChange: 'transform',
            transform: 'translateX(0)',
          }}
        >
          {/* Multiple instances for seamless loop - increased for smoother experience */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="flex items-center flex-shrink-0">
              <span className="xl:px-4 md:px-3 px-2 whitespace-nowrap">
                <span className="font-semibold text-gray-900 xl:text-base md:text-sm text-xs">
                  <PiFlaskFill className="inline mr-2 scale-110 -mt-0.5" />
                  Research preview:
                </span>
                <span className="text-gray-800 xl:text-base md:text-sm text-xs"> The browser extension is a beta feature with unique risks—stay alert and protect yourself from bad actors.</span>
              </span>
              <div className="xl:w-16 md:w-12 w-8 h-px bg-gray-300 xl:mx-2 mx-1" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle fade edges for better visual flow */}
      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#F5DB9A] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#F5DB9A] to-transparent pointer-events-none" />
    </div>
  );
};

export default ResearchPreviewBanner;
