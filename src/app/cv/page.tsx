import { EducationExperience, WorkExperience } from '@/content/schemas';
import { getDateRange } from '@/utils/date';
import {
  getAbout,
  getExperiences,
  getInfo,
  getProjects,
} from '@/utils/content';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ExperienceBox from './ExperienceBox';
import './styles.css';
import Image from 'next/image';

export default async function CVPage() {
  const projects = await getProjects();
  const aboutMe = await getAbout();
  const info = await getInfo();
  const experiences = await getExperiences();
  const languages = info.languages;
  const skillsMap = projects.reduce<Record<string, number>>((acc, proj) => {
    proj.skills.forEach((sk) => (acc[sk] ? (acc[sk] += 1) : (acc[sk] = 1)));
    return acc;
  }, {});

  const skills = Object.keys(skillsMap)
    .map<[string, number]>((k) => [k, skillsMap[k] ?? 0])
    .sort((a, b) => {
      return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
    });

  const workExperiences = [...experiences]
    .filter((it): it is WorkExperience => it.type === 'work')
    .reverse();

  const educationExperiences = [...experiences]
    .filter((it): it is EducationExperience => it.type === 'education')
    .reverse();

  return (
    <div className="cv-container">
      <section className="text-center">
        <Image
          className="mx-auto mb-4 h-[200px] w-[200px] rounded-full border-4 border-[#2079c7] object-cover"
          alt="Profile picture"
          width={100}
          height={100}
          src={info.image}
        />
        <div>
          <h2 className="text-2xl font-bold">{info.name}</h2>
          <p>
            <span className="font-bold">Birthplace: </span>
            {info.birthplace}
          </p>
          <p>
            <span className="font-bold">Birthdate: </span>
            {info.birthdate}
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            <a href={`tel:${info.phone}`}>{info.phone}</a>
          </p>
          <p>
            <span className="font-bold">Email: </span>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </p>
        </div>
      </section>

      <section>
        <h1>Introduction</h1>
        <ReactMarkdown children={info.content} />
      </section>

      <section>
        <h1>About me</h1>
        <ReactMarkdown children={aboutMe.content} />
      </section>

      <section>
        <h1>Skills</h1>

        <p className="skills">
          {skills.map(([name], idx) => (
            <span key={idx}>{name} </span>
          ))}
        </p>
      </section>

      <section>
        <h1>Languages</h1>

        <ul>
          {languages.map((it, idx) => (
            <li key={idx}>
              {it.name} ({it.level})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1>Education</h1>
        {educationExperiences.map((it, idx) => (
          <ExperienceBox
            key={idx}
            title={it.company}
            subtitle={it.title}
            link={it.link}
            items={[it.location, getDateRange(it.startDate, it.endDate)]}
          />
        ))}
      </section>

      <section>
        <h1>Work experience</h1>

        {workExperiences.map((it, idx) => (
          <ExperienceBox
            key={idx}
            title={it.company}
            subtitle={it.position}
            link={it.link}
            items={[it.location, getDateRange(it.startDate, it.endDate)]}
          />
        ))}
      </section>

      <section>
        <h1>Projects</h1>
        {projects.map((it, idx) => (
          <ExperienceBox
            key={idx}
            title={it.name}
            subtitle={it.company}
            markdownContent={it.content}
            items={[
              ...(it.description ? [it.description] : []),
              getDateRange(it.startDate, it.endDate),
            ]}
          ></ExperienceBox>
        ))}
      </section>
    </div>
  );
}
