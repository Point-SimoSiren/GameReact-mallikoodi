import './App.css'
import React, {useState, useEffect} from 'react'

// Hakee datat: https://jsonplaceholder.typicode.com/posts

function Posts() {

    // use effect suoritetaan aina alussa. Hyödynnetään
    // sitä datan hakemisessa.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json) // muuttaa jsonin js muotoon
        .then(data => setPosts(data))
    },
    [])

    // state jonne postaukset ladataan
    const [posts, setPosts] = useState([])

  return (
    <>
     <h2>Posts</h2>

     {posts && posts.map(post => (
        <h4>post.title</h4>
     )
     )}
    </>
  )
}

export default Posts
