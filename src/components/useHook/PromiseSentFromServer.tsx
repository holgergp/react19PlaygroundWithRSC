import { use } from "react";

export async function PromiseSentFromServer() {
  const resolvedPromise = Promise.resolve("Hello from the server");
  return <PromiseConsumer promise={resolvedPromise} />;
}

interface PromiseConsumerProps {
  promise: Promise<any>;
}

const PromiseConsumer = (props: PromiseConsumerProps) => {
  const promiseValue = use(props.promise);
  console.log(`On the server: ${promiseValue}`);

  return (
    <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
      <>{promiseValue}</>
    </div>
  );
};
