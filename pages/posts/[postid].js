export default function Post({ post }) {
  return (
    <>
      {
        <div>
          <p>{post.id}: {post.title}</p>
          <p>
            {post.body}
          </p>
        </div>
      }
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postid: '1' }
      },
      {
        params: { postid: '2' }
      },
      {
        params: { postid: '3' }
      }
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const { params } = context;

  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
  const data = await resp.json();

  return {
    props: {
      post: data,
    },
  }
}