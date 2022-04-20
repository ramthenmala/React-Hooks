import { useEffect, useState } from 'react';

const useFetch = ({ url = '', options = null || {} }) => {
  const [data, dataSet] = useState<[] | null>(null);
  const [error, errorSet] = useState<string | null>(null);
  const [loading, loadingSet] = useState<boolean | null>(false);

  useEffect(() => {
    let isMounted: boolean = true;
    loadingSet(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          dataSet(data);
          errorSet(null);
        }
      })
      .catch((e) => {
        if (isMounted) {
          errorSet(e);
          dataSet(null);
        }
      })
      .finally(() => {
        isMounted && loadingSet(false);
      });
    return () => {};
  }, [url, options]);

  return { loading, data, error };
};

export default useFetch;
