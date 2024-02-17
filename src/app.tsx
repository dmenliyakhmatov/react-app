import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './features/core/language';
import { router } from './router/router';
import { rootStore } from './store';

export const App = () => {
  return (
    <LanguageProvider>
      <Provider store={rootStore}>
        <RouterProvider router={router} />
      </Provider>
    </LanguageProvider>
  );
};
