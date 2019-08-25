import { createElement } from 'react';
import PropTypes from 'prop-types';

// import withTypography from '../Typography';

const TextSection = ({ children, className, ...props }) => (
  createElement('span', { className: `ms-text-section${className && ` ${className}`}`, ...props }, children)
);

TextSection.defaultProps = {
  className: '',
};

TextSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default TextSection;
// export default withTypography(TextSection);
