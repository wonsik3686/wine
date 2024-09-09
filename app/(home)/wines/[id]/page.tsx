'use client';

import WineDetailCard from '@/components/wines/WineDetailCard';
import WineReviewsRating from '@/components/wines/WineReviewsRating';
import useWineDetail from '@/queries/wines.queries';

export default function WineDetail({ params }: { params: { id: number } }) {
  const { wineDetail } = useWineDetail({ id: params.id });

  return (
    <>
      <section className="hidden">{params.id}</section>
      {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
      <section className="flex tab:flex-col-reverse">
        {/* <div>리뷰목록</div>
        <div>별점</div> */}
        <div>리뷰목록</div>
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
