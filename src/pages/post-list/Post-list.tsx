import React, { useEffect, useState } from 'react';
import api from '../../shared/api/baseUrl';
import './post-list.css';

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
    return <div className='post-list__warning'>Posts are loading, please wait...</div>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li className='post-item' key={post.id}>
          <h2 className='post-item__title'>{post.title}</h2>
          <p className='post-item__desc'>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
