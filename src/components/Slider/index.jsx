import Polygon from '@/assets/icons/polygon.svg'
import ViewArchive from '@/assets/images/view-archive.svg'
import { Data } from '@/utils/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const ScrollSection = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  return (
    <section className='relative py-8'>
      <div ref={triggerRef}>
        <h1 className='text-lg md:text-2xl uppercase font-bold '>works</h1>
        <div ref={sectionRef} className='scroll-section-inner'>
          {Data.map((project) => {
            const { id, image, title } = project
            return (
              <article key={id} className='scroll-section rounded-default relative'>
                <Image
                  src={image}
                  alt={title}
                  width={530}
                  height={396}
                  className='scroll-section-img rounded-default drop-shadow-default'
                />
                <h3 className='text-base font-bold absolute bg-white w-full text-center bottom-0 py-3 rounded-default'>
                  {title}
                </h3>
              </article>
            )
          })}
        </div>
        <Link className='flex flex-row gap-7 absolute bottom-0 right-0' href='/archive'>
          <div className='flex flex-row gap-2 self-end pb-2'>
            <p className='text-gray font-bold see-more'>see more</p>
            <Image src={Polygon} alt='arrow' className='-rotate-90' />
          </div>
          <div className='h-36 w-36'>
            <Image src={ViewArchive} alt='View Archive' className='view-archive' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ScrollSection
