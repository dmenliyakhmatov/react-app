import { Outlet } from 'react-router-dom';
import { PageWrapper } from './page-wrapper';

export const RootComponet = () => (
  <PageWrapper>
    <Outlet />
  </PageWrapper>
);
