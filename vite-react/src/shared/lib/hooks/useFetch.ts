import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await res.json();
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return [data, isLoading, isError];
};
