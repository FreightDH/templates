import cl from './Header.module.scss';

export const Header = () => {
return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}></div>
      </div>
    </header>
  );
};
