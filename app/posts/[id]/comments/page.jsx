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
    
  }}>
      {comments.map((coment) => (
        <li key={coment.id} style={{
          display: "flex", 
          margin: "15px", 
          background: "#222", 
          borderRadius:"5px",
          padding: "10px 40px"
          }}>
          <Image 
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${coment.email}`}
              width={150}
              height={150}
              alt={coment.name}>
          </Image>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>{coment.email}</p>
            <small>{coment.body}</small>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default post;