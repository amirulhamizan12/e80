"use client";

import * as React from "react";

const COLORS = {
  background: '#FEFCF4',
  text: '#262624',
  buttonBg: '#1D7BA7',
  buttonText: '#FEFCF4'
} as const;

const FONTS = {
  primary: 'RocaOne-Rg, sans-serif'
} as const;

const ShapeNextSection: React.FC = () => {
  return (
    <section 
      className="flex flex-col justify-center items-center xl:px-16 md:px-8 px-5" 
      style={{ backgroundColor: COLORS.background, paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="w-full max-w-[980px] text-center">
        <h2 
          className="tracking-tight mb-6" 
          style={{
            fontWeight: "500", 
            lineHeight: "1.1",
            color: COLORS.text,
            fontFamily: FONTS.primary,
            fontSize: 'clamp(32px, 6vw, 44px)'
          }}
        >
          Shape what comes next
        </h2>

        <p 
          className="text-lg md:text-xl mb-8 max-w-[720px] mx-auto" 
          style={{
            lineHeight: "140%", 
            fontWeight: "normal",
            color: COLORS.text
          }}
        >
          Share your ideas, ask questions, and collaborate with other developers. This open-source project is building the future of human-agent interaction.
        </p>

        <div className="flex justify-center">
          <button 
            className="inline-flex items-center justify-center relative shrink-0 h-12 rounded-xl px-8 min-w-[220px] whitespace-nowrap text-base font-medium transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]" 
            type="button"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText
            }}
          >
            Contributors Wanted
          </button>
        </div>

        <p 
          className="text-xs md:text-sm mt-8 max-w-[720px] mx-auto" 
          style={{ color: COLORS.text, opacity: 0.7 }}
        >
          This extension operates in full compliance with the Chrome Web Store User Data Policy, adhering to all Limited Use requirements governing the handling of data obtained via Chrome APIs.
        </p>
      </div>
    </section>
  );
};

export default ShapeNextSection;


