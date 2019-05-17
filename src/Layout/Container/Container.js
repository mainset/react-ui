import { createElement } from 'react';
import PropTypes from 'prop-types';

import { asLayout } from '../../hocs/Layout';

export const Container = ({ children, className, gapSize, width }) => (
  createElement(
    'div',
    {
      className: `ms-container ms-container--width-${width} ms-container--gap-${gapSize} ${className && ` ${className}`}`,
    },
    children
  )
);

Container.defaultProps = {
  className: '',
  gapSize: '',
  width: 'wide',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gapSize: PropTypes.oneOf(['', 'wide']),
  width: PropTypes.oneOf(['full', 'wide', 'narrow']),
};

export default asLayout(Container);
