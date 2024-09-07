'use client';

import { axiosInstance } from '@/api/_axiosInstance';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export default function Signup() {
  const [values, setValues] = useState<FormValues>({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState({
    email: false,
    nickname: false,
    password: false,
    passwordConfirmation: false,
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value,
    }));
  }, []);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, nickname, password, passwordConfirmation } = values;

    if (!email || !nickname || !password || !passwordConfirmation) {
      setFormErrors({
        email: !email,
        nickname: !nickname,
        password: !password,
        passwordConfirmation: !passwordConfirmation,
      });
      return;
    }

    if (values.password !== values.passwordConfirmation) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    // console.log(axiosInstance.defaults.baseURL);
    const response = await axiosInstance.post(
      '/auth/signUp',
      {
        email,
        nickname,
        password,
        passwordConfirmation,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // TODO: 정상적으로 계정 생성 후 자동으로 로그인 되도록 처리하기
    if (response.status !== 201) {
      // TODO: 어떤 이유로 생성 안된건지 사용자에게 알림 보내기
    }
    router.push('/');
  }

  return (
    <>
      <Link href="/">
        <Image
          src="/icons/wineBlackLogo-l.svg"
          alt="로고"
          width={104}
          height={30}
          // className="mb-16"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <Input
          label="이메일"
          errorMessage={formErrors.email ? '이메일을 입력해주세요' : undefined}
          placeholder="whyne@email.com"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <Input
          label="닉네임"
          errorMessage={
            formErrors.nickname ? '닉네임을 입력해주세요' : undefined
          }
          placeholder="whyne"
          type="text"
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
        />

        <Input
          label="비밀번호"
          errorMessage={
            formErrors.password ? '비밀번호를 입력해주세요' : undefined
          }
          placeholder="영문, 숫자 포함 8자 이상"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <Input
          label="비밀번호 확인"
          errorMessage={
            error ||
            (formErrors.passwordConfirmation
              ? '비밀번호를 입력해주세요'
              : undefined)
          }
          // errorMessage={error || '비밀번호를 입력해주세요'}
          placeholder="비밀번호 확인"
          type="password"
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
        />

        <Button
          buttonStyle="box"
          buttonWidth="fitToParent"
          buttonColor="purple"
          textColor="white"
          type="submit"
        >
          가입하기
        </Button>
      </form>
      {/* TODO:띄어쓰기 다시보기 */}
      <div className="mt-10 text-gray-500">
        계정이 이미 있으신가요?{' '}
        {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
        <Link className="font-medium text-purple-700 underline " href="/">
          로그인하기
        </Link>
      </div>
      {/* </form> */}
    </>
  );
}
