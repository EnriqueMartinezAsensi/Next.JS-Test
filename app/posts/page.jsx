import Link from "next/link";
import LikeButton from "./likeButton";

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate:60
    }
  })
    .then(res => res.json());
}

const PostsPage = async () => {
  const posts = await fetchPosts();
  return <section>
    {posts.map((post) => (
      <article key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Link>
        <LikeButton id={post.id}></LikeButton>
      </article>
    ))}
  </section>
}

export default PostsPage;