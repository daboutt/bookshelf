import TrendingTags from '@/features/trending/components/TrendingTags';
import BookList from './BookList';

export default function Home() {
  return (
    <div className='h-full ml-8'>
      {/* Trending tags section */}
      <TrendingTags />
      <BookList />
    </div>
  );
}
