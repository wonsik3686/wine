import Star from '@/public/svg/star.svg';

export function RatingBox({ rating }: { rating: number }) {
  const isRating = rating.toFixed(1);

  return (
    <div className="bg-purple-10 rounded-xl flex items-center justify-center w-[3.75rem] h-9 md:w-20 md:h-[2.625rem]">
      <Star />
      <span className="font-bold text-md md:text-2lg text-purple-100">
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
  className = 'px-2.5 md:px-[0.9375rem] h-9 md:h-[2.625rem]',
}: {
  price: number;
  className: string;
}) {
  const krw = '￦ ' + price.toLocaleString('ko-KR');

  return (
    <div
      className={`bg-purple-10 rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="font-bold text-md md:text-2lg text-purple-100">
        {krw}
      </span>
    </div>
  );
}
