import { fetchByCategory } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Business = async () => {
  const newsWorld = await fetchByCategory("business")
  const filterArticles = removeDuplicateData(newsWorld.data)

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default Business