import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Hero from './components/Hero';
import PostPage, { loader as postLoader } from './components/PostPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Hero />,
          errorElement: <ErrorPage />,
        },
        {
          path: 'post/:postId',
          element: <PostPage />,
          errorElement: <ErrorPage />,
          loader: postLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
