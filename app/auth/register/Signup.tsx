'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
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

    await axios.post('/auth/signUp', {
      email,
      nickname,
      password,
    });
  }

  return (
    <>
      <Link href="/">
        <Image
          src="/icons/wineBlackLogo-l.svg"
          alt="로고"
          width={104}
          height={30}
          mb-16
        />
      </Link>
      <div className="mt-16 w-[400px]">
        <form onSubmit={handleSubmit}>
          <div className="h-[108px]">
            <Input
              label="이메일"
              // errorMessage= '이메일을 입력해주세요'
              errorMessage={
                formErrors.email ? '이메일을 입력해주세요' : undefined
              }
              placeholder="whyne@email.com"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="h-[108px]">
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
          </div>

          <div className="h-[108px]">
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
          </div>

          <div className="h-[108px]">
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
          </div>

          <div>
            <Button
              buttonStyle="box"
              buttonWidth="fitToParent"
              buttonColor="purple"
              textColor="white"
              type="submit"
            >
              가입하기
            </Button>
          </div>
        </form>
      </div>
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
