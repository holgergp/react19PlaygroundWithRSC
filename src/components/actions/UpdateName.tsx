import { useState, useTransition } from "react";
import { redirect, updateName } from "../../api/api";
import { Input } from "../Input.jsx";
import { Button } from "../Button.jsx";

export function UpdateName() {
  const [name, setName] = useState("");
  const [error, setError] = useState<Error | null >(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    });
  };

  return (
    <div>
      <Input
        className={"mb-2"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button onClick={handleSubmit} disabled={isPending}>
        Update
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
}
