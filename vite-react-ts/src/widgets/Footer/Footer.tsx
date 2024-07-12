import type { FC, ReactElement } from 'react';

import cl from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (): ReactElement => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}></div>
      </div>
    </footer>
  );
};
