import React, { useEffect } from "react";
import { useIdentityStore } from "../store/identity";

const useRefreshIdentity = () => {
  const { refreshIdentity } = useIdentityStore();
  useEffect(() => {
    refreshIdentity();
  }, []);
};

export default useRefreshIdentity;
