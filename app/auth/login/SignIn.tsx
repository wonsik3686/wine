'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [values, setValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // setFormErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: !value,
    // }));
  }, []);
  const router = useRouter();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      setFormErrors({
        email: !email,
        password: !password,
      });
      return;
    }

    await axios.post(
      '/auth/signIn',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    router.push('/');
  }

  return (
    <>
      <Link href="/">
        <Image
          className="mb-16"
          src="/icons/wineBlackLogo-l.svg"
          alt="로고"
          width={104}
          height={30}
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <Input
          label="이메일"
          errorMessage={formErrors.email ? '이메일을 입력해주세요' : undefined}
          placeholder="이메일 입력"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <div className="pt-[25px]">
          <Input
            label="비밀번호"
            errorMessage={
              formErrors.password ? '비밀번호를 입력해주세요' : undefined
            }
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className="pt-[10px] text-[14px] text-purple-700">
          {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
          <Link href="/">비밀번호를 잊으셨나요?</Link>
        </div>

        <div className=" mb-[15px] mt-[56px]">
          <Button
            buttonStyle="box"
            buttonWidth="fitToParent"
            buttonColor="purple"
            textColor="white"
            type="submit"
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
      </form>
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
