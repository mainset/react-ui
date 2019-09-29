import { useState, useCallback } from 'react';
import _set from 'lodash/set';

function useFormHandler(initialState) {
  const [formHandlerValues, setFormHandlerState] = useState(initialState);

  const handleInputChange = useCallback((e) => {
    const newFormHandlerValues = { ...formHandlerValues };
    const { currentTarget: { name, value } } = e;

    _set(newFormHandlerValues, name, value);
    setFormHandlerState(newFormHandlerValues);
  }, []);

  return [formHandlerValues, { handleInputChange }];
}

export default useFormHandler;
