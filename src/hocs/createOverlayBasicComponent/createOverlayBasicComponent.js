import React, { createContext, Component, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

// * Helpers
const initialState = {
  isOverlayVisibleById: {
    // TODO: Add isShownByDefault prop support
  },
};

const OverlayContext = createContext(initialState);

let overlayHook = { isInitialized: false };

export function initOverlayByIdToggler(overlayId, cb) {
  return () => {
    overlayHook.toggleOverlay({
      isOverlayVisibleById: {
        ...overlayHook.overlay.isOverlayVisibleById,
        [overlayId]: !overlayHook.overlay.isOverlayVisibleById[overlayId],
      },
    });

    if (cb) cb();
  };
}

// * Provider
export const OverlayProvider = ({ children }) => {
  const [overlay, toggleOverlay] = useState(initialState);

  overlayHook = { overlay, toggleOverlay };

  const overlayContextProvideValue = {
    ...overlay,

    actions: {
      initOverlayByIdToggler,
    },
  };

  return (
    <OverlayContext.Provider value={overlayContextProvideValue}>
      {children}
    </OverlayContext.Provider>
  );
};

OverlayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function createOverlayBasicComponent({ BASIC_CLASS_NAME, cnBuilderProps }) {
  const classNamePrefix = `${BASIC_CLASS_NAME}-`;

  class OverlayBasicComponent extends Component {
    static config = {
      classNamePrefix,
    };

    constructor(props) {
      super(props);

      this.overlayRoot = window && window.document.getElementById(`${BASIC_CLASS_NAME}-root`);
      // this.overlayElement = document.createElement('div');

      // populate component dynamic class name obj
      this.dynamicClassName = {};

      if(cnBuilderProps) cnBuilderProps.forEach(
        ({ propKey, modifier, options, defaultValue }) => {
          const isPropBool = typeof options === 'boolean';

          const modifierPrefix = modifier || propKey;
          const modifierValue = isPropBool ? '' : `-${props[propKey] || defaultValue}`;

          const className = `${BASIC_CLASS_NAME}--${modifierPrefix}${modifierValue}`;
          this.dynamicClassName[className] = props[propKey] || defaultValue;
        }
      );
    }

    // componentDidMount() {
    //   this.overlayRoot.appendChild(this.overlayElement);
    // }

    // componentWillUnmount() {
    //   this.overlayRoot.removeChild(this.overlayElement);
    // }

    render() {
      const { id, children, className } = this.props;
      const componentClassName = classNamePrefix + id;

      return (
        <OverlayContext.Consumer>
          {
            ({
              isOverlayVisibleById,
              // actions,
            }) => {
              return (
                (isOverlayVisibleById[id] && this.overlayRoot) ? (
                  createPortal(
                    (
                      <div
                        id={id}
                        className={cn(
                          BASIC_CLASS_NAME,
                          this.dynamicClassName,
                          componentClassName,
                          className,
                        )}
                      >
                        {children}
                      </div>
                    ),
                    this.overlayRoot, // this.overlayElement,
                  )
                ) : null
              );
            }
          }
        </OverlayContext.Consumer>
      );
    }
  }

  OverlayBasicComponent.defaultProps = {
    className: '',
  };

  OverlayBasicComponent.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  // * Shared
  OverlayBasicComponent.Consumer = OverlayContext.Consumer;

  return OverlayBasicComponent;
}
