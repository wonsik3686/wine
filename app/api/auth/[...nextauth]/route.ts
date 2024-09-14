import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          id_token: account.id_token,
          provider: account.provider,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        id_token: token.id_token,
        provider: token.provider,
      };
    },
  },
});

export { handler as GET, handler as POST };
