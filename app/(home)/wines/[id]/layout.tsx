import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type WineDetailPageParams = {
  params: { id: number };
};

type authParams = {
  email: string;
  password: string;
};

export async function generateMetadata(
  { params }: WineDetailPageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const au: authParams = { email: 'main@email.com', password: '11111111' };
  const authRes = await fetch(
    'https://winereview-api.vercel.app/8-4/auth/signIn',
    {
      body: JSON.stringify(au),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 0 },
    }
  );
  const authData = await authRes.json();
  if (!authRes.ok) {
    throw new Error(authData.message);
  }
  const token = authData.accessToken;

  const wineDetailRes = await fetch(
    `https://winereview-api.vercel.app/8-4/wines/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!wineDetailRes.ok) {
    notFound();
  }
  const wineDetail = await wineDetailRes.json();

  return {
    title: {
      default: `${wineDetail.name}`,
      template: `%s | ${wineDetail.name} | ${(await parent).title}`,
    },
    description: `${wineDetail.name}에 대한 상세 정보를 확인하고, 다양한 리뷰를 읽고 직접 리뷰를 남길 수 있습니다. 와인의 특징, 맛, 향에 대한 깊이 있는 정보와 사용자 평가를 바탕으로 완벽한 와인을 찾아보세요.`,
    keywords: [
      `${wineDetail.name}`,
      `${wineDetail.type}`,
      `${wineDetail.region}`,
    ],
    openGraph: {
      title: `${wineDetail.name}`,
      description: `${wineDetail.name}에 대한 상세 정보를 확인하고, 다양한 리뷰를 읽고 직접 리뷰를 남길 수 있는 페이지입니다. 와인의 맛과 향에 대한 전문가 및 사용자 리뷰를 확인하세요.`,
      url: `https://wine-cdi.vercel.app/wines/${params.id}`,
      siteName: 'Wine',
      images: [
        {
          url: `${wineDetail.image}`,
          width: 800,
          height: 600,
        },
        {
          url: `${wineDetail.image}`,
          width: 1800,
          height: 1600,
          alt: `${wineDetail.name}`,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

export default function WineDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[71.25rem] flex-col tab:mt-5 tab:px-5 mob:mt-3 mob:px-4 pc:mt-5">
        {children}
      </div>
    </main>
  );
}
