import React, { Fragment } from 'react';
import css from 'styled-jsx/css';
import classNames from 'classnames';
import { getColorNameFromProps, getColorFromTheme } from '../constants';

const getComponentStyles = (props) => {
  const color = getColorNameFromProps(props);

  const { className, styles } = css.resolve`
    .btn {
      display: inline-block;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      background-color: ${getColorFromTheme(color, props.theme)};
      color: black;
    }

    .btn:hover {
      background-color: darken(@secondary, 10%);
      text-decoration: none;
      cursor: pointer;
    }

    .btn:active, .btn:focus {
        outline: none;
    }

    .block {
      display: block;
      width: 100%;
    }
  `;

  return {
    className: classNames('btn', className, props.className, {
      block: props.block,
    }),
    styles,
  }
};

const Button = ({ children, as, ...rest }) => {
  const { className, styles } = getComponentStyles(rest);

  const Component = as || ((props) => <button type="button" {...props} />);

  return (
    <>
      <Component className={className} {...rest}>
        {children}
      </Component>
      {styles}
    </>
  );
};

export default Button;
