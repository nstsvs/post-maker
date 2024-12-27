import React from 'react';
import styles from './post-list.module.css';
import { usePostList } from '@/entities/post/usePostList';
import { Link, Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useAppDispatch } from '@/entities/reduxHooks';
import { useUser } from '@/entities/auth/useUser';
import { removeUser } from '@/store/slices/userSlice';

export const PostList = () => {
  const { hasError, isLoading, posts } = usePostList();
  const {isAuth, email} = useUser();

  return isAuth ? (
    <div className={styles.wrapper}>
      {hasError && <p className={styles.warning}>Something went wrong</p>}
      {isLoading ? <Skeleton count={10} style={{ height: '100px', marginBottom: '10px' }} /> :
        <ul>
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
    </div>
  ) : <Navigate to="/login" />
}
