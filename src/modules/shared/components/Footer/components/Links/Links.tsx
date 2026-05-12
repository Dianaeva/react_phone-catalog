import React from 'react';
import cn from 'classnames';

import classes from './Links.module.scss';
import { Link } from 'react-router-dom';

const linkClasses = cn('text-uppercase', classes.Links__item);

const LinksBase = () => {
  return (
    <ul className={classes.Links}>
      <li className={linkClasses}>
        <Link to="/">github</Link>
      </li>
      <li className={linkClasses}>
        <Link to="/">contacts</Link>
      </li>
      <li className={linkClasses}>
        <Link to="/">rights</Link>
      </li>
    </ul>
  );
};

export const Links = React.memo(LinksBase);
