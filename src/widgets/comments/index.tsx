import { FC } from 'react';
import { CommentProps } from '@/entities/post/useComments';

interface CommentsProps {
  comments: CommentProps[];
}

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map(({ id, name, email, body }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  )
}
