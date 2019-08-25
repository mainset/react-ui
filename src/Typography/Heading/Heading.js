import { createElement } from 'react';
import PropTypes from 'prop-types';

// import withTypography from '../Typography';

const Heading = ({
  children, className, hSize, ...props
}) => (
  createElement(`h${hSize}`, { className: `ms-heading${className && ` ${className}`}`, ...props }, children)
);

Heading.defaultProps = {
  className: '',
  hSize: 1,
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  hSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
// export default withTypography(Heading);
