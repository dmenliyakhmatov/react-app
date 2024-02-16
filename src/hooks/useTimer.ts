import { useEffect, useState } from 'react';

export const useTimer = (initialValue = 0) => {
  const [seconds, setSeconds] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return seconds;
};
