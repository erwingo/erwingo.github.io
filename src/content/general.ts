import { z } from 'zod';
import { ExperiencesSchema, LanguageSchema } from './types';

export const experiences = ExperiencesSchema.parse([
  {
    type: 'education',
    position: 'Systems Engineer',
    description:
      "I obtained my Bachelor's degree in Systems Engineering in 2012.",
    location: 'Barranquilla, Colombia',
    company: 'Universidad del Norte',
    link: 'https://www.uninorte.edu.co/web/departamento-de-ingenieria-de-sistemas-y-computacion',
    startDate: '2008-01-15',
    endDate: '2012-12-15',
  },
  {
    type: 'work',
    position: 'Programming and Algorithms assistant',
    company: 'Universidad del Norte',
    description:
      'I worked as an instructor assistant in college for the Programming and Algorithms class.',
    location: 'Barranquilla, Colombia',
    link: 'https://www.uninorte.edu.co',
    startDate: '2009-07-15',
    endDate: '2010-07-15',
  },
  {
    type: 'work',
    position: 'Front-End Web Developer',
    company: 'Koombea',
    location: 'Barranquilla, Colombia',
    link: 'https://www.koombea.com',
    startDate: '2012-06-15',
    endDate: '2014-04-15',
  },
  {
    type: 'work',
    position: 'Senior Front-End Web Developer',
    company: 'Freelancer',
    location: 'Remote',
    startDate: '2014-04-15',
    endDate: '2015-02-15',
  },
  {
    type: 'work',
    position: 'Senior Front-End Web Developer',
    company: 'Squad Inc',
    link: 'https://socialsquad.co',
    location: 'São Paulo, Brazil',
    startDate: '2015-02-15',
    endDate: '2017-06-15',
  },
  {
    type: 'work',
    position: 'Senior Front-End Web Developer',
    company: 'Freelancer',
    location: 'Remote',
    startDate: '2017-06-15',
    endDate: '2018-04-15',
  },
  {
    type: 'work',
    position: 'Senior Web UI Developer',
    company: 'Globant',
    link: 'https://www.globant.com/',
    location: 'Bogotá, Colombia',
    startDate: '2018-04-15',
  },
]);

export const languages = z.array(LanguageSchema).parse([
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
]);

export const aboutMe: string[] = [
  `I'm a Systems Engineer graduated in 2012, who was always passionate about web development since my early days in college. My strength is Front-End Web development with emphasis on React and also have experience working with Back-End technologies using Node.js. Currently, my core tech stack is React, Next.js, TypeScript/JavaScript, Tailwind CSS and Node. I'm also familiar with React Native, Electron and other related technologies.`,

  `When I'm not coding, I like to play Chess, Basketball, Football and spend time with family and friends. Also, I enjoy learning new things, specially tech related stuff that can make my life easier.`,
];
