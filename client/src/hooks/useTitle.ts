import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    const original = document.title;
    document.title = `${title} | GPP Printing Press`;
    return () => {
      document.title = original;
    };
  }, [title]);
}
