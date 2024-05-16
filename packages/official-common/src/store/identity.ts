import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getIdentityInfo } from '../api/identity';

export interface IdentityState {
  identity: {
    id: string;
    email: string;
    token: string;
    firstName: string;
    lastName: string;
  };
  setIdentity: (identity: IdentityState['identity']) => void;
  refreshIdentity: () => Promise<void>;
};

export const useIdentityStore = create<IdentityState, [
  ['zustand/persist', IdentityState],
]>(
  persist(
    (set, get) => ({
      identity: {
        id: '',
        email: '',
        token: '',
        firstName: '',
        lastName: '',
      },
      setIdentity: (identity) => set({identity}),
      refreshIdentity: async () => {
        const { identity: { token, id, email } } = get();
        const identityInfo = await getIdentityInfo(token, id, email);
        set({ identity: identityInfo });
      },
    }),
    {
      name: 'onlycoin-account', // name of the item in the storage (must be unique)
    },
  ),
);

