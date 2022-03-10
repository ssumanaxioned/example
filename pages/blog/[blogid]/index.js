import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link';

const BlogDetails = () => {

  const router = useRouter();
  const { blogid } = router.query;

  return (
    <div>
      <Link href={`/blog/${blogid}/review${blogid}`}>
        <a>{blogid} Blog review</a>
      </Link>
      <button className='underline block' onClick={() => router.replace('/')}>
        Go to home Page
      </button>
    </div>
  )
}

export default BlogDetails