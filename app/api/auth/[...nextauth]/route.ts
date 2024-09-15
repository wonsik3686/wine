import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: '',
      authorization: {
        params: {
          redirect_uri: `${process.env.VERCEL_URL}/api/kakaoLogin`,
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        return {
          ...token,
          id_token: account.id_token,
          provider: account.provider,
          account,
          user,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        id_token: token.id_token,
        provider: token.provider,
        user,
      };
    },
  },
});

export { handler as GET, handler as POST };
