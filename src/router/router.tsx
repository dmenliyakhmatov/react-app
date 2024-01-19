import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/root';
import { PostPage } from '../pages/Article';
import { Fresh } from '../pages/Fresh';
import { PopularPage } from '../pages/Popular';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <PopularPage /> },
      { path: 'fresh', element: <Fresh /> },
      { path: 'post/:id', element: <PostPage /> },
    ],
  },
]);
