import React from 'react';

export default function GradientBackground() {
  return (
    <>
      <div className="absolute left-[calc(50%+1rem)] top-[-6rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#2e0507]" />
      <div className="absolute left-[calc(50%-40rem)] top-[-1rem] -z-10 h-[32rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#6a5ae4]" />
    </>
  );
}
