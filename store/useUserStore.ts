/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/rules-of-hooks */
import { patchUser } from '@/api/users.api';
import { useAuthStore } from '@/providers/auth';
import { User } from '@/types/user.types';
import { create } from 'zustand';

type UserState = {
  user: User | null;
};

type UserAction = {
  setUser: (user: User) => void;
  updateUser: (data: { image?: string; nickname?: string }) => Promise<void>;
};

type UserStore = UserState & UserAction;

const useUserStore = create<UserStore>((set, get) => ({
  user: useAuthStore((state) => state.user),
  setUser: (user) => {
    useAuthStore((state) => state.setUser(user));
  },
  updateUser: async (data) => {
    const result = await patchUser(data);
    result.email = get().user!.email;

    get().setUser(result);
  },
}));

export default useUserStore;
