interface BookCardProps {
  // Define any props if needed in the future
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  cover: string;
}

export default function BookCard({ title, cover }: BookCardProps) {
  return (
    <>
      <div className='cover'>
        <img
          className='h-[230px] w-[153px] rounded-b-sm'
          src={cover}
          alt={title}
        />
      </div>
      <div className='text-sm mt-1'>{title}</div>
    </>
  );
}
