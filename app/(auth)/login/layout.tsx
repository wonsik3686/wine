import { Suspense } from 'react';

function LoginLayout({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  return <Suspense>{children}</Suspense>;
}

export default LoginLayout;
