import { createBrowserRouter, Navigate } from 'react-router-dom';
import { NotFound, PostList, PostPage, SignUpPage, LoginPage } from './pages';
import { Layout } from '@widgets/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/post-list" replace />
      },
      {
        path: 'post-list',
        element: <PostList />
      },
      {
        path: 'post-page/:id',
        element: <PostPage />
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'not-found',
        element: <NotFound />
      },
      {
        path: '*',
        element: <Navigate to="/not-found" replace />
      }
    ]
  }
]);
