import BookCard from '@/components/common/BookCard';
import { useBookList } from '@/hooks/useBookList';

export default function BookList() {
  const { data: books } = useBookList();

  return (
    <div className='mt-4 w-3/4'>
      <div className='text-2xl font-bold mb-4'>Recommend </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {books.map((book) => (
          <div key={book.id}>
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              genre={book.genre}
              description={book.description}
              cover={book.cover}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
