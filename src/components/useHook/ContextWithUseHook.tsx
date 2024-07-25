"use client";

import { createContext, use } from "react";

const MyContext = createContext<string | null>(null);
export const ContextWithUseHook = () => {
  return (
    <MyContext.Provider value={"itsAContext"}>
      <ContextConsumer />
    </MyContext.Provider>
  );
};

const ContextConsumer = () => {
  const contextValue = use(MyContext);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{contextValue}</>
    </div>
  );
};
