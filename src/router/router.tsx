import { createBrowserRouter } from 'react-router-dom';
import { RootComponet } from '../features/core/Root';
import { ArticlePage } from '../pages/Article';
import { AuthPage } from '../pages/Auth';
import { CreateArticlePage } from '../pages/CreateAritcle';
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
      {
        path: ROUTES.auth,
        element: <AuthPage />,
      },
      {
        path: ROUTES.createArticle,
        element: <CreateArticlePage />,
      },
    ],
  },

  // {
  //   path: ROUTES.auth,
  //   element: (
  //     <div>
  //       Авторизационный шаблон
  //       <Outlet />
  //     </div>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: <AuthPage />,
  //     },
  //   ],
  // },
]);
