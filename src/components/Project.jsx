const Project = ({ id, title, url, img }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="w-full  bg-white rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <img
        src={img}
        alt={title}
        className="h-[300px] object-cover w-full rounded-t-md"
      />
      <p className="text-center my-4 capitalize text-xl font-medium">{title}</p>
    </a>
  )
}
export default Project
