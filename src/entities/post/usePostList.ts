import { useEffect, useState } from 'react';
import { IPost } from '../post/types';
import api from '../post/api/baseUrl';
import axios from 'axios';
import { getPageCount } from '@/entities/pagination/pages-count';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

export const usePostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const changePage = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchPosts = async () => {
      try {
        const resp = await api.get<IPost[]>('/posts',
          {
            params: {
              _limit: limit,
              _page: page
            }
          }
        );
        setPosts(resp.data);
        const totalCount = resp.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
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
  }, [page, limit]);

  return { posts, totalPages, page, limit, isLoading, error, changePage };
}
