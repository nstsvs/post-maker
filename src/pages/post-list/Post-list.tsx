import React, { useEffect, useState } from 'react';
import api from '../../shared/api/baseUrl'

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resp = await api.get('/posts');
        setPosts(resp.data)
      } catch (err) {
        if (err.resp) {
          console.log(err);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, [])

  if (posts.length === 0) {
    return <div>Posts are loading, please wait...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
