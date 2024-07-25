'use client';

import { Suspense, use } from "react";

export const LocalPromiseConditional = ({ toggle }: { toggle: boolean }) => {
  const inlinePromise = Promise.resolve("Test");
  const inlinePromise2 = Promise.resolve("Test2");

  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer
        promise1={inlinePromise}
        promise2={inlinePromise2}
        toggle={toggle}
      ></PromiseConsumer>
    </Suspense>
  );
};

const PromiseConsumer = ({
  promise1,
  promise2,
  toggle,
}: {
  promise1: Promise<any>;
  promise2: Promise<any>;
  toggle: boolean;
}) => {
  const promiseValue1 = use(promise1);
  let promiseValue2;
  if (toggle) {
    promiseValue2 = use(promise2);
  }
  console.log("rendering", promiseValue1, promiseValue2);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{promiseValue1}</>
      <>{promiseValue2}</>
    </div>
  );
};
