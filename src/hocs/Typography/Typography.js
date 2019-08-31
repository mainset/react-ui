import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import BaseHeading from '../../Typography/Heading';
import BaseParagraph from '../../Typography/Paragraph';
import BaseTextSection from '../../Typography/TextSection';

function excludeClassParamsFromProps(params, props) {
  const propForClasses = Object.values(params);
  const restPropKeys = Object.keys(props).filter((propKey) => !propForClasses.includes(propKey));
  const result = { classObj: {}, rest: {} };

  // populate result rest
  restPropKeys.forEach(
    (restPropKey) => { result.rest[restPropKey] = props[restPropKey]; },
  );

  // populate classObj
  Object.keys(params).forEach((keyAsClassName) => {
    const propKeyName = params[keyAsClassName];
    const isPropPassed = Boolean(props[propKeyName]);
    if (isPropPassed) {
      const classNameFromKey = keyAsClassName.replace(`%${propKeyName}`, props[propKeyName]);
      result.classObj[classNameFromKey] = true;
    }
  });

  return result;
}

export const withTypography = (WrappedComponent, params) => {
  const WrappedComponentWithTypography = ({
    children,
    className,

    truncate,
    align,
    size,
    transform,
    weight,

    ...props
  }) => {
    const { classObj, rest } = excludeClassParamsFromProps(params, props);
    return createElement(
      WrappedComponent,
      {
        className: cn(
          'ms-typography',
          {
            'ms-typography--truncate': truncate,
            [`ms-typography--align-${align}`]: align,
            [`ms-typography--size-${size}`]: size,
            [`ms-typography--transform-${transform}`]: transform,
            [`ms-typography--weight-${weight}`]: weight,
            ...classObj,
            // [`ms-typography--typeface-${typeface}`]: typeface,
          },
          className,
        ),
        ...rest,
      },
      children,
    );
  };

  WrappedComponentWithTypography.defaultProps = {
    weight: 'normal',

    className: '',
    align: '',
    size: '',
    transform: '',
    truncate: false,
  };

  WrappedComponentWithTypography.propTypes = {
    // required
    children: PropTypes.node.isRequired,
    weight: PropTypes.oneOf(['lightest', 'lighter', 'normal', 'bold', 'bolder', 'boldest']),

    // optional
    className: PropTypes.string,
    align: PropTypes.oneOf(['', 'center', 'justify', 'right']),
    size: PropTypes.oneOf(['', 'xx-small', 'x-small', 'smaller', 'sm', 'md', 'lg', 'larger', 'x-large', 'xx-large']),
    transform: PropTypes.oneOf(['', 'capitalize', 'uppercase']),
    truncate: PropTypes.bool,
  };

  return WrappedComponentWithTypography;
};

export function createTypographyElements(typographyParams) {
  const Heading = withTypography(BaseHeading, typographyParams);
  const Paragraph = withTypography(BaseParagraph, typographyParams);
  const TextSection = withTypography(BaseTextSection, typographyParams);
  return { Heading, Paragraph, TextSection };
}

export default createTypographyElements;
