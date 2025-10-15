import { books } from '@/mocks/books';
import { useEffect, useState } from 'react';

export const useBookList = () => {
  const [data, setData] = useState<A[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      // simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(books);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return { data, loading };
};
