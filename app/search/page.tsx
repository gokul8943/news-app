'use client'

import Article from '@/components/Article'
import { news } from '../../utils/types'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchByQuery } from '@/api'
import { ClipLoader } from 'react-spinners'
import Pagination from '@/components/Pagination'

const Search = () => {
  const [newsData, setNewsData] = useState<news[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)

  const searchParams = useSearchParams()
  const search = searchParams ? searchParams.get('q') : ''

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getNews = async () => {
      try {
        setLoading(true)
        const response = await fetchByQuery(search || '', page)
        const articles: news[] = response?.data.articles || []
        const filteredArticles = articles.filter(article => article?.source.id !== null)
        setNewsData(filteredArticles)

        // Check for next page
        const nextPageRes = await fetchByQuery(search || '', page + 1)
        const nextArticles = nextPageRes?.data.articles || []
        const hasMore = nextArticles.filter((article: { source: { id: null } }) => article?.source.id !== null).length > 0
        setHasNextPage(hasMore)
        setLoading(false)
      } catch (error) {
        if (typeof error === 'object' && error !== null) {
          console.log(error.toString())
        } else {
          console.log('Unexpected error', error)
        }
        setLoading(false)
      }
    }

    getNews()
    return () => {
      controller.abort()
    }
  }, [search, page])

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  const handleNext = () => {
    if (hasNextPage) setPage(prev => prev + 1)
  }

  return (
    <div className="w-full max-w-3xl mx-auto pt-4 px-4">
      {loading ? (
        <div className="flex justify-center py-8">
          <ClipLoader size={50} color="#2563eb" />
        </div>
      ) : (
        <>
          {newsData.length === 0 ? (
            <p className="text-center text-gray-500">No articles found.</p>
          ) : (
            <>
              {newsData.map((article: news, idx: number) => (
                <div key={`${article?.title}-${idx}`}>
                  <Article data={article} />
                </div>
              ))}

              {/* Pagination Controls */}
              <Pagination page={page} onPrev={handlePrev} onNext={handleNext} hasNextPage={hasNextPage} />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Search
