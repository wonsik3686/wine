'use client';

import Header from '@/components/common/Header';
import { useAuthStore } from '@/providers/auth';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function HeaderWrapper() {
  const { data: session } = useSession();
  const oAuthLogin = useAuthStore((state) => state.oAuthLogin);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (session?.provider?.toUpperCase() === 'GOOGLE') {
      if (session.id_token) {
        oAuthLogin('GOOGLE', { token: session.id_token });
      }
    }
  }, [oAuthLogin, session?.provider, session?.id_token]);

  useEffect(() => {
    if (params.get('code') && params.get('redirectUri')) {
      oAuthLogin('KAKAO', {
        token: params.get('code')!,
        redirectUri: params.get('redirectUri')!,
      }).then(() => {
        router.replace('/');
      });
    }
  }, [params]);

  return <Header />;
}

export default HeaderWrapper;
