import { fetchByCategory } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'
import React from 'react'

const Lifestyle = async () => {
      const newsWorld = await fetchByCategory("lifestyle")
      const filterArticles = removeDuplicateData(newsWorld.data)
    return (
        <div className='w-[700px] pt-3'>
            {filterArticles.map((article, idx) => (
                <div key={`${article?.title}-${idx}`}>
                    <Article data={article} />
                </div>
            ))}
        </div>
    )
}

export default Lifestyle
