import React, { createContext, Component, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// * Helpers
const initialState = {
  isModalVisibleById: {
    // TODO: Add isShownByDefault prop support
  },
};

const ModalContext = createContext(initialState);

let modalHook = { isInitialized: false };

function initModalByIdToggler(modalId, cb) {
  return () => {
    modalHook.toggleModal({
      isModalVisibleById: {
        ...modalHook.modal.isModalVisibleById,
        [modalId]: !modalHook.modal.isModalVisibleById[modalId],
      },
    });

    if (cb) cb();
  };
}

// * Provider
const ModalProvider = ({ children }) => {
  const [modal, toggleModal] = useState(initialState);

  modalHook = { modal, toggleModal };

  const modalContextProvideValue = {
    ...modal,

    actions: {
      initModalByIdToggler,
    },
  };

  return (
    <ModalContext.Provider value={modalContextProvideValue}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// * Modal Basic
const MODAL_CONFIG = {
  classNamePrefix: 'ms-modal-',
};

export class ModalBasic extends Component {
  static config = { ...MODAL_CONFIG };

  constructor(props) {
    super(props);

    this.modalRoot = window && window.document.getElementById('ms-modal-root');
    // this.modalElement = document.createElement('div');
  }

  // componentDidMount() {
  //   modalRoot.appendChild(this.modalElement);
  // }

  // componentWillUnmount() {
  //   modalRoot.removeChild(this.modalElement);
  // }

  render() {
    const { id, children, className } = this.props;
    const basicClassName = MODAL_CONFIG.classNamePrefix + id;

    return (
      <ModalContext.Consumer>
        {
          ({
            isModalVisibleById,
            // actions,
          }) => {
            return (
              (isModalVisibleById[id] && this.modalRoot) ? (
                createPortal(
                  (
                    <div
                      id={id}
                      className={`ms-modal ${basicClassName}${className ? ` ${className}` : ''}`}
                    >
                      {children}
                    </div>
                  ),
                  this.modalRoot, // this.modalElement,
                )
              ) : null
            );
          }
        }
      </ModalContext.Consumer>
    );
  }
}

ModalBasic.defaultProps = {
  className: '',
};

ModalBasic.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// * Shared
ModalBasic.Consumer = ModalContext.Consumer;

ModalBasic.Actions = {
  initModalByIdToggler,
};

export default ModalProvider;
