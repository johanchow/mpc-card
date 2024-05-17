import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getIdentityInfo } from '../api/identity';

export interface IdentityState {
  identity?: {
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
        const { identity: { token, id, email } = {} } = get();
        console.log(`本地初始加载到identity信息: email=${email}, id=${id}`);
        if (!token || !id || !email) {
          set({ identity: undefined });
          return;
        }
        const identityInfo = await getIdentityInfo(token, id, email).catch(() => {
          return undefined;
        });
        console.log(`重新远程加载到identity信息: identity=${JSON.stringify(identityInfo)}`);
        set({ identity: identityInfo });
      },
    }),
    {
      name: 'onlycoin-identity', // name of the item in the storage (must be unique)
    },
  ),
);

