export default function WineDetail({ params }: { params: { id: number } }) {
  return (
    <main>
      <section>{params.id}</section>
    </main>
  );
}
