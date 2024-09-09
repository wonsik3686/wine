const BASE_URL = 'https://winereview-api.vercel.app/8-4/users/me';

export async function getUser(): Promise<User> {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

  const response = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      Authorization: accessToken,
    },
  });

  if (!response.ok) {
    throw new Error('getUser 리스폰스 에러');
  }

  return response.json();
}

export async function patchUser(data: {
  image: string;
  nickname: string;
}): Promise<User> {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

  const response = await fetch(BASE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: accessToken,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('patchUser 리스폰스 에러');
  }

  return response.json();
}

export async function getUserReviews(data: Params): Promise<Reviews> {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

  const params = !data.cursor ? data.limit : data;

  const query = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/reviews?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: accessToken,
    },
  });

  if (!response.ok) {
    throw new Error('getUserReviews 리스폰스 에러');
  }

  return response.json();
}

export async function getUserWines(data: Params): Promise<Wines> {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

  const params = !data.cursor ? data.limit : data;

  const query = new URLSearchParams(params).toString();

  const response = await fetch(`${BASE_URL}/wines?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: accessToken,
    },
  });

  if (!response.ok) {
    throw new Error('getUserWines 리스폰스 에러');
  }

  return response.json();
}
