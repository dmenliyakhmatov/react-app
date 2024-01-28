import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isVisibleHello, setIsVisibleHello] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // Очистка побочного эффекта
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только после монтирования компонента

  useEffect(() => {
    if (seconds > 5) setIsVisibleHello(false);
  }, [seconds]);

  return (
    <div>
      {isVisibleHello && <h1>{`Hello, I'm timer`}</h1>}
      <p>Seconds: {seconds}</p>
    </div>
  );
};
