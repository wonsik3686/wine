import Star from '@/public/icons/star.svg';

export function RatingBox({ rating }: { rating: number }) {
  const isRating = rating.toFixed(1);

  return (
    <div className="flex h-[2.625rem] w-20 items-center justify-center gap-[0.125rem] rounded-xl bg-purple-10 mob:h-9 mob:w-[3.75rem]">
      <Star className="h-4 w-4 md:h-5 md:w-5" />
      <span className="text-md font-bold text-purple-100 md:text-2lg">
        {isRating}
      </span>
    </div>
  );
}

/**
 * `className`으로 박스 크기를 바꿀 수 있습니다.
 */

export function PriceBox({
  price,
  className = 'px-[0.9375rem] h-[2.625rem] mob:h-9 mob:px-2.5 text-nowrap',
}: {
  price: number;
  className?: string;
}) {
  const krw = `￦ ${price.toLocaleString('ko-KR')}`;

  return (
    <div
      className={`flex w-fit items-center justify-center rounded-xl bg-purple-10 ${className}`}
    >
      <span className="text-2lg font-bold text-purple-100 mob:text-md">
        {krw}
      </span>
    </div>
  );
}
