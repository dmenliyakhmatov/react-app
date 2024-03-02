import { CreateArticle } from 'features/create-article/ui';
import { useRef, useState } from 'react';

export const CreateArticlePage = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    intervalRef.current = id;
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div style={{ padding: '24px' }}>
      <span>{timer}</span>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <CreateArticle />
    </div>
  );
};
