import { createBrowserRouter } from 'react-router-dom';
import { RootComponet } from '../features/core/Root';
import { ArticlePage } from '../pages/Article';
import { FreshPage } from '../pages/Fresh';
import { PopularPage } from '../pages/Popular';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <RootComponet />,
    children: [
      {
        index: true,
        element: <PopularPage />,
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
