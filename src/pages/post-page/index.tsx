import { usePost } from '@/entities/post/usePost';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import { useComments } from '@/entities/post/useComments';
import { Comments } from '@widgets/comments';
import { useState } from 'react';

export const PostPage = () => {
  const { id } = useParams();
  const { comments } = useComments(`${id}`);
  const { post, loading, error } = usePost(`${id}`);
  const [ openModal, setOpenModal ] = useState<boolean>(false);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div className={styles.wrapper}>
      {error && <div className={styles.status}>Something went wrong</div>}
      {loading ? <div className={styles.status}>Loading...</div> :
        <>
          <div className={styles.content}>
            <div className={styles.subtextWrapper}>
              <span className={styles.subtext}>User ID: {post?.userId}</span>
              <span className={styles.subtext}>Post ID: {post?.id}</span>
            </div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <button
              className={styles.button}
              onClick={toggleModal}
            >
              Comments: {comments.length}
            </button>
          </div>
          {openModal && <Comments comments={comments} />}
        </>
      }
    </div>
  )
}
