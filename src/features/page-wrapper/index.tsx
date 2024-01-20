import { ReactNode, useState } from 'react';
import { BaseContainer } from './base-container';
import { ContentWrapper } from './content-wrapper';
import { Header } from './header';
import { MainContent } from './main-content';
import { Sidebar } from './sidebar';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onBurgerClick = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <BaseContainer>
      <Header onBurgerClick={onBurgerClick} />

      <ContentWrapper>
        {isOpenMenu && <Sidebar />}
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </BaseContainer>
  );
};
