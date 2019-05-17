import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const asLayout = (WrappedComponent) => {
  const WrappedComponentAsLayout = ({
    className,
    contentAlignHorizontally,
    contentAlignVertically,
    contentSpace,
    contentDirection,
    hideOn,
    showOn,
    ...rest,
  }) => {
    // NOTE: content has column direction when it's spaced vertically
    const isContentDirectionAsColumn = contentSpace && contentSpace.includes('vertically');
    const isContentShouldDisplayAsFlex = contentAlignHorizontally || contentAlignVertically || contentSpace;
    return (
      <WrappedComponent
        className={cn(className, {
          'ms-layout--flex': isContentShouldDisplayAsFlex,
          [`ms-layout--direction-${isContentDirectionAsColumn ? 'column' : contentDirection}`]: isContentShouldDisplayAsFlex,
          [`ms-layout--horizontally-${contentAlignHorizontally}`]: contentAlignHorizontally,
          [`ms-layout--vertically-${contentAlignVertically}`]: contentAlignVertically,
          [`ms-layout--space-${contentSpace}`]: contentSpace,
          [`ms-layout--hidden-${hideOn}`]: hideOn,
          [`ms-layout--shown-${showOn}`]: showOn,
        })}
        {...rest}
      />
    )
  };

  WrappedComponentAsLayout.defaultProps = {
    className: '',
    contentDirection: 'row',
  };

  WrappedComponentAsLayout.propTypes = {
    contentAlignHorizontally: PropTypes.oneOf(['start', 'center', 'end']),
    contentAlignVertically: PropTypes.oneOf(['start', 'center', 'end']),
    contentSpace: PropTypes.oneOf([
      'between-horizontally', 'between-vertically', 'around-horizontally', 'around-vertically', 'vertically'
    ]),
    contentDirection: PropTypes.oneOf(['row', 'column']),
    hideOn: PropTypes.oneOf(['mobile', 'desktop']),
    showOn: PropTypes.oneOf(['mobile', 'desktop']),
  };

  return WrappedComponentAsLayout;
};

export default asLayout;
