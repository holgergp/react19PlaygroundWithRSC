import { PromiseSentFromServer } from "../components/PromiseSentFromServer";

export default async function HomePage() {
  return <PromiseSentFromServer />;
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
