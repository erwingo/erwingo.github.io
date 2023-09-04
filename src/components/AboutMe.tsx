import SectionTitle from '@/components/SectionTitle';
import { aboutMe } from '@/content/general';

export default function AboutMe() {
  return (
    <section className="max-w-[40rem] pt-[100px] text-center" id="about">
      <SectionTitle title="About Me" />

      {aboutMe.map((it, idx) => (
        <p key={idx} className="mb-5 leading-loose">
          {it}
        </p>
      ))}
    </section>
  );
}
