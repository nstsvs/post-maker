import { useEffect, useState } from 'react';
import { IPost } from '../post/types';
import api from '../post/api/baseUrl';

export const usePostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const fetchPosts = async () => {
      try {
        const resp = await api.get('/posts');
        setPosts(resp.data)
      } catch (err) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, isLoading, hasError };
}
