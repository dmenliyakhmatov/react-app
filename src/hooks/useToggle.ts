import { useCallback, useState } from 'react';

export const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState(initValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  return [value, toggle, setTrue, setFalse] as const;
};
