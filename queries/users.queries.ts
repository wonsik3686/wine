import { patchUser } from '@/apis/users.api';
import { useAuthStore } from '@/providers/auth';
import { useMutation } from '@tanstack/react-query';

export function useUpdateUser() {
  const setUser = useAuthStore((state: any) => state.setUser);

  const { mutate, data, error, isError, isPending } = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: patchUser,
    onSuccess: (Data) => {
      setUser(Data?.data);
    },
  });

  return { mutate, data, error, isError, isPending };
}
