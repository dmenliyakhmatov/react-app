import { createBrowserRouter } from 'react-router-dom';
import { RootComponet } from '../features/core/Root';
import { Popular } from '../features/popular/ui';
import { ArticlePage } from '../pages/Article';
import { FreshPage } from '../pages/Fresh';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <RootComponet />,
    children: [
      {
        index: true,
        element: <Popular />,
      },
      {
        path: ROUTES.fresh,
        element: <FreshPage />,
      },
      {
        path: `${ROUTES.article}/:id`,
        element: <ArticlePage />,
      },
    ],
  },
]);
