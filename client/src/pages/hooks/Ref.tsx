import { useRef, useState } from "react";

//Ref : is like useState to hold and change value, but it dose'nt make the component re render
// It is not used to rendering like not used in return block for getting value
const Ref = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const increment = () => {
    setCount(count + 1);
    ref.current++;

    // this will have count as 0 and ref as 1
    // because the count is accessible in new render and in this render the value is still 0
    // setState make the component re render
    console.log({ count, ref: ref.current });
    //Ref : updates, changes, delete value without the need of re render
  };

  return (
    <div>
      <div className="text-center">{count}</div>
      <button className="btn btn-primary" onClick={increment}>
        Click Me
      </button>

      {/* <input type="text" ref={ref} /> */}
    </div>
  );
};

// Ref can be also used to access the dom element directly at mount stage, and access the dom properties

export default Ref;
