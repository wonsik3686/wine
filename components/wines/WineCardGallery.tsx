import WineCard from '@/components/wines/WineCard';
import { WineListType } from '@/types/wine.types';

type WineCardGalleryProps = {
  wineList: WineListType[];
};

export default function WineCardGallery({ wineList }: WineCardGalleryProps) {
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
