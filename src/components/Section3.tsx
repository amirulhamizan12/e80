"use client";
import * as React from "react";

interface HeroHeadingProps {
  children: React.ReactNode;
}

function HeroHeading({ children }: HeroHeadingProps) {
  return (
    <h1 className="w-full xl:text-5xl xl:leading-[65px] md:text-4xl md:leading-[55px] text-3xl leading-[40px] tracking-tight text-center text-neutral-800" style={{ fontFamily: 'RocaOne-Rg, sans-serif' }}>
      {children}
    </h1>
  );
}

interface HeroDescriptionProps {
  children: React.ReactNode;
}

function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    <p className="w-full xl:text-xl md:text-lg text-base tracking-tight xl:leading-7 md:leading-6 leading-5 text-center" style={{ letterSpacing: '-0.6px', color: '#262624' }}>
      {children}
    </p>
  );
}

interface JoinPreviewButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function JoinPreviewButton({ children, onClick }: JoinPreviewButtonProps) {
  return (
    <button
      className="flex justify-center items-center pt-3 pr-5 pb-3 pl-5 xl:w-60 md:w-52 w-full h-11 bg-cyan-700 rounded-xl cursor-pointer hover:bg-cyan-800 transition-colors duration-200"
      onClick={onClick}
    >
      <span className="xl:text-base md:text-sm text-sm font-medium tracking-tight leading-6 text-center text-stone-50" style={{ letterSpacing: '-0.6px', color: '#FEFCF4' }}>
        {children}
      </span>
    </button>
  );
}

export function JoinPreviewSection() {
  const handleJoinPreview = () => {
    // Handle join preview action
  };

  return (
    <section className="flex justify-center items-center xl:px-5 md:px-6 px-4 xl:py-32 md:py-24 py-16 w-full min-h-[469px]" style={{ backgroundColor: '#FEFCF4' }}>
      <div className="flex flex-col xl:gap-10 md:gap-8 gap-6 items-center w-full max-w-[757px]">
        <header className="flex flex-col xl:gap-4 gap-3 items-center w-full">
          <HeroHeading>
            Try Superwizard on Chrome
          </HeroHeading>
          <HeroDescription>
            Now Claude can navigate, click buttons, and fill forms—right in
            your browser. Max users get early access to test, explore, and
            shape what&apos;s next.
          </HeroDescription>
        </header>
        <JoinPreviewButton onClick={handleJoinPreview}>
          Join the research preview
        </JoinPreviewButton>
      </div>
    </section>
  );
}

export default JoinPreviewSection;
