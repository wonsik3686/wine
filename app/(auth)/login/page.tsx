'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useAuthStore } from '@/store/useAuthStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

export default function SingInPage() {
  const login = useAuthStore((state) => state.login);
  const [values, setValues] = useState<FormValues>({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : '이메일 형식으로 작성해 주세요.';
  };

  const validateForm = useCallback(() => {
    const { email, password } = values;
    const emailError = !email
      ? '이메일은 필수 입력입니다.'
      : validateEmail(email);
    const passwordError = !password ? '비밀번호는 필수 입력입니다.' : '';

    if (emailError || passwordError) {
      setFormErrors({
        email: emailError,
        password: passwordError,
      });
      return false;
    }
    setFormErrors({
      email: '',
      password: '',
    });
    return true;
  }, [values]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, password } = values;

      const valResult = validateForm();
      if (!valResult) {
        return;
      }

      try {
        await login(email, password);
        router.push('/');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // TODO: 실패한 이유 사용자에게 노티
        setFormErrors({
          email: '이메일 혹은 비밀번호를 확인해주세요.',
          password: '   ',
        });
      }
    },
    [login, router, validateForm, values]
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
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
          errorMessage={formErrors.email}
          placeholder="이메일 입력"
          type="email"
          name="email"
          value={values.email}
          onBlur={() => validateForm()}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit : () => {})}
          onChange={handleChange}
        />

        <Input
          labelClassName="pt-[20px]"
          label="비밀번호"
          errorMessage={formErrors.password}
          placeholder="비밀번호 입력"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onKeyDown={(e) => (e.key === 'Enter' ? handleChange : () => {})}
          onBlur={() => validateForm()}
        />

        <div className="pt-[10px] text-[14px] text-purple-700">
          {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
          <Link href="/">비밀번호를 잊으셨나요?</Link>
        </div>

        <div className="mb-[15px] mt-[56px] flex w-full flex-col gap-[0.94rem] mob:gap-4">
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
      <div className="flex flex-row items-center gap-2">
        계정이 없으신가요?
        {/* Link href 재설정 필요, 임시로 "/" 페이지 설정 */}
        <Link href="/">
          <div>회원가입하기</div>
        </Link>
      </div>
    </div>
  );
}
