import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })

      const projects = response.items.map(item => {
        const {title, url, image} = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url

        return {title, url, img, id}
      })

      setIsLoading(false)
      setProjects(projects)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { projects, isLoading }
}
