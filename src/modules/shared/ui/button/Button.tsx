import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

enum VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

enum SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VARIANTS;
  children: React.ReactNode;
  className?: string | undefined;
  size?: SIZES;
  selected?: boolean;
};

const Button: React.FC<Props> = ({
  variant = VARIANTS.SECONDARY,
  children,
  size = SIZES.SMALL,
  selected = false,
  className,
  ...props
}) => {
  const buttonClasses = cn(
    classes.Button,
    className,
    classes[`Button-${variant}`],
    classes[`Button-${variant}--${size}`],
    {
      [classes[`Button-${variant}--selected`]]: selected,
    },
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default React.memo(Button);
