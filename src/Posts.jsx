import './App.css'
import React, {useState, useEffect} from 'react'

// Hakee datat: https://jsonplaceholder.typicode.com/posts

function Posts() {

    // useEffect suoritetaan aina alussa. Hyödynnetään
    // sitä datan hakemisessa.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json()) // muuttaa jsonin js muotoon
        .then(data => setPosts(data))
    },
    [])

    // state jonne postaukset ladataan setPosts komennolla ylempänä
    const [posts, setPosts] = useState([])

  return (
    <>
     <h2>Posts</h2>

     {posts && posts.map(post => (

      <div className='postbox'>
        <h3>{post.title}</h3>
        <p>Member with id {post.userId} wrote:</p>
        <p>{post.body}</p>
      </div>
      
     )
     )}
    </>
  )
}

export default Posts
