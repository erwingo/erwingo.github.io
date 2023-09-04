import SectionTitle from '@/components/SectionTitle';
import { experiences } from '@/content/general';
import { getDateRange } from '@/utils/date';
import { LuGraduationCap } from 'react-icons/lu';
import { MdBusinessCenter } from 'react-icons/md';

export default function Experience() {
  return (
    <section className="max-w-[60rem] pt-[100px]" id="experience">
      <SectionTitle title="My Experience" />

      <div className='relative pb-1 pt-8 before:absolute before:left-[calc(theme(spacing.timelineIconSize)/2)] before:top-0 before:-z-10 before:-ml-[2px] before:h-full before:w-[4px] before:rounded-lg before:bg-gray-200 before:content-[""] md:before:left-1/2'>
        {experiences.map((it, idx) => (
          <div
            key={idx}
            className="group mb-10 grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] [&>*]:row-span-full"
          >
            <div className="relative ml-4 rounded border border-gray-300 bg-gray-200/50 p-4 dark:border-gray-700 dark:bg-gray-900 md:mr-auto md:group-odd:ml-auto md:group-odd:mr-8 md:group-even:col-start-3 md:group-even:ml-8">
              <div className="absolute left-[-10px] top-[calc(theme(spacing.timelineIconSize)/2-theme(spacing.timelineArrowHeight))] h-0 w-0 border-y-[length:theme(spacing.timelineArrowHeight)] border-r-[10px] border-y-transparent border-r-gray-300 dark:border-r-gray-700 md:group-odd:left-auto md:group-odd:right-[-10px] md:group-odd:border-l-[10px]  md:group-odd:border-r-0 md:group-odd:border-l-gray-300 md:group-odd:border-r-transparent md:dark:group-odd:border-l-gray-700" />

              <h3 className="text-base font-semibold">{it.position}</h3>
              <h4 className="text-sm font-normal">
                {it.company}
                <span className="italic opacity-70"> - {it.location}</span>
              </h4>
              <h4 className="text-sm font-normal italic opacity-70 md:hidden">
                {getDateRange(it.startDate, it.endDate)}
              </h4>
              <p className="mt-1">{it.description}</p>
            </div>

            <div className="col-start-1 flex h-timelineIconSize w-timelineIconSize items-center justify-center rounded-full border-4 border-white bg-white text-[26px] text-gray-700 shadow-inner shadow-black/30 md:col-start-2">
              {it.type === 'education' ? (
                <LuGraduationCap />
              ) : (
                <MdBusinessCenter />
              )}
            </div>

            <div className="hidden h-timelineIconSize items-center italic text-gray-600 group-odd:ml-2 group-even:col-start-1 group-even:mr-2 group-even:justify-self-end dark:text-gray-400 md:flex">
              {getDateRange(it.startDate, it.endDate)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
