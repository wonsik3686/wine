function Progressbar({ min, max }: { min: number; max: number }) {
  const percent = ((min / max) * 100).toFixed(2);

  return (
    <div className='rounded-full bg-gray-100 w-full h-1.5'>
      <div
        className='rounded-full bg-purple-100 h-1.5'
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function RatingProgressbar({
  Ratings,
  totalCount,
}: {
  Ratings: { key: number; value: number }[];
  totalCount: number;
}) {
  return (
    <section className='flex flex-col gap-y-2 w-full md:w-[280px]'>
      {Ratings.map((Rating) => (
        <div key={Rating.key + '점'} className='flex items-center gap-x-4'>
          <span className='w-6 shrink-0 text-lg font-medium text-right'>
            {Rating.key + '점'}
          </span>

          <Progressbar min={Rating.value} max={totalCount} />
        </div>
      ))}
    </section>
  );
}

export default RatingProgressbar;
