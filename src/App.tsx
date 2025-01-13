import { createBrowserRouter, Navigate } from 'react-router-dom';
import { NotFound, PostList, PostPage, SignUpPage, LoginPage } from './pages';
import { Layout } from '@widgets/layout';
import { ROUTES } from '@shared/consts/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.POST_LIST} replace />
      },
      {
        path: ROUTES.POST_LIST,
        element: <PostList />
      },
      {
        path: ROUTES.POST_PAGE_ID,
        element: <PostPage />
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.NOT_FOUND} replace />
      }
    ]
  }
]);
