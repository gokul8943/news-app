import { fetchTopHeadlines } from '@/api'
import { removeDuplicateData } from '@/utils'
import React from 'react'
import Article from './Article'

const NewsCard = async () => {
    const topNews = await fetchTopHeadlines()
    console.log(topNews);

    const filterArticles = removeDuplicateData(topNews.data)

    return (
        <div className='w-[700px]'>
            {filterArticles.map((article, idx) => (
                <div key={`${article?.title}-${idx}`}>
                    <Article data={article} />
                </div>
            ))}
        </div>
    )
}

export default NewsCard
