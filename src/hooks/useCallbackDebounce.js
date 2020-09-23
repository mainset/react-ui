import { useCallback, useRef, useEffect } from 'react';

import { msDebounce } from '../utils';

const useCallbackDebounce = (dFunc, dependencies, ...dArgs) => {
  const debounceRef = useRef([]);

  useEffect(() => {
    debounceRef.current = dependencies;
  }, dependencies);

  const debounceFunc = msDebounce(dFunc, ...dArgs);

  const callbackDebounce = useCallback((...args) => {
    debounceFunc(debounceRef, ...args);
  }, []);

  return callbackDebounce;
};

export default useCallbackDebounce;
