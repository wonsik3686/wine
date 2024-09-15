export const revalidate = 60;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const redirectUri = url.origin + url.pathname;

  return Response.redirect(
    new URL(
      `/?code=${code}&state=${state}&redirectUri=${redirectUri}`,
      request.url
    )
  );
}
