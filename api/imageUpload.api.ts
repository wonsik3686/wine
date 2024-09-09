const BASE_URL = 'https://winereview-api.vercel.app/8-4/images/upload';

async function postImageUpload(file: File): Promise<{ url: string }> {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

  const formData = new FormData();
  formData.set('image', file, btoa(encodeURI(file.name)));

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('postImageUpload 리스폰스 에러');
  }

  return response.json();
}

export default postImageUpload;
