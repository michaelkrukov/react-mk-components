import React from 'react';
import classNames from 'classnames/bind';
import style from './style.less';

const cx = classNames.bind(style);

export const Row = ({ className, ...rest }) => (
  <div className={cx('Row', className)} {...rest} />
);

export const Col = ({
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  hideXs,
  hideSm,
  hideMd,
  hideLg,
  ...rest
}) => (
  <div
    className={cx(
      'Col',
      {
        [`Col-${xs}`]: xs,
        [`Col-sm-${sm}`]: sm,
        [`Col-md-${md}`]: md,
        [`Col-lg-${lg}`]: lg,
        [`Col-xl-${xl}`]: xl,
        [`offset-${offsetXs}`]: offsetXs,
        [`offset-sm-${offsetSm}`]: offsetSm,
        [`offset-md-${offsetMd}`]: offsetMd,
        [`offset-lg-${offsetLg}`]: offsetLg,
        [`offset-xl-${offsetXl}`]: offsetXl,
        'd-xs-none': hideXs,
        'd-sm-none': hideSm,
        'd-md-none': hideMd,
        'd-lg-none': hideLg,
      },
      className,
    )}
    {...rest}
  />
);
