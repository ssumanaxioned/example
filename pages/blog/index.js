import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className='space-x-4'>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <Link href="/blog/first" >
        <a>
          First
        </a>
      </Link>
      <Link href="/blog/second" >
        <a>
          Second
        </a>
      </Link>
      <Link href="/blog/third" replace>
        <a>
          Third
        </a>
      </Link>
    </div>
  )
}

export default Blog