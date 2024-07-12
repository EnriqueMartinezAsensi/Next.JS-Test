import Link from "next/link";
import LikeButton from "./likeButton";
import Image from "next/image";

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
      <article key={post.id} style={{
        display: "flex", 
        justifyContent: "space-between",
        background: "#222", 
        borderRadius: "4px",
        margin: "0.5rem"
        }}>
        <Link href={`/posts/${post.id}`} style={{display: "flex"}}>
          <Image 
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${post.userId}`}
                  width={50}
                  height={50}
                  alt={post.userId}
                  style={{alignSelf: "center"}}>
          </Image>
          <h3>{post.title}</h3>
        </Link>
        <LikeButton id={post.id}></LikeButton>
      </article>
    ))}
  </section>
}

export default PostsPage;