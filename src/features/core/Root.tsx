import { Outlet } from 'react-router-dom';
import { PageWrapper } from './page-wrapper';
import { LanguageProvider } from './language';

export const RootComponet = () => (
  <LanguageProvider>
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  </LanguageProvider>
);
