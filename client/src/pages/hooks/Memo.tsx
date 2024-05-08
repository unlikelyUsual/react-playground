import { useMemo, useState } from "react";

const items = new Array(10_00_000)
  .fill(1)
  .map((item, index) => ({ id: index, value: item }));

//Use Memo helps us to cache the values until changed
const Memo = () => {
  const [state, setState] = useState(0);
  const [list] = useState(items);

  //INFO : if we remove the useMemo then on each click on button which will make the component re render and call the find method on large list again which make component render slower
  //Caching the value until the dependency array changes
  const selected = useMemo(() => {
    return list.find((item) => item.id === 8);
  }, [list]);

  return (
    <div>
      <div>Count : {state}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Click Me</button>
      </div>
      <div>List : {selected?.id}</div>
    </div>
  );
};

export default Memo;
