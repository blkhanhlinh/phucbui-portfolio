import Strip from '@/assets/images/strip.svg'
import ProjectGrid from '@/components/ProjectGrid'
import Image from 'next/image'
import Link from 'next/link'

export const projects = [
  {
    id: 1,
    name: 'Lyrics Video / 120 Degrees',
    type: 'project',
    src: '/images/120-degrees-lyrics-video.webp',
  },
  {
    id: 2,
    name: 'Lyrics Video / Chuc Em Ngu Ngon',
    type: 'project',
    src: '/images/chuc-em-ngu-ngon.webp',
  },
  {
    id: 3,
    name: 'Calendar Design / Mixigaming',
    type: "School's project",
    src: '/images/calendar-design.webp',
  },
  {
    id: 4,
    name: "UI/UX Research / Domino's Pizza",
    type: "School's project",
    src: '/images/uiux.webp',
  },
]

const Projects = () => {
  return (
    <>
      <div className='flex justify-between text-4xl uppercase font-bold mt-12 mb-16'>
        <h1>&#47;&#47;</h1>
        <h1>archive</h1>
        <h1>&#47;&#47;</h1>
      </div>
      <section>
        <div className='flex justify-between pb-24'>
          <div className='flex flex-col justify-between'>
            <h1 className='text-4xl uppercase font-bold'>Projects</h1>
            <Link href='/archive/projects' className='underline cursor-pointer text-xl'>
              see more &#62;&#62;
            </Link>
          </div>
          <ProjectGrid projects={projects} />
        </div>
        <div>
          <Image src={Strip} className='w-screen' />
        </div>
      </section>
    </>
  )
}

export default Projects
