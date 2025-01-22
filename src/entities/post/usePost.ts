import { useEffect, useState } from 'react';
import { api } from '@/entities/post/api/baseUrl';
import axios from 'axios';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const resp = await api.get(`/posts/${id}`);
        setPost(resp.data);
      } catch (err) {
        if (axios.isAxiosError<ValidationError>(err)) {
          console.log(err.status);
          console.error(err.response);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  return { post, loading, error };
}
