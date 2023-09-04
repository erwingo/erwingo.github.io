'use client';

import profilePicImg from '@/assets/profilepic.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

type Button = {
  buttonProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  href: string;
} & (
  | {
      type: 'normal';
      label: string;
      iconRight?: ReactNode;
    }
  | { type: 'icon'; icon: ReactNode }
);

const buttons: Button[] = [
  {
    type: 'normal',
    label: 'Download CV',
    href: '/CV.pdf',
    buttonProps: { download: true },
    iconRight: <HiDownload className="transition group-hover:translate-y-1" />,
  },
  {
    type: 'icon',
    href: 'https://www.linkedin.com/in/goerwin/',
    buttonProps: {
      title: 'LinkedIn',
      target: '_blank',
    },
    icon: <FaLinkedin />,
  },
  {
    type: 'icon',
    href: 'https://github.com/goerwin',
    buttonProps: {
      title: 'Github',
      target: '_blank',
    },
    icon: <FaGithub />,
  },
];

export default function Intro() {
  // const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      // ref={ref}
      id="intro"
      className="mb-28 max-w-[54rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profilePicImg}
              alt="Ricardo portrait"
              width="120"
              height="120"
              quality="95"
              priority={true}
              className="h-[120px] w-[120px] rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-normal sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Erwin.</span> I&apos;m a{' '}
        <span className="font-bold">Senior Front-End Developer</span> with
        industry experience <span className="font-bold">since 2012. </span> I
        enjoy building sites & apps using mainly{' '}
        <span className="font-bold">React</span>,{' '}
        <span className="font-bold">JavaScript/TypeScript</span> and{' '}
        <span className="font-bold">Next.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {buttons.map((it, idx) => (
          <Link
            key={idx}
            {...it.buttonProps}
            href={it.href}
            className={twMerge(
              'group flex items-center rounded-full bg-white text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-105 dark:bg-gray-900 dark:text-white',
              it.type === 'normal' && 'gap-2 px-7 py-4 text-base',
              it.type === 'icon' && 'p-4 text-2xl',
            )}
          >
            {it.type === 'normal' ? it.label : null}
            {it.type === 'normal' ? it.iconRight : null}
            {it.type === 'icon' ? it.icon : null}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
