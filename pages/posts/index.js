import Link from 'next/link';

export default function PostsList({ posts }) {
  return (
    <ul>
      {
        posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                {post.id}: {post.title}
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export async function getStaticProps(context) {

  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  }
}