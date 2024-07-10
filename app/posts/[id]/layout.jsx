import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate:60
    }
  })
    .then(res => res.json());
}

const singlePostLayout= async({params, children}) => {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (<article>
      <h3>Este es el post {id}</h3>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <hr></hr>
      <Link href={`/posts/${id}/comments`}>View comments</Link>
      {children}
    </article>
  );
};

export default singlePostLayout;