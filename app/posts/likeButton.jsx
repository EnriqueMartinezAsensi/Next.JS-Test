'use client'

import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <button 
      onClick={() => setLiked(!liked)} 
      style={{
        border: "transparent", 
        borderRadius: "4px",
        background: "#222", 
        padding: "4px"
      }}
    >{liked ? "❤️" : "🤍"}</button>
  )
}

export default LikeButton;