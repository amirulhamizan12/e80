"use client";

import * as React from "react";

// Constants - matching HeroSection styling
const COLORS = {
  primary: 'rgba(29,123,167,1)',
  background: '#FEFCF4',
  buttonBg: '#2a82a9',
  buttonText: '#FEFCF4',
  text: '#262624'
} as const;

const FONTS = {
  primary: 'RocaOne-Rg, sans-serif'
} as const;

const SubHero: React.FC = () => {
  return (
    <section 
      className="flex flex-col justify-center items-center xl:px-16 md:px-8 px-5" 
      style={{ backgroundColor: COLORS.background, paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="w-full max-w-[800px] text-center">
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl xl:text-6xl tracking-tight mb-6" 
          style={{
            fontWeight: "500", 
            lineHeight: "1.1",
            color: COLORS.text,
            fontFamily: FONTS.primary
          }}
        >
          Try Superwizard on Chrome
        </h2>
        
        {/* Description Paragraph */}
        <p 
          className="text-lg md:text-xl mb-8 max-w-[600px] mx-auto" 
          style={{
            lineHeight: "140%", 
            fontWeight: "normal",
            color: COLORS.text
          }}
        >
          Now Claude can navigate, click buttons, and fill forms—right in your browser. Max users get early access to test, explore, and shape what's next.
        </p>
        
        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button 
            className="inline-flex items-center justify-center relative shrink-0 h-12 rounded-xl px-8 min-w-[200px] whitespace-nowrap text-base font-medium transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]" 
            type="button"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText
            }}
          >
            Join the research preview
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
