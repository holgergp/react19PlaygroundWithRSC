import { PromiseSentFromServer } from "../components/PromiseSentFromServer";
import {UseHook} from "../components/useHook/UseHook";

export default async function HomePage() {
  return <UseHook />;
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
