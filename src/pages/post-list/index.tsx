import React from 'react';
import styles from './post-list.module.css';
import { usePostList } from '@/entities/post/usePostList';
import { Link } from 'react-router-dom';

export const PostList = () => {
  const { hasError, isLoading, posts } = usePostList();

  return (
    <>
      {hasError && <p className={styles.warning}>Something went wrong</p>}
      {isLoading ? <p className={styles.warning}>Posts are loading, please wait...</p> :
        <ul className={styles.list}>
          {posts.map(({ id, title, body }) => (
            <li className={styles.item} key={id}>
              <Link className={styles.link} to={`/post-page/${id}`}>
                <h2 className={styles.title}>{title}</h2>
                <p>{body}</p>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  )
}
