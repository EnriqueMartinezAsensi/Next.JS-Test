const post = ({params}) => {
  const { id } = params;

  return <h1>Este es el post {id}</h1>
}

export default post;