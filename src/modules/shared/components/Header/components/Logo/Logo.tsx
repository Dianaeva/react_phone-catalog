import React from 'react';

import LogoImg from '../../../../../../assets/logo.svg';
import classes from './Logo.module.scss';

const Logo = () => {
  return <img src={LogoImg} alt="logo" className={classes.Logo} />;
};

export default React.memo(Logo);
