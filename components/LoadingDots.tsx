import { useEffect, useState } from 'react';

const LoadingDots = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className=" font-medium text-lg">Thinking{dots}</span>
  );
};

export default LoadingDots;
