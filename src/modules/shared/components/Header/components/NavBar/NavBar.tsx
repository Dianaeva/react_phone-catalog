import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import classes from './NavBar.module.scss';

import useBreakpoints from '../../../../hooks/useBreakpoints';

import Navigation from './Navigation';
import NavButton from './NavButton';
import ToggleMenuButton from './ToggleMenuButton';
import HeartIcon from '../../../../ui/icons/HeartIcon';
import ShoppingCartIcon from '../../../../ui/icons/ShoppingCartIcon';

const NavBarMenu = () => {
  return (
    <div className={classes.NavBarMenu}>
      <div className={classes.NavBarMenu__navigation}>
        <Navigation />
      </div>
      <div className={classes.NavBarMenu__bar}>
        <NavButton to="/">
          <HeartIcon />
        </NavButton>
        <NavButton to="/cart">
          <ShoppingCartIcon />
        </NavButton>
      </div>
    </div>
  );
};

const NavBarBase = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useBreakpoints();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
        <ToggleMenuButton onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div
          className={cn(classes.NavBar__menu, {
            [classes['NavBar__menu--open']]: isMenuOpen,
          })}
        >
          <NavBarMenu />
        </div>
      </>
    );
  } else {
    return <NavBarMenu />;
  }
};

export const NavBar = React.memo(NavBarBase);
