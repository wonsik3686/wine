import Star from '@/public/icons/star.svg';

export function RatingBox({ rating }: { rating: number }) {
  const isRating = rating.toFixed(1);

  return (
    <div className="flex h-9 w-[3.75rem] items-center justify-center rounded-xl bg-purple-10 md:h-[2.625rem] md:w-20">
      <Star />
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
  className = 'px-2.5 md:px-[0.9375rem] h-9 md:h-[2.625rem] text-nowrap',
}: {
  price: number;
  className?: string;
}) {
  const krw = `￦ ${price.toLocaleString('ko-KR')}`;

  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-purple-10 ${className}`}
    >
      <span className="text-md font-bold text-purple-100 md:text-2lg">
        {krw}
      </span>
    </div>
  );
}
