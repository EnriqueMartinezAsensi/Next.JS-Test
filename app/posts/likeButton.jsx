'use client'

import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
  )
}

export default LikeButton;