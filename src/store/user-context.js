"use client";

import { createContext, useState } from "react";

const UserContext = createContext({
  account: null,
  provider: null,
  setAccount: function (account) {},
  setProvider: function (provider) {},
});

export function UserContextProvider(props) {
  const [account, setAccount] = useState();
  const [provider, setProvider] = useState();

  function setAccountHandler(account) {
    setAccount(account);
  }

  function setProviderHandler(provider) {
    setProvider(provider);
  }

  const context = {
    account: account,
    provider: provider,
    setAccount: setAccountHandler,
    setProvider: setProviderHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
