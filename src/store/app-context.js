"use client";

import { createContext, useState } from "react";

const AppContext = createContext({
  amountClaimable: null,
  setAmountClaimable: function (amount) {},
});

export function AppContextProvider(props) {
  const [amountClaimable, setAmountClaimable] = useState();

  function setAmountClaimableHandler(amount) {
    setAmountClaimable(amount);
  }

  const context = {
    amountClaimable: amountClaimable,
    setAmountClaimable: setAmountClaimableHandler,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
