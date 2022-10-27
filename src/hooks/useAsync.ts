import { useEffect, useState } from 'react';

export default function useAsync(asyncFn) {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    const promise = asyncFn();

    if (!promise) return;

    setState({ status: 'pending', data: null, error: null });

    promise
      .then((data) =>
        setState({
          status: 'success',
          data: data,
          error: null,
        })
      )
      .catch((error) =>
        setState({
          status: 'error',
          data: null,
          error: error,
        })
      );
  }, [asyncFn]);

  return { ...state };
}
