import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.scss';

type Props = {
  children: React.ReactNode;
  to: string;
};

const btnClasses = ({ isActive }: { isActive: boolean }) => {
  return cn(classes.NavButton, classes['nav-button'], {
    [classes['NavButton--active']]: isActive,
  });
};

const NavButton: React.FC<Props> = ({ children, to }) => {
  return (
    <NavLink className={btnClasses} to={to}>
      {children}
    </NavLink>
  );
};

export default React.memo(NavButton);
