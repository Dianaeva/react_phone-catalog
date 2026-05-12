import React from 'react';

import styles from './Header.module.scss';

import { NavBar } from './components/NavBar';
import { Logo } from './components/Logo';

const HeaderBase = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__slice}>
        <Logo />
      </div>
      <div className={styles.Header__slice}>
        <NavBar />
      </div>
    </header>
  );
};

export const Header = React.memo(HeaderBase);
