import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {
  const route = useRouter();
  const { blogid, reviewid } = route.query;

  console.log(blogid, reviewid);

  return (
    <div>
      <p>{`Blogid:${blogid}`}</p>
      <p>{`Review:${reviewid}`}</p>
    </div>
  )
}

export default Review