import React, {
  useState,
  useCallback,
  Children,
  createElement,
} from 'react';

const withTabsManager = (WrappedComponent, TabsWrapper, ContentWrapper) => ({
  children: tabs, // eslint-disable-line react/prop-types
  ...props
}) => {
  const initialTabId = (Children.count(tabs) > 1)
    ? tabs[0].props.tabId
    : tabs.props.tabId;

  const [activeTabId, setActiveTab] = useState(initialTabId);

  const initActiveTabSetter = useCallback((nextActiveTabId) => () => {
    setActiveTab(nextActiveTabId);
  }, []);

  const tabsWithControl = Children.map((tabs), (child) => {
    const childProps = { ...child.props };
    const { tabId, ...rest } = childProps;
    const isActive = activeTabId === childProps.tabId;

    delete rest.children;

    return createElement(
      child.type,
      {
        onClick: initActiveTabSetter(tabId),
        isActive,
        ...rest,
      },
    );
  });

  const activeTabChildren = Children
    .toArray(tabs)
    .find((tab) => tab.props.tabId === activeTabId)
    .props.children;

  return (
    <WrappedComponent {...props}>
      {TabsWrapper ? <TabsWrapper>{tabsWithControl}</TabsWrapper> : tabsWithControl}
      {ContentWrapper ? <ContentWrapper>{activeTabChildren}</ContentWrapper> : activeTabChildren}
    </WrappedComponent>
  );
};

export default withTabsManager;
