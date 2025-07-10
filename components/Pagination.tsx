'use client'

import React from 'react'

type PaginationProps = {
  page: number
  onPrev: () => void
  onNext: () => void
  hasNextPage: boolean
}

const Pagination = ({ page, onPrev, onNext, hasNextPage }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 font-semibold">Page {page}</span>
      <button
        onClick={onNext}
        disabled={!hasNextPage}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
