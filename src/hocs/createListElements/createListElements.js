import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Spacer = () => createElement(
  'div',
  { className: 'ms-list__spacer' },
);

const createListElements = ({ baseClassName }) => {
  const List = ({
    children,
    className,

    direction,
    justify,
    type,

    ...props
  }) => (
    createElement(
      'ul',
      {
        className: cn(
          className,
          baseClassName,
          `ms-list ms-list--direction-${direction}`,
          `ms-list--type-${type}`,
          {
            [`ms-list--justify-${justify}`]: justify,
          },
        ),
        ...props,
      },
      children,
    )
  );

  List.defaultProps = {
    className: '',
    direction: 'horizontal',
    justify: '',
    type: 'unstyled',
  };

  List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,

    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    justify: PropTypes.oneOf(['', 'center', 'end']),
    type: PropTypes.oneOf(['unstyled', 'oredered'/* 'unordered', */]),
  };

  return { List, Spacer };
};

export default createListElements;
