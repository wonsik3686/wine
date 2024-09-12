'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useAuthStore } from '@/providers/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useState } from 'react';

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export default function Signup() {
  const register = useAuthStore((state) => state.register);
  const [values, setValues] = useState<FormValues>({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  // const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  const validateEmail = (email: string) => {
    if (!email) return '이메일은 필수 입력입니다.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return '이메일 형식으로 작성해 주세요.';
    return '';
  };

  const validateNickname = (nickname: string) => {
    if (!nickname) return '닉네임은 필수 입력입니다.';
    if (nickname.length > 20) return '닉네임은 최대 20자까지 가능합니다.';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return '비밀번호는 필수 입력입니다.';
    if (password.length < 8) return '비밀번호는 최소 8자 이상입니다.';
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password))
      return '비밀번호는 숫자, 영문, 특수문자로만 가능합니다.';
    return '';
  };

  const validatePasswordConfirmation = (
    password: string,
    confirmation: string
  ) => {
    if (!confirmation) return '비밀번호 확인을 입력해주세요.';
    if (password !== confirmation) return '비밀번호가 일치하지 않습니다.';
    return '';
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  }, []);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      let errorMessage = '';

      switch (name) {
        case 'email':
          errorMessage = validateEmail(value);
          break;
        case 'nickname':
          errorMessage = validateNickname(value);
          break;
        case 'password':
          errorMessage = validatePassword(value);
          break;
        case 'passwordConfirmation':
          errorMessage = validatePasswordConfirmation(values.password, value);
          break;
        default:
          break;
      }

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    },
    [values.password]
  );

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, nickname, password, passwordConfirmation } = values;

    const emailError = validateEmail(email);
    const nicknameError = validateNickname(nickname);
    const passwordError = validatePassword(password);
    const passwordConfirmationError = validatePasswordConfirmation(
      password,
      passwordConfirmation
    );

    if (
      emailError ||
      nicknameError ||
      passwordError ||
      passwordConfirmationError
    ) {
      setFormErrors({
        email: emailError,
        nickname: nicknameError,
        password: passwordError,
        passwordConfirmation: passwordConfirmationError,
      });
      return;
    }

    register({ email, nickname, password, passwordConfirmation })
      .then(() => {
        router.push('/');
      })
      .catch((responseError) => {
        // TODO: 어떤 이유로 생성 안된건지 사용자에게 알림 보내기
        console.error(responseError);
      });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white tab:px-12 mob:px-5 pc:px-14">
      <Link href="/">
        <Image
          className="mb-16"
          src="/icons/wineBlackLogo-l.svg"
          alt="로고"
          width={104}
          height={30}
        />
      </Link>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="이메일"
            errorMessage={formErrors.email || undefined}
            placeholder="whyne@email.com"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            label="닉네임"
            errorMessage={formErrors.nickname || undefined}
            placeholder="whyne"
            type="text"
            name="nickname"
            value={values.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            label="비밀번호"
            errorMessage={formErrors.password || undefined}
            placeholder="영문, 숫자 포함 8자 이상"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            label="비밀번호 확인"
            errorMessage={formErrors.passwordConfirmation || undefined}
            placeholder="비밀번호 확인"
            type="password"
            name="passwordConfirmation"
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="pt-4">
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
      <div className="mt-6 flex flex-row items-center justify-center gap-3">
        <span className="text-gray-500">계정이 이미 있으신가요?</span>
        <Link
          href="/login"
          className="font-medium text-purple-500 underline underline-offset-2"
        >
          로그인하기
        </Link>
      </div>
    </div>
  );
}
