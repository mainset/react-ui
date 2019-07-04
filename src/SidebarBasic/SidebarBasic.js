import { createOverlayBasicComponent, initOverlayByIdToggler } from '../hocs';

const SidebarBasic = createOverlayBasicComponent({
  BASIC_CLASS_NAME: 'ms-sidebar',
});

SidebarBasic.Actions = {
  initSidebarByIdToggler: initOverlayByIdToggler,
};

export default SidebarBasic;
