import { Badge } from '@/components/ui/badge';

export default function TrendingTags() {
  return (
    <div id='trending-tags' className='flex flex-col mt-5'>
      <span className='text-4xl font-bold mb-2'>Trending</span>

      <Badge
        variant={'outline'}
        className='text-lg text-[#434A42] bg-[#E8E9EB] cursor-pointer'
      >
        Badge
      </Badge>
    </div>
  );
}
