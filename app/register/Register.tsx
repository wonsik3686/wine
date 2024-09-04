'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
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
          placeholder="whyne@email.com"
        />

        <Input
          label="닉네임"
          errorMessage="닉네임을 입력해주세요"
          placeholder="whyne"
        />

        <Input
          label="비밀번호"
          errorMessage="비밀번호를 입력해주세요"
          placeholder="영문, 숫자 포함 8자 이상"
        />

        <Input
          label="비밀번호 확인"
          errorMessage="비밀번호를 입력해주세요"
          placeholder="비밀번호 확인"
        />
      </>

      <Button
        buttonStyle="box"
        buttonWidth="fitToParent"
        buttonColor="purple"
        textColor="white"
      >
        가입하기
      </Button>

      <div>
        계정이 이미 있으신가요?
        {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
        <Link href="/">
          <span>로그인하기</span>
        </Link>
      </div>
    </>
  );
}
