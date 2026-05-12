import React from 'react';

import classes from './NavBar.module.scss';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to="/">home</NavigationItem>
      <NavigationItem to="/phones">phones</NavigationItem>
      <NavigationItem to="/tablets">tablets</NavigationItem>
      <NavigationItem to="/accessories">accessories</NavigationItem>
    </ul>
  );
};

export default React.memo(Navigation);
