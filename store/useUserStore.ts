/* eslint-disable import/no-cycle */
import { patchUser } from '@/api/users.api';
import { User } from '@/types/user.types';
import { create } from 'zustand';
import { useAuthStore } from './useAuthStore';

type UserState = {
  user: User | null;
};

type UserAction = {
  setUser: (user: User) => void;
  updateUser: (data: { image?: string; nickname?: string }) => Promise<void>;
};

type UserStore = UserState & UserAction;

const useUserStore = create<UserStore>((set, get) => ({
  user: useAuthStore.getState().user,
  setUser: (user) => {
    useAuthStore.setState({ user });
  },
  updateUser: async (data) => {
    const result = await patchUser(data);
    result.email = get().user!.email;

    get().setUser(result);
  },
}));

export default useUserStore;
