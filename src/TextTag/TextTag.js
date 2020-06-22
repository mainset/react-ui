import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TextTag = ({
  as,

  className,
  children,

  align,
  color,
  size,
  weight,

  ...props
}) =>
  React.createElement(
    as,
    {
      className: cn(
        'ms-text',
        {
          [`ms-text--align-${align}`]: align,
          [`ms-text--color-${color}`]: color,
          [`ms-text--size-${size}`]: size,
          [`ms-text--weight-${weight}`]: weight,
        },
        className
      ),
      ...props,
    },
    children
  );

TextTag.defaultProps = {
  className: '',

  align: '',
  color: '',
  weight: 'normal',
};

TextTag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,

  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'span', 'div', 'a']).isRequired,

  align: PropTypes.oneOf(['', 'center', 'right']),
  color: PropTypes.oneOf(['']),
  size: PropTypes.oneOf([
    'xx-small',
    'x-small',
    'smaller',
    'sm',
    'md',
    'lg',
    'larger',
    'x-large',
    'xx-large',
  ]).isRequired,
  weight: PropTypes.oneOf(['lighter', 'normal', 'bolder', 'bold']),
};

export default TextTag;
