import Project from './Project'

import { useFetchProjects } from '../fetchProjects'

const Projects = () => {
  const { projects, isLoading } = useFetchProjects()

  if (isLoading) return <p className='text-center text-2xl font-bold mt-16'>Loading...</p>

  return (
    <section className="w-full px-8 lg:px-16 2xl:px-56 mb-20">
      <div className="w-full relative">
        <h1 className="text-center text-3xl font-bold text-slate-800 mt-12">
          Projects
        </h1>
        <div className="absolute w-14 h-1 rounded-full bg-blue-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-7"></div>
      </div>
      <div className="mt-10 px-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
export default Projects
