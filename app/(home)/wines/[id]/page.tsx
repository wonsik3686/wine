import WineDetail from './components/WineDetail';

type WineDetailPageParams = {
  params: { id: number };
};

export default function WineDetailPage({ params }: WineDetailPageParams) {
  return <WineDetail wineId={params.id} />;
}
