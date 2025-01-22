import { usePost } from '@/entities/post/usePost';
import { useParams } from 'react-router-dom';

export const PostPage = () => {
  const { id } = useParams();
  const { post, loading, error } = usePost(`${id}`);

  if (error) return <div message={error}>Error</div>;
  if (!post || loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
