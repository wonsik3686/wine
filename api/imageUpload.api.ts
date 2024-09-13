import { axiosInstance } from './_axiosInstance';

function encoding(data: File['name']) {
  const index = data.lastIndexOf('.');
  const filename = data.substring(0, index);
  const extension = data.substring(index);
  const encode = btoa(encodeURI(filename));
  const result = encode + extension;

  return result;
}

async function postImageUpload(file: File) {
  const formData = new FormData();
  const filename = encoding(file.name);

  formData.append('image', file, filename);

  const response = await axiosInstance<{ url: string }>({
    method: 'POST',
    url: '/images/upload',
    data: formData,
  });

  return response.data;
}

export default postImageUpload;
