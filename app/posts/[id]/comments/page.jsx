import Image from "next/image";

const fetchComments = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate:60
    }
  })
    .then(res => res.json());
}

const post = async({params}) => {
  const { id } = params;
  const comments = await fetchComments(id);

  return (<ul style={{
    fontSize: "12",
    background: "#222",
    padding: "10px 40px",
    borderRadius:"5px"
  }}>
      {comments.map((coment) => (
        <li key={coment.id} style={{display: "flex", margin: "15px"}}>
          <Image 
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${coment.email}`}
              width={150}
              height={150}
              alt={coment.name}>
          </Image>
          <small>{`${coment.body}. by: ${coment.email}`}</small>
        </li>
      ))}
    </ul>
  );
};

export default post;