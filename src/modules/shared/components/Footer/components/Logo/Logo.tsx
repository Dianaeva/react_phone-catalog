import React from 'react';

import LogoImg from '../../../../../../assets/logo.svg';
import classes from './Logo.module.scss';

const LogoBase = () => {
  return <img src={LogoImg} alt="logo" className={classes.Logo} />;
};

export const Logo = React.memo(LogoBase);
