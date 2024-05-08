import { useState, useTransition } from "react";

//useTransition is used to set State which are non priority for rendering the components and doesn't block the UI thread
const Transition = () => {
  const [items, setItems] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();

  startTransition(() => {
    setItems(new Array(2_00_000).fill(1));
  });

  if (isPending) return <div>Loading Please Wait...</div>;

  return (
    <div>
      <ul>
        {items.map((i, id) => (
          <li key={id}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transition;
