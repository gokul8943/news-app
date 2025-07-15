import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className='z-50 fixed w-full bg-white/45'>
      <ul className='py-2  px-2'>
        <li className='space-x-6 text-xs text-slate-900'>
          <Link href="/">Top headlines</Link>
          <Link href="/news/business">Business</Link>
          <Link href="/news/science">Science</Link>
          <Link href="/news/health">Health</Link>
          <Link href="/news/sports">Sports</Link>
          <Link href="/news/lifestyle">Lifestyle</Link>
          <Link href="/news/food">Food</Link>
          <Link href="/news/travel">Travel</Link>
          <Link href="/news/bitcoin">Bitcoin</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black border border-slate-500' />
    </nav>
  )
}

export default Navbar