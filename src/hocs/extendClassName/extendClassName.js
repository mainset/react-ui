import { createElement } from 'react';

const extendClassName = (WrappedComponent, extendedClassName) => ({
  children,
  className,

  ...props
}) => (
  createElement(
    WrappedComponent,
    {
      className: `${className ? `${className} ` : ''}${extendedClassName}`,
      ...props,
    },
    children,
  )
);

export default extendClassName;
