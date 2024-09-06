import WineDetailCard from '@/components/wines/WineDetailCard';

export default function WineDetail({ params }: { params: { id: number } }) {
  return (
    <>
      <section className="hidden">{params.id}</section>
      <WineDetailCard />
    </>
  );
}
