const PostLayout = ({children}) => {
  return (
    <div>
      <small>Home &bull; Posts</small>
      <hr></hr>
      {children}
    </div>
  )
}

export default PostLayout;