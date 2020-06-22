import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Spacing = ({ as, className, children, type, size, ...props }) =>
  React.createElement(
    as,
    {
      className: cn('ms-spcng', `ms-spcng-${type}--${size}`, className),
      ...props,
    },
    children
  );

Spacing.defaultProps = {
  as: 'span',

  className: '',
};

Spacing.propTypes = {
  as: PropTypes.oneOf(['span', 'div']),
  className: PropTypes.string,
  children: PropTypes.node,

  type: PropTypes.oneOf([
    'm', // margin
    'p', // padding

    // margin
    'mt', // top
    'mr', // right
    'mb', // bottom
    'ml', // left

    'mv', // vertical
    'mh', // horizontal

    // padding
    'pt', // top
    'pr', // right
    'pb', // bottom
    'pl', // left

    'pv', // vertical
    'ph', // horizontal
  ]).isRequired,
  size: PropTypes.number.isRequired,
};

export default Spacing;
