import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { asLayout } from '../../hocs/Layout';

export const Row = ({
  children,
  className,

  noGutters,
  withHorizontalScroll,

  ...props
}) => (
  createElement(
    'div',
    {
      className: cn(
        'ms-row',
        {
          'ms-row--no-gutters': noGutters,
          'ms-row--with-scroll': withHorizontalScroll,
        },
        className,
      ),
      ...props,
    },
    children
  )
);

Row.defaultProps = {
  className: '',
  noGutters: false,
  withHorizontalScroll: false
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
  withHorizontalScroll: PropTypes.bool,
};

export default asLayout(Row);
