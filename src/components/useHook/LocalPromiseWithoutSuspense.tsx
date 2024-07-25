'use client';

import { use } from "react";

export const LocalPromiseWithoutSuspense = () => {
  const handRolledPromise = new HandRolledPromise();

  return <PromiseConsumer promise={handRolledPromise} />;
};

const PromiseConsumer = ({ promise }: { promise: PromiseLike<any> }) => {
  const inlinePromiseValue1 = use(promise);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{inlinePromiseValue1}</>
    </div>
  );
};

class HandRolledPromise implements PromiseLike<any> {
  constructor() {}

  then<TResult1 = any, TResult2 = never>(
    onfulfilled?:
      | ((value: any) => TResult1 | PromiseLike<TResult1>)
      | null
      | undefined,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | null
      | undefined,
  ): PromiseLike<TResult1 | TResult2> {
    throw new Error("Method not implemented.");
  }
  test() {}
}
