import { createElement } from 'react';
import PropTypes from 'prop-types';

const Hr = ({
  className,

  direction,
  isHidden,

  ...props
}) => createElement(
  'hr',
  {
    className: `${className ? `${className} ` : ''}ms-break ms-break--direction-${direction}${isHidden ? ' ms-break--hidden' : ''}`,
    ...props,
  },
);

Hr.defaultProps = {
  direction: 'horizontal',
  isHidden: false,
};

Hr.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  isHidden: PropTypes.bool,
};

export default Hr;
