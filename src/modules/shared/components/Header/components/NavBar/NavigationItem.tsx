import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.scss';

type Props = {
  children: React.ReactNode;
  to: string;
};

const linkClasses = ({ isActive }: { isActive: boolean }) => {
  return cn(classes.NavButton, classes.NavigationItem, 'text-uppercase', {
    [classes['NavigationItem--active']]: isActive,
  });
};

const NavigationItem: React.FC<Props> = ({ children, to }) => {
  return (
    <li>
      <NavLink className={linkClasses} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default React.memo(NavigationItem);
