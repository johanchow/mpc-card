import { create } from 'zustand';
import { useIdentityStore } from './identity';
import { getWalletAddress } from '../api/card';

export interface WalletState {
  address?: {
    eth: string;
    sol: string;
    bsc: string;
    ok: string;
    trx: string;
  };
  setAddress: (address: WalletState['address']) => void;
  fetchAddress: () => Promise<void>;
};

export const useWalletStore = create<WalletState>()(
	(set, get) => ({
		address: {
			eth: '',
			sol: '',
			bsc: '',
			ok: '',
			trx: '',
		},
		setAddress: (address) => set({address}),
		fetchAddress: async () => {
			const { id, token } = useIdentityStore.getState().identity!;
			const addressInfo = await getWalletAddress(token, id);
			if (!addressInfo) return;
			console.log(`加载到钱包地址信息: addressInfo=${JSON.stringify(addressInfo)}`);
			set({ address: addressInfo });
		},
	}),
);
