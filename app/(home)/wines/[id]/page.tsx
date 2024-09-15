import { Suspense } from 'react';
import WineDetail from './components/WineDetail';

type WineDetailPageParams = {
  params: { id: number };
};

export default function WineDetailPage({ params }: WineDetailPageParams) {
  return (
    <Suspense>
      <WineDetail wineId={params.id} />
    </Suspense>
  );
}
