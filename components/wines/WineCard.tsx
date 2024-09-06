import ArrowRight from '@/assets/icons/iconArrowRight.svg';
import { PriceBox } from '@/components/common/Boxes';
import StarRating from '@/components/common/StarRating';

export default function WineCard() {
  // TODO: API 연동
  const wineRating: number = 4.5;
  const wineName: string = 'Sentinel Carbernet Sauvignon 2016';
  const wineImageUrl: string =
    'https://www.winenara.com/uploads/product/550/ff4dd11a946671d88fd904590b1488fc.png';
  const winePrice: number = 64990;

  return (
    // TODO: 태블릿 및 모바일 반응형 적용
    <div
      className="flex h-auto min-h-[375px] w-[800px] flex-col
    rounded-2xl border border-gray-300 bg-white
    pl-[60px] pr-[40px] pt-[40px] shadow"
    >
      {/* 상단부 */}
      <div className="relative flex h-[210px] w-full gap-[80px] overflow-hidden">
        <div
          className="h-[230px] w-[100px] bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${wineImageUrl})`,
          }}
        />
        <div className="flex w-full justify-between mob:flex-col mob:justify-normal">
          <div className="inline-flex h-[130px] flex-col items-start justify-start gap-[18px]">
            <div className="w-[300px] text-[32px] font-semibold leading-[42px]">
              {wineName}
            </div>
            <div className="text-base font-normal leading-relaxed text-gray-500">
              Western Cape, South Africa
            </div>
            <div className="flex justify-between ">
              <PriceBox
                className="h-[42px] items-center justify-start gap-2.5 rounded-xl bg-[#f1edfc] px-[15px] py-2"
                price={winePrice}
              />
            </div>
          </div>
          <div className="relative inline-flex w-[100px] flex-col items-start justify-start gap-[20px] mob:w-[80px]">
            <div className="text-5xl font-extrabold mob:text-[28px]">
              {wineRating}
            </div>
            <div className="h-[18px] w-[100px] mob:w-[80px]">
              <StarRating rating={wineRating} />
            </div>
            <div className="w-[100px] text-xs font-normal leading-[18px] text-gray-500 mob:w-[80px] mob:text-[10px] mob:leading-[14px]">
              47개의 후기
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-[26px] right-[10px] flex h-[36px] w-[36px] items-center justify-center"
          type="button"
          aria-label="해당 와인 페이지로"
        >
          <ArrowRight className="h-full w-full" />
        </button>
      </div>
      <hr className="-ml-[60px] -mr-[40px] mb-[20px] border-t-[1px] border-gray-300" />

      {/* 하단부 */}
      <div className="inline-flex h-auto w-full flex-col items-start justify-start gap-[10px] pb-[20px]">
        <div className="select-none text-base font-bold leading-relaxed">
          최신 후기
        </div>
        <div className="w-[680px] text-base font-normal leading-relaxed text-gray-500">
          Cherry, cocoa, vanilla and clove - beautiful red fruit driven Amarone.
          Low acidity and medium tannins. Nice long velvety finish.
          가나다라마바사 아자차카타파하! Cherry, cocoa, vanilla and clove -
          beautiful red fruit driven Amarone. Low acidity and medium tannins.
          Nice long velvety finish. 가나다라마바사 아자차카타파하! Cherry,
          cocoa, vanilla and clove - beautiful red fruit driven Amarone. Low
          acidity and medium tannins. Nice long velvety finish. 가나다라마바사
          아자차카타파하! Cherry, cocoa, vanilla and clove - beautiful red fruit
          driven Amarone. Low acidity and medium tannins. Nice long velvety
          finish. 가나다라마바사 아자차카타파하!
        </div>
      </div>
    </div>
  );
}
