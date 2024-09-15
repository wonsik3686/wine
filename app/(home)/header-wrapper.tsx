'use client';

import Header from '@/components/common/Header';
import { useAuthStore } from '@/providers/auth';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function HeaderWrapper() {
  const { data: session } = useSession();
  const oAuthLogin = useAuthStore((state) => state.oAuthLogin);
  useEffect(() => {
    if (session?.provider?.toUpperCase() === 'GOOGLE') {
      if (session.id_token) {
        oAuthLogin('GOOGLE', { token: session.id_token });
      }
    }
  }, [oAuthLogin, session?.provider, session?.id_token]);

  return <Header />;
}

export default HeaderWrapper;
