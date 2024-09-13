import { Suspense } from 'react';
import WineDetailSkeleton from './components/skeletons/WineDetailSkeleton';
import WineDetail from './components/WineDetail';

type WineDetailPageParams = {
  params: { id: number };
};

export default function WineDetailPage({ params }: WineDetailPageParams) {
  return (
    <Suspense fallback={<WineDetailSkeleton />}>
      <WineDetail wineId={params.id} />
    </Suspense>
  );
}
