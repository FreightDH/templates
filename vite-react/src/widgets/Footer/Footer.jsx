import cl from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}></div>
      </div>
    </footer>
  );
};
