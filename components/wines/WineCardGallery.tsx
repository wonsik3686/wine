import WineCard from '@/components/wines/WineCard';
import { WineListType } from '@/types/wine.types';

type WineCardGalleryProps = {
  wineList: WineListType[];
};

export default function WineCardGallery({ wineList }: WineCardGalleryProps) {
  if (wineList.length === 0) {
    return (
      <div
        className="
          flex h-full w-full flex-col
          items-center justify-center
          px-4 py-[30px]
          tab:py-[15px] mob:py-[0px]
        "
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <div
            className="
              flex h-[200px] w-[200px]
              items-center justify-center
              rounded-full bg-gray-100
              bg-contain bg-center
              bg-no-repeat tab:h-[160px]
              tab:w-[160px] mob:h-[120px] mob:w-[120px]
            "
            style={{ backgroundImage: 'url("/icons/iconNoContent.svg")' }}
          />
          <div
            className="
              text-center text-[24px]
              font-normal leading-relaxed text-gray-500
              tab:text-[20px]
              mob:text-[16px]
            "
          >
            등록된 와인이 없어요
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {wineList.map((wine) => (
        <WineCard
          key={wine.id}
          wineId={wine.id}
          wineName={wine.name}
          wineImageUrl={wine.image}
          wineRating={wine.avgRating}
          winePrice={wine.price}
          wineRegion={wine.region}
          recentReview={wine.recentReview?.content ?? null}
          reviewCount={wine.reviewCount}
        />
      ))}
    </>
  );
}
