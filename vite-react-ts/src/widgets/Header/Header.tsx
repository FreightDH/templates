import type { FC, ReactElement } from 'react';

import cl from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = (): ReactElement => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}></div>
      </div>
    </header>
  );
};
