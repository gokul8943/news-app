import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className='z-50 w-full'>
      <ul className='py-2  px-2'>
        <li className='space-x-6 text-xs text-slate-700'>
          <Link href="/world">Top headlines</Link>
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/science">Science</Link>
          <Link href="/health">Health</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/books">Books</Link>
          <Link href="lifestyle">Lifestyle</Link>
          <Link href="/food">Food</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/bitcoin">Bitcoin</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black border border-slate-500' />
    </nav>
  )
}

export default Navbar