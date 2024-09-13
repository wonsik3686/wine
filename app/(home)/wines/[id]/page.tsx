import WineDetail from './components/WineDetail';

type WineDetailPageParams = {
  params: { id: number };
};

// export async function generateMetadata(
//   { params }: WineDetailPageParams,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // const wineDetail = await fetch(
//   //   `https://winereview-api.vercel.app/8-4/wines/${params.id}`
//   // ).then<WineDetailResponse>((res) => res.json());
//   const wineDetail = (await getWineDetail({ id: params.id })).data;
//   const prevMeta = await parent;

//   return {
//     title: `${prevMeta.title?.absolute} | ${wineDetail.name}`,
//   };
// }

export default function WineDetailPage({ params }: WineDetailPageParams) {
  return <WineDetail wineId={params.id} />;
}
