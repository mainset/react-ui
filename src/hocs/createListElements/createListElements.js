import { createElement } from 'react';
import PropTypes from 'prop-types';

const Spacer = () => createElement(
  'div',
  { className: 'ms-list__spacer' },
);

const createListElements = ({ baseClassName }) => {
  const List = ({
    children,
    className,

    direction,
    type,

    ...props
  }) => (
    createElement(
      'ul',
      {
        className: `${className} ${baseClassName} ms-list ms-list--direction-${direction} ms-list--type-${type}`,
        ...props,
      },
      children,
    )
  );

  List.defaultProps = {
    className: '',
    direction: 'horizontal',
    type: 'unstyled',
  };

  List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,

    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    type: PropTypes.oneOf(['unstyled', 'oredered'/* 'unordered', */]),
  };

  return { List, Spacer };
};

export default createListElements;
