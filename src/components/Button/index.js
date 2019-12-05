import React from 'react';
import classNames from 'classnames/bind';
import style from './style.less';

const cx = classNames.bind(style);

const Button = ({
  /* Basic */
  className,
  children,
  as,
  /* Colors */
  primary,
  secondary,
  danger,
  success,
  warning,
  info,
  dark,
  light,
  transparent,
  /* Display */
  block,

  ...rest
}) => {
  const classes = {
    primary,
    secondary,
    danger,
    success,
    warning,
    info,
    dark,
    light,
    transparent,
    block,
  };

  const Component = as || ((props) => <button type="button" {...props} />);

  return (
    <Component
      className={cx('Button', classes, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
