import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// Container
const PopoverContainer = ({
  children,
  className,

  setVisibleOnHover,

  ...props
}) => createElement(
  'div',
  {
    className: cn(
      className,
      'ms-popover__container',
      {
        'ms-popover__container--visible-on-hover': setVisibleOnHover,
      },
    ),
    ...props,
  },
  children,
);

PopoverContainer.defaultProps = {
  setVisibleOnHover: false,
};

PopoverContainer.propTypes = {
  setVisibleOnHover: PropTypes.bool,
};

// Placeholder
const PopoverPlaceholder = ({
  children,
  className,

  hAlign,
  vAlign,
  isVisible,
  position,
  setWidthInherit,

  ...props
}) => createElement(
  'div',
  {
    className: cn(
      className,
      'ms-popover__placeholder',
      `ms-popover__placeholder--position-${position}`,
      {
        'ms-popover__placeholder--visible': isVisible,
        [`ms-popover__placeholder--horizontally-${hAlign}`]: hAlign,
        [`ms-popover__placeholder--vertically-${vAlign}`]: vAlign,
        'ms-popover__placeholder--width-inherit': setWidthInherit,
      },
    ),
    ...props,
  },
  children,
);

PopoverPlaceholder.defaultProps = {
  isVisible: false,
  position: 'absolute',
};

PopoverPlaceholder.propTypes = {
  isVisible: PropTypes.bool,
  position: PropTypes.oneOf(['absolute', 'static']),
  hAlign: PropTypes.oneOf([
    'left', 'center', 'right',
  ]),
  vAlign: PropTypes.oneOf([
    'top', 'middle', 'bottom',
  ]),
};

export default {
  Container: PopoverContainer,
  Placeholder: PopoverPlaceholder,
};
