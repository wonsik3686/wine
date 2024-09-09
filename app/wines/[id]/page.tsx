'use client';

import WineDetailCard from '@/components/wines/WineDetailCard';
import WineRevieList from '@/components/wines/WineReviewList';
import WineReviewsRating from '@/components/wines/WineReviewsRating';
import useWineDetail from '@/queries/wines.queries';

export default function WineDetail({ params }: { params: { id: number } }) {
  const { wineDetail } = useWineDetail({ id: params.id });

  return (
    <>
      <section className="hidden">{params.id}</section>
      {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
      <section className="flex pc:flex-row pc:gap-[3.75rem] tab:flex-col-reverse tab:gap-[2.25rem] mob:gap-[1.25rem]">
        {wineDetail && <WineRevieList reviews={wineDetail.reviews} />}
        {wineDetail && (
          <WineReviewsRating
            avgRating={wineDetail.avgRating}
            avgRatings={wineDetail.avgRatings}
            reviewCount={wineDetail.reviewCount}
          />
        )}
      </section>
    </>
  );
}
