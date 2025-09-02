"use client";

import * as React from "react";

// Constants matching HeroSection
const COLORS = {
  primary: 'rgba(29,123,167,1)',
  background: '#FEFCF4',
  buttonBg: '#262624',
  buttonText: '#FEFCF4',
  text: '#262624',
  faqBackground: '#F8F2DF',
  faqText: '#262624'
} as const;

const FONTS = {
  primary: 'RocaOne-Rg, sans-serif'
} as const;

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'How does the Chrome extension work?',
    answer: 'Our Chrome extension bridges the gap between AI and web browsing by allowing Claude to interact with web pages safely. It creates meaningful value while maintaining security protocols to protect your data and browsing experience.'
  },
  {
    id: '2',
    question: 'What security measures are in place?',
    answer: 'We implement multiple layers of security including prompt injection protection, data encryption, and controlled access permissions. The extension operates as a limited research preview to ensure safe AI-web interactions while we learn from real-world usage patterns.'
  },
  {
    id: '3',
    question: 'Is my browsing data safe?',
    answer: 'Yes, we prioritize your privacy and security. The extension only accesses the specific web pages you interact with through Claude, and all data processing follows strict privacy guidelines. We never store or share your personal browsing information without explicit consent.'
  },
  {
    id: '4',
    question: 'When will the full version be available?',
    answer: 'We\'re currently in a limited research preview phase to gather feedback and improve the technology. The full version will be released based on user feedback and security validation. Stay updated by following our blog posts and announcements.'
  },
  {
    id: '5',
    question: 'How do I get started with the extension?',
    answer: 'Getting started is simple! First, install the extension from the Chrome Web Store. Once installed, you can begin using Claude to interact with web pages by clicking the extension icon in your browser toolbar. The extension will guide you through the initial setup process and explain how to use its features safely and effectively.'
  }
];

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section 
      className="flex flex-col justify-center items-center xl:px-16 md:px-8 px-5" 
      style={{ backgroundColor: COLORS.faqBackground, paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="w-full max-w-[800px]">
        {/* FAQ Title */}
        <h2 
          className="text-center mb-8 text-4xl md:text-5xl"
          style={{
            color: COLORS.faqText,
            fontFamily: FONTS.primary,
            fontWeight: '500',
            letterSpacing: '-0.02em'
          }}
        >
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openItem === item.id;
            
            return (
              <div key={item.id} className="border-b border-gray-400 last:border-b-0">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 px-0 text-left flex items-center justify-between group transition-all duration-200"
                  style={{ color: COLORS.faqText }}
                >
                  <span 
                    className="font-medium pr-4"
                    style={{ 
                      fontFamily: FONTS.primary,
                      fontSize: '22px',
                      lineHeight: '1.4'
                    }}
                  >
                    {item.question}
                  </span>
                  
                  <div 
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: COLORS.faqText
                    }}
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H9V4C9 3.44772 9.44772 3 10 3Z"
                      />
                    </svg>
                  </div>
                </button>
                
                {/* Answer Content */}
                <div 
                  className="overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div 
                    className="pb-6 text-base md:text-lg leading-relaxed"
                    style={{ 
                      color: COLORS.faqText,
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
