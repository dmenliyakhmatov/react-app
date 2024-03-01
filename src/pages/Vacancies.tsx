import { useState } from 'react';

export const VacanciesPage = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', marginBottom: '24px' }}>
        <input type="text" />

        <button>Искать</button>
      </div>

      {value && (
        <>
          <p>Нижего не найдено по запросу {value}</p>
          <button>Попробуйте другой запрос</button>
        </>
      )}
    </div>
  );
};
