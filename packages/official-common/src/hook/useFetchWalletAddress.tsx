import React, { useEffect } from "react";
import { useWalletStore } from "../store/wallet";

const useFetchWalletAddress = () => {
  const { fetchAddress } = useWalletStore();
  useEffect(() => {
    fetchAddress();
  }, []);
};

export default useFetchWalletAddress;
