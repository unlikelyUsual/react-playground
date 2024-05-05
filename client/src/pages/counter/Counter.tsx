import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 height-full width-full">
      <div className="mx-0 flex flex-col">
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-md font-medium text-green-600 ring-1">
            {counter}
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <button className="btn btn-primary btn-sm mx-3">Stop</button>
          <button className="btn btn-warning mx-3 btn-sm">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
