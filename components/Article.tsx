import { news } from '../utils/types'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({ data }: { data: news }) => {
  return (
    <div className='m-2 py-2 border-b border-blue-300 mb-4 shadow-2xl px-2 rounded-xl'>
      <div className='relative w-full h-[300px]'>
        <Image src={`${data?.urlToImage !== null ? data?.urlToImage : '/img/news-u-logo.webp'}`} alt={data?.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw" className='object-cover rounded-2xl' />
      </div>
      <Link
        href={data?.url || "#"}
        target="_blank"
        className="font-bold text-lg"
      >
        {data?.title}
      </Link>
      <div className='flex space-x-4 my-2'>
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
      <p className='text-sm'>{data?.description}</p>
    </div>
  )
}

export default Article