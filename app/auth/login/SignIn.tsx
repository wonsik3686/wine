'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  return (
    <>
      <Link href="/">
        <Image
          src="/icons/wineBlackLogo-l.svg"
          alt="로고"
          width={104}
          height={30}
        />
      </Link>
      <>
        <Input
          label="이메일"
          errorMessage="이메일을 입력해주세요"
          placeholder="이메일 입력"
        />

        <Input
          label="비밀번호"
          errorMessage="비밀번호를 입력해주세요"
          placeholder="비밀번호 입력"
        />
      </>
      {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
      <div>
        <Link href="/">비밀번호를 잊으셨나요?</Link>
      </div>
      <div>
        <Button
          buttonStyle="box"
          buttonWidth="fitToParent"
          buttonColor="purple"
          textColor="white"
        >
          로그인
        </Button>
        <Button
          buttonStyle="box"
          buttonWidth="fitToParent"
          buttonColor="white"
          textColor="black"
        >
          <Image
            src="/icons/iconGoogle.svg"
            alt="google"
            width={24}
            height={24}
          />
          Google로 시작하기
        </Button>
        <Button
          buttonStyle="box"
          buttonWidth="fitToParent"
          buttonColor="white"
          textColor="black"
        >
          <Image
            src="/icons/iconKakaotalk.svg"
            alt="kakao"
            width={24}
            height={24}
          />
          kakao로 시작하기
        </Button>
      </div>
      <div>
        계정이 없으신가요?
        {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
        <Link href="/">
          <div>회원가입하기</div>
        </Link>
      </div>
    </>
  );
}
