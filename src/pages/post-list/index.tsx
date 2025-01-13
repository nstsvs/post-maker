import styles from './index.module.css';
import { usePostList } from '@/entities/post/usePostList';
import { Link, Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useUser } from '@/entities/auth/useUser';
import { Pagination } from '@pages/ui/pagination';

export const PostList = () => {
  const { error, isLoading, page, posts, totalPages, changePage } = usePostList();
  const { isAuth } = useUser();

  return isAuth ? (
    <div className={styles.wrapper}>
      {error && <p className={styles.warning}>Something went wrong</p>}
      {isLoading ? <Skeleton count={10} style={{ height: '100px', marginBottom: '10px' }} /> :
        <ul>
          {posts.map(({ id, title, body }) => (
            <li className={styles.item} key={id}>
              <Link className={styles.link} to={`/post-page/${id}`}>
                <h2 className={styles.title}>
                  {id}. {title}
                </h2>
                <p>{body}</p>
              </Link>
            </li>
          ))}
        </ul>
      }
      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  ) : <Navigate to="/login" />
}
