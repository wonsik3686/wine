function Progressbar({ min, max }: { min: number; max: number }) {
  // const percent = ((min / max) * 100).toFixed(2);
  const percent =
    min !== null && max !== null && max !== 0
      ? ((min / max) * 100).toFixed(2)
      : '0.00';

  return (
    <div className="h-1.5 w-full rounded-full bg-gray-100">
      <div
        className="h-1.5 rounded-full bg-purple-100"
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
    <section className="flex w-full flex-col gap-y-2 md:w-[280px]">
      {Ratings.map((Rating) => (
        <div key={`${Rating.key}점`} className="flex items-center gap-x-4">
          <span className="w-7 shrink-0 text-right text-lg font-medium text-gray-500">
            {`${Rating.key}점`}
          </span>

          <Progressbar min={Rating.value} max={totalCount} />
        </div>
      ))}
    </section>
  );
}

export default RatingProgressbar;
