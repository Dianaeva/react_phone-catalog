import React from 'react';

import classes from './ButtonBackToTop.module.scss';

import Button from '../../../../ui/button/Button';
import ArrowUp from '../../../../ui/icons/ArrowUp';

const ButtonBackToTopBase = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.ButtonBackToTop}>
      <small className={classes.ButtonBackToTop__label}>Back to top</small>
      <Button
        className={classes.ButtonBackToTop__btn}
        onClick={handleScrollToTop}
      >
        <ArrowUp />
      </Button>
    </div>
  );
};

export const ButtonBackToTop = React.memo(ButtonBackToTopBase);
