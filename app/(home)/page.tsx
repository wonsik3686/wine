'use client';

import Button from '@/components/common/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
      <section
        data-aos="fade-top"
        data-aos-duration="1000"
        className="flex w-full flex-col overflow-hidden rounded-2xl bg-[#171A21] tab:mt-6 mob:mt-6 pc:mx-5 pc:mt-20"
      >
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="my-[100px] flex flex-col items-center"
        >
          <div className="relative mb-[20px] h-[29px] w-[102px]">
            <Image
              fill
              src="/images/landing/landing_logo_purple.png"
              alt="랜딩로고"
            />
          </div>
          <p className="text-center text-[32px] font-bold text-white">
            한 곳에서 관리하는
          </p>
          <p className="text-center text-[32px] font-bold text-white">
            나만의 와인창고
          </p>
        </div>
        <div className="flex justify-center">
          <div
            className={`${styles.popUp} ${styles.card} relative left-[100px] top-[40px] h-[185px] w-[232px] shrink-0 mob:hidden`}
          >
            <Image
              fill
              src="/images/landing/monthly_wine1.png"
              alt="와인카드1"
            />
          </div>
          <div
            className={`${styles.popUp} ${styles.card} relative left-[50px] top-[30px] h-[185px] w-[232px] shrink-0`}
          >
            <Image
              fill
              src="/images/landing/monthly_wine2.png"
              alt="와인카드2"
            />
          </div>

          <div
            className={`${styles.popUp} ${styles.card} relative top-[20px] z-20 h-[185px] w-[232px] shrink-0`}
          >
            <Image
              fill
              src="/images/landing/monthly_wine3.png"
              alt="와인카드3"
            />
          </div>

          <div
            className={`${styles.popUp} ${styles.card} relative right-[50px] top-[30px] z-10 h-[185px] w-[232px] shrink-0`}
          >
            <Image
              fill
              src="/images/landing/monthly_wine4.png"
              alt="와인카드4"
            />
          </div>
          <div
            className={`${styles.popUp} ${styles.card} relative right-[100px] top-[40px] z-0 h-[185px] w-[232px] shrink-0 mob:hidden`}
          >
            <Image
              fill
              src="/images/landing/monthly_wine5.png"
              alt="와인카드5"
            />
          </div>
        </div>
      </section>
      <section
        data-aos="fade-left"
        data-aos-duration="2000"
        className="flex w-[640px] overflow-hidden rounded-2xl bg-[#eaeef4] shadow ring-1 ring-gray-200 tab:mt-20 mob:w-full mob:flex-col pc:mt-40 pc:h-80"
      >
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          className="ml-[32px] mt-[56px] shrink-0"
        >
          <p className="text-[22px] font-bold">
            매달 새롭게 만나는 <br /> 와인 추천 콘텐츠
          </p>
          <p className="text-xs font-normal text-[#9facbd]">
            매달 다양한 인기 와인을 만나보세요.
          </p>
        </div>
        <section
          data-aos="fade-left"
          data-aos-duration="2000"
          className="relative left-[100px] top-[50px] flex h-[277px] w-[500px] flex-col rounded-br-2xl rounded-tl-2xl bg-[#f2f4f8] pl-[15px]"
        >
          <p className="my-[20px] text-lg font-bold">이번 달 추천 와인</p>
          <div className="flex justify-start gap-[10px]">
            <div className="relative">
              <Image
                width={193}
                height={160}
                src="/images/landing/monthly_wine1.png"
                alt="와인카드1"
              />
            </div>
            <div className="relative">
              <Image
                width={193}
                height={160}
                src="/images/landing/monthly_wine2.png"
                alt="와인카드2"
              />
            </div>
          </div>
        </section>
      </section>
      <section
        data-aos="fade-right"
        data-aos-duration="2000"
        className="h-90 flex w-[640px] overflow-hidden rounded-2xl bg-[#eaeef4] shadow ring-1 ring-gray-200 tab:mt-20 mob:w-full mob:flex-col pc:mt-40"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="ml-[32px] mt-[56px] shrink-0"
        >
          <p className="text-[22px] font-bold">
            다양한 필터로 찾는 <br /> 내 맞춤 와인
          </p>
          <p className="text-xs font-normal text-[#9facbd]">
            와인 타입, 가격, 평점으로 <br /> 나에게 맞는 와인을 쉽게 검색해요.
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="relative mt-[40px] w-[150px] mob:hidden"
          >
            <Image
              width={234}
              height={173}
              objectFit="cover"
              src="/images/landing/filter.png"
              alt="와인필터"
            />
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          className="relative left-[110px] w-[360px]"
        >
          <Image
            width={342}
            height={359}
            objectFit="cover"
            src="/images/landing/landing_wine_detail_01.png"
            alt="와인상세카드1"
          />
        </div>
      </section>
      <section
        data-aos="fade-left"
        data-aos-duration="2000"
        className="h-90 flex w-[640px] overflow-hidden rounded-2xl bg-[#eaeef4] shadow ring-1 ring-gray-200 tab:mt-20 mob:w-full mob:flex-col pc:mt-40"
      >
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="ml-[32px] mt-[56px] shrink-0"
        >
          <p className="text-[22px] font-bold">
            직관적인 <br /> 리뷰 시스템
          </p>
          <p className="text-xs font-normal text-[#9facbd]">
            더 구체화된 리뷰 시스템으로 <br /> 쉽고 빠르게 와인 리뷰를
            살펴보세요.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          className="bottom-[5px] w-[300px] tab:left-[100px] mob:ml-[30%] mob:mt-[10px] tab2:relative pc:relative pc:left-[100px] "
        >
          <Image
            width={272}
            height={432}
            objectFit="cover"
            src="/images/landing/landing_wine_detail_02.png"
            alt="와인상세카드2"
          />
        </div>
      </section>
      <Link
        className={`${styles.rotate} my-20 rounded-full mob:my-20`}
        href="/wines"
      >
        <Button
          buttonColor="purple"
          buttonStyle="floating"
          buttonWidth="fitToChildren"
          textColor="white"
        >
          와인 보러가기
        </Button>
      </Link>
      <script>AOS.init();</script>
    </main>
  );
}
