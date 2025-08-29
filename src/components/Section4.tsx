"use client";
import * as React from "react";
import Image from 'next/image';

function ImageShowcase() {
  return (
    <section className="flex flex-col justify-center items-center xl:px-20 xl:py-20 md:px-8 md:py-16 px-5 py-12 w-full bg-[#F8F2DF]">
      <Image
        src="https://api.builder.io/api/v1/image/assets/d416a39d477a4e0a83d55cfbcb48766b/6998a7a57afdcd915e1370c937239d7e70edc692?placeholderIfAbsent=true"
        alt="Input design illustration"
        width={969}
        height={566}
        className="object-contain max-w-full aspect-[1.71] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] xl:w-[969px] md:w-[750px] w-full"
      />
    </section>
  );
}

export default ImageShowcase;
