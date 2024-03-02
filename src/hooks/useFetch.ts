import { useEffect, useState } from 'react';
import { get } from '../services/transport';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => {
        setError(e);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};
