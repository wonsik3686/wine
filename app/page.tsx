import Button from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <section className="tab:mx-5 tab:mt-6 mob:hidden pc:mx-5 pc:mt-20">
        <Image
          src="/images/landing/landingBanner.png"
          alt="메인 배너"
          width={1140}
          height={535}
        />
      </section>
      <section className="hidden mob:mx-4 mob:mt-6 mob:block">
        <Image
          src="/images/landing/landing_sm_01.png"
          alt="메인 배너"
          width={1140}
          height={535}
        />
      </section>
      <section className="tab:mt-20 mob:hidden pc:mt-40">
        <Image
          src="/images/landing/landingIntro1.png"
          alt="서비스 소개 이미지"
          width={699}
          height={320}
        />
        <Image
          className="mt-10"
          src="/images/landing/landingIntro2.png"
          alt="서비스 소개 이미지"
          width={699}
          height={320}
        />
        <Image
          className="mt-10"
          src="/images/landing/landingIntro3.png"
          alt="서비스 소개 이미지"
          width={699}
          height={320}
        />
      </section>
      <section className="hidden mob:mx-0 mob:mt-10 mob:block">
        <Image
          src="/images/landing/landing_sm_02.png"
          alt="서비스 소개 이미지"
          width={670}
          height={828}
        />
        <Image
          className="mt-5"
          src="/images/landing/landing_sm_03.png"
          alt="서비스 소개 이미지"
          width={670}
          height={828}
        />
        <Image
          className="mt-5"
          src="/images/landing/landing_sm_04.png"
          alt="서비스 소개 이미지"
          width={670}
          height={828}
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
  );
}
