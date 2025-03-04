import { FC } from 'react';
import { CommentProps } from '@/entities/post/useComments';
import styles from './index.module.scss';
import { LikesButton } from '@/widgets/likes-button';

interface CommentsProps {
  comments: CommentProps[];
}

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <ul className={styles.wrapper}>
      {comments.map(({ id, email, body }) => (
        <li key={id} className={styles.commentWrapper}>
          <p className={styles.header}>{email}</p>
          <p>{body}</p>
          <LikesButton />
          <hr />
        </li>
      ))}
    </ul>
  )
}
