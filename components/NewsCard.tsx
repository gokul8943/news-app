'use client'

import { useEffect, useState } from 'react'
import { fetchTopHeadlines } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from './Article'
import Pagination from './Pagination'
import { ClipLoader } from 'react-spinners'

const NewsCard = () => {
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true)

  const loadArticles = async (currentPage: number) => {
    setLoading(true)

    const response = await fetchTopHeadlines(currentPage)
    const filtered = removeDuplicateData(response.data)
    setArticles(filtered)

    const nextPageResponse = await fetchTopHeadlines(currentPage + 1)
    const nextPageArticles = removeDuplicateData(nextPageResponse.data)
    setHasNextPage(nextPageArticles.length > 0)

    setLoading(false)
  }

  useEffect(() => {
    loadArticles(page)
  }, [page])

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  const handleNext = () => {
    if (hasNextPage) setPage(prev => prev + 1)
  }

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <ClipLoader size={50} color="#2563eb" />
        </div>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        articles.map((article, idx) => (
          <div key={`${article?.title}-${idx}`}>
            <Article data={article} />
          </div>
        ))
      )}

      {/* Pagination */}
      <Pagination page={page} onPrev={handlePrev} onNext={handleNext} hasNextPage={hasNextPage} />
    </div>
  )
}

export default NewsCard
