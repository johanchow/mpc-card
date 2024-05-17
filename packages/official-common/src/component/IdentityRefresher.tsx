import React, { useEffect } from "react";
import { useIdentityStore } from "../store/identity";

const IdentityRefresher: React.FC = () => {
  const { refreshIdentity } = useIdentityStore();
  useEffect(() => {
    refreshIdentity();
  }, []);
  return <></>;
};

export default IdentityRefresher;
