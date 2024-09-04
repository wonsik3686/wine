import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <main className="flex w-full flex-col items-center justify-center">
        <section className="pc:mx-5 pc:mt-20 tab:mx-5 tab:mt-6 mob:mx-4 mob:mt-6 mob:hidden">
          <Image
            src="/images/landing/landingBanner.png"
            alt="메인 배너"
            width={1140}
            height={535}
          />
        </section>
        <section className="hidden pc:mx-5 pc:mt-20 tab:mx-5 tab:mt-6 mob:mx-4 mob:mt-6 mob:block">
          <Image
            src="/images/landing/landing_sm_01.png"
            alt="메인 배너"
            width={1140}
            height={535}
          />
        </section>
        <section className="pc:mt-40 tab:mt-20 mob:mx-4 mob:mt-10 mob:hidden">
          <Image
            src="/images/landing/landingIntro1.png"
            alt="서비스 소개 이미지"
            width={699}
            height={320}
          />
          <Image
            className="mt-10 mob:mt-5"
            src="/images/landing/landingIntro2.png"
            alt="서비스 소개 이미지"
            width={699}
            height={320}
          />
          <Image
            className="mt-10 mob:mt-5"
            src="/images/landing/landingIntro3.png"
            alt="서비스 소개 이미지"
            width={699}
            height={320}
          />
        </section>
        <section className="hidden pc:mt-40 tab:mt-20 mob:mx-4 mob:mt-10 mob:block">
          <Image
            src="/images/landing/landing_sm_02.png"
            alt="서비스 소개 이미지"
            width={343}
            height={424}
          />
          <Image
            className="mt-10 mob:mt-5"
            src="/images/landing/landing_sm_03.png"
            alt="서비스 소개 이미지"
            width={343}
            height={424}
          />
          <Image
            className="mt-10 mob:mt-5"
            src="/images/landing/landing_sm_04.png"
            alt="서비스 소개 이미지"
            width={343}
            height={424}
          />
        </section>
        <Link className="my-20 mob:my-20" href="/wines">
          <Button
            buttonColor="purple"
            buttonStyle="floating"
            buttonWidth="fitToChildren"
            textColor="white"
          >
            와인 보러가기
          </Button>
        </Link>
      </main>
    </div>
  );
}
