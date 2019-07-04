import { createOverlayBasicComponent, initOverlayByIdToggler } from '../hocs';

export const ModalBasic = createOverlayBasicComponent({
  BASIC_CLASS_NAME: 'ms-modal',
});

ModalBasic.Actions = {
  initModalByIdToggler: initOverlayByIdToggler,
};

export default ModalBasic;
