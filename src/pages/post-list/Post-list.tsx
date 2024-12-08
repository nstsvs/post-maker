import React from 'react';
import './post-list.css';
import { usePostList } from '@/entities/post/usePostList';

export const PostList = () => {
  const { hasError, isLoading, posts } = usePostList();

  return (
    <>
      {hasError && <p>Something went wrong</p>}
      {isLoading ? <p className="post-list__warning">Posts are loading, please wait...</p> :
        <ul className="post-list">
          {posts.map(({ id, title, body }) => (
            <li className='post-item' key={id}>
              <h2 className='post-item__title'>{title}</h2>
              <p className='post-item__desc'>{body}</p>
            </li>
          ))}
        </ul>
      }
    </>
  )
}
