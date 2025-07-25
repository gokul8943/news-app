import { fetchByCategory } from '@/api'
import RandomArticle from '../components/RandomArticle'
import { removeDuplicateData } from '@/utils'

const RandomNews = async () => {
  const randomNews = await fetchByCategory("business")
  
  
  const filterArticles = removeDuplicateData(randomNews.data)


  return (
    <div className='mt-4 w-[500px] border-l p-1 border-gray-300'>
      <h1 className="pl-2 text-2xl  font-bold text-blue-500">Random News</h1>
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  )
}

export default RandomNews