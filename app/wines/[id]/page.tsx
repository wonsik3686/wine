'use client';
import WineDetailCard from '@/components/wines/WineDetailCard';
import useWineDetail from '@/queries/wines.queries';

export default function WineDetail({ params }: { params: { id: number } }) {
  const { wineDetail } = useWineDetail({ id: params.id });

  return (
    <>
      <section className="hidden">{params.id}</section>
      {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
    </>
  );
}
