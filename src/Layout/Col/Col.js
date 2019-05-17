import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { asLayout } from '../../hocs/Layout';

export const Col = ({
  children,
  className,

  size,
  xs,
  sm,
  md,
  lg,
  xl,

  offset,
  noSpacing
}) => (
  createElement(
    'div',
    {
      className: cn(
        'ms-col',
        {
          [`ms-col--offset-${offset}`]: offset,
          [`ms-col--size-${size}`]: size && !(xs || sm || md || lg || xl),
          [`ms-col--xs-${xs}`]: xs,
          [`ms-col--sm-${sm}`]: sm,
          [`ms-col--md-${md}`]: md,
          [`ms-col--lg-${lg}`]: lg,
          [`ms-col--xl-${xl}`]: xl,
          'ms-col--no-spacing': noSpacing
        },
        className,
      )
    },
    children
  )
);

const colSizes = ['full', 'unset', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Col.defaultProps = {
  children: null,
  className: '',
  size: 'full',
  noSpacing: false,
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  size: PropTypes.oneOf(colSizes),
  xs: PropTypes.oneOf(colSizes),
  sm: PropTypes.oneOf(colSizes),
  md: PropTypes.oneOf(colSizes),
  lg: PropTypes.oneOf(colSizes),
  xl: PropTypes.oneOf(colSizes),

  offset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),

  noSpacing: PropTypes.bool
};

export default asLayout(Col);
