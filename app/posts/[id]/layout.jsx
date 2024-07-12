import Link from "next/link";
import Image from "next/image";

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
      <h3>{`This is post number ${id}`}</h3>
      <div style={{display: "flex"}}>
        <Image 
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${post.userId}`}
                width={150}
                height={150}
                alt={post.userId}>
        </Image>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      </div>
      <hr></hr>
      <Link href={`/posts/${id}/comments`}>View comments</Link>
      {children}
    </article>
  );
};

export default singlePostLayout;