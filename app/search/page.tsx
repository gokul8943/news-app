'use client'

import Article from '@/components/Article'
import { news } from '../../utils/types'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchByQuery } from '@/api'

const Search = () => {
  const [newsData, setNewsData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const search = searchParams ? searchParams.get('q') : null
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const getNews = async () => {
      try {
        setLoading(true)
        const response = await fetchByQuery(search || '', 1)
        const randomArticle:news[] = response?.data.articles
        const filterArticles = randomArticle.filter(article => article?.source.id !== null)
        setLoading(false)
        setNewsData(filterArticles)
      }
      catch(error) {
        if (typeof error === 'object' && error !== null) {
          console.log(error.toString());
        } else {
          console.log('Unexpected error', error);
        }
      }
    }
    getNews()

    return () => {
      controller.abort()
    }
  },[search])
  
  return (
    <div className='w-[700px]'>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {newsData.map((article:news, idx:number) => (
            <div key={`${article?.title}-${idx}`}>
              <Article data={article} />
            </div>
          ))}
        </>
        )
      }
    </div>
  )
}

export default Search