import { fetchByCategory } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Sports = async () => {
  const newsWorld = await fetchByCategory("sports")
  const filterArticles = removeDuplicateData(newsWorld)

  return (
    <div className='w-[700px] pt-3'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default Sports