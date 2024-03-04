import { useRef, useState } from 'react';

export const UseRefPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const animatedRef = useRef<HTMLDivElement | null>(null);

  const startAnimation = () => {
    const element = animatedRef.current;

    if (element) {
      element.style.transform = 'translateX(100px)';
    }
  };

  const moveBack = () => {
    const element = animatedRef.current;

    if (element) {
      element.style.transform = 'translateX(0)';
    }
  };

  const onSearchClick = () => {
    if (inputRef.current) setSearchQuery(inputRef.current.value);
    // setSearchQuery(inputRef.current?.value || '')
  };

  const onTryAgainClick = () => {
    const element = inputRef.current;
    if (element) {
      element.value = '';
      element.focus();
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <div
        ref={animatedRef}
        style={{ width: '100px', height: '100px', background: 'red', transition: 'transform 1s ease-in-out' }}
      >
        Заголовок
      </div>

      <button onClick={startAnimation}>Переместить</button>
      <button onClick={moveBack}>Вернуть на место</button>

      <div style={{ display: 'flex', marginBottom: '24px' }}>
        <input ref={inputRef} type="text" />

        <button onClick={onSearchClick}>Искать</button>
      </div>

      {searchQuery && (
        <>
          <p>Нижего не найдено по запросу {searchQuery}</p>
          <button onClick={onTryAgainClick}>Попробуйте другой запрос</button>
        </>
      )}
    </div>
  );
};
