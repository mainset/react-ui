import { createElement } from 'react';
import PropTypes from 'prop-types';

function createSVGMaker(SVGS) {
  const SVGMaker = ({ className, name, ...props }) => (
    createElement(
      'span',
      {
        className: `ms-svg-maker${className && ` ${className}`}`,
        dangerouslySetInnerHTML: {
          __html: SVGS[name](props),
        },
      },
    )
  );

  const availableSVGNames = Object.keys(SVGS);

  SVGMaker.defaultProps = {
    className: '',
  };

  SVGMaker.propTypes = {
    className: PropTypes.string,
    name: PropTypes.oneOf(availableSVGNames).isRequired,
  };

  return SVGMaker;
}

export default createSVGMaker;
