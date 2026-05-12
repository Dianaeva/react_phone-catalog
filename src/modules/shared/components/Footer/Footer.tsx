import React from 'react';

import classes from './Footer.module.scss';
import { Logo } from './components/Logo';
import { Links } from './components/Links';
import { ButtonBackToTop } from './components/ButtonBackToTop';

const FooterBase = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Footer__container}>
        <Logo />
        <Links />
        <ButtonBackToTop />
      </div>
    </footer>
  );
};

export const Footer = React.memo(FooterBase);
