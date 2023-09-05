import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { getInfo } from '@/utils/content';

export default async function HomePage() {
  const info = await getInfo();

  return (
    <main className="flex flex-col items-center px-4 pt-32">
      <Intro info={info} />
      <div className="mt-14 h-16 w-1 rounded-full bg-gray-200" />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
