import React from 'react';
import cn from 'classnames';

import classes from './NavBar.module.scss';

import BurgerIcon from '../../../../ui/icons/BurgerIcon';
import CloseIcon from '../../../../ui/icons/CloseIcon';

type Props = {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
};

const ToggleMenuButton: React.FC<Props> = ({ onToggleMenu, isMenuOpen }) => {
  const btnClasses = cn(classes['nav-button'], classes.ToggleMenuButton);

  return (
    <button className={btnClasses} onClick={onToggleMenu}>
      {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );
};

export default React.memo(ToggleMenuButton);
