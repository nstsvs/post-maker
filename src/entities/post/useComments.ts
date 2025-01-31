import { useEffect, useState } from 'react';
import { api } from '@/entities/post/api/baseUrl';
import axios from 'axios';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

export interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useComments = (id: string) => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const resp = await api.get<CommentProps[]>(`/posts/${id}/comments`);
        setComments(resp.data);
      } catch (err) {
        if (axios.isAxiosError<ValidationError>(err)) {
          console.error(err.response);
        }
      }
    }
    fetchComment();
  }, [id])

  return { comments }
}
