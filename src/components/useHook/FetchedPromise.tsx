'use client';

import { Suspense, use, useState } from "react";

export const FetchedPromise = () => {
  const [apiVersions] = useState(() => {
    return fetch("/api.json")
      .then((res) => res.json())
      .then((data) => data.version);
  });
  return (
    <Suspense fallback={<p>Loading!</p>}>
      <PromiseConsumer promise={apiVersions}></PromiseConsumer>
    </Suspense>
  );
};

const PromiseConsumer = ({ promise }: { promise: Promise<any> }) => {
  const fetchedPromiseValue = use(promise);
  console.log("fetchedPromiseValue", promise);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <p>API Version</p>
      <p>{fetchedPromiseValue}</p>
    </div>
  );
};
