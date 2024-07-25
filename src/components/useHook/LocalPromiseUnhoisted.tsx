'use client';

import { Suspense, use } from "react";

export const LocalPromiseUnHoisted = () => {
  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer />
    </Suspense>
  );
};

const PromiseConsumer = () => {
  const inlinePromise = Promise.resolve("Test");
  const inlinePromise2 = Promise.resolve("Test2");

  const inlinePromiseValue1 = use(inlinePromise);
  const inlinePromiseValue2 = use(inlinePromise2);
  console.log("unhoisted", inlinePromiseValue1, inlinePromiseValue2);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      {" "}
      <>{inlinePromiseValue1}</>
      <>{inlinePromiseValue2}</>
    </div>
  );
};
