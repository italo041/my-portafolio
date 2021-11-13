import siteMetadata from '@/data/siteMetadata'
import platziCoursesData from '@/data/platziCoursesData'
import udemyCoursesData from '@/data/udemyCoursesData'
import couseraCoursesData from '@/data/couseraCoursesData'
import HorizontalCard from '@/components/HorizontalCard'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="animate__animated animate__fadeIn">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Platzi Courses
            </h1>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap -m-4">
              {platziCoursesData.map((d) => (
                <HorizontalCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Udemy Courses
            </h1>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap -m-4">
              {udemyCoursesData.map((d) => (
                <HorizontalCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  width={175}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Coursera Courses
            </h1>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap -m-4">
              {couseraCoursesData.map((d) => (
                <HorizontalCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
