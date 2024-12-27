import { useEffect, useState } from 'react';
import { IPost } from '../post/types';
import api from '../post/api/baseUrl';
import axios from 'axios';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

export const usePostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchPosts = async () => {
      try {
        const resp = await api.get<IPost[]>('/posts');
        setPosts(resp.data);
      } catch (err) {
        if (axios.isAxiosError<ValidationError>(err)) {
          console.log(err.status);
          console.error(err.response);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, isLoading, error };
}
