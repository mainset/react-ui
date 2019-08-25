import { createElement } from 'react';
import PropTypes from 'prop-types';

// import withTypography from '../Typography';

const Paragraph = ({ children, className, ...props }) => (
  createElement('p', { className: `ms-paragraph${className && ` ${className}`}`, ...props }, children)
);

Paragraph.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default Paragraph;
// export default withTypography(Paragraph);
