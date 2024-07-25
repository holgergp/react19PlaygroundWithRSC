import { LocalPromise } from "./LocalPromise";
import { FetchedPromise } from "./FetchedPromise";
import { LocalPromiseConditional } from "./LocalPromiseConditional";
import { LocalPromiseUnHoisted } from "./LocalPromiseUnhoisted";
import { ContextWithUseHook } from "./ContextWithUseHook";
import { PromiseSentFromServer } from "./PromiseSentFromServer";

export const UseHook = () => {
  return (
    <div>
      <p>Use Hook!</p>
      <div className={"flex"}>
        <LocalPromise />
        <FetchedPromise />
        <LocalPromiseConditional toggle={true} />
        <LocalPromiseUnHoisted />
        {/*<LocalPromiseWithoutSuspense />*/}
        <ContextWithUseHook />
        <PromiseSentFromServer />
      </div>
    </div>
  );
};
