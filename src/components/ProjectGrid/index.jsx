import classNames from 'classnames'
import Image from 'next/image'
import styles from './project-grid.module.scss'

const ProjectGrid = ({ projects }) => {
  return (
    <div className={classNames(styles.grid, 'grid grid-cols-2 grid-rows-2 gap-x-32 gap-y-10')}>
      {projects.map((project) => (
        <figure key={project.id} className={styles.card}>
          <div
            className={classNames(
              styles.cardImage,
              'w-[420px] h-[110px] rounded-small overflow-hidden'
            )}
          >
            <Image
              src={project.src}
              alt={project.name}
              width={420}
              height={110}
              className={classNames(styles.image, 'rounded-small')}
            />
          </div>
          <figcaption>
            <h2 className='text-xl font-bold pt-5'>{project.name}</h2>
            <p className='text-base'>{project.type}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default ProjectGrid
