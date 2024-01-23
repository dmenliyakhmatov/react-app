import { Outlet } from 'react-router-dom';
import { OneComponentPageWrapper } from './example/OneComponentPageWrapper';

export const RootComponet = () => (
  <OneComponentPageWrapper>
    <Outlet />
  </OneComponentPageWrapper>
);
