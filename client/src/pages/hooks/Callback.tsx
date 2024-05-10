import { useCallback, useState } from "react";

const list: string[] = ["a", "b", "c"];

//Other is memo wrapper for components which basically check if props are different for component on re render components if props are different
// https://www.youtube.com/watch?v=MxIPQZ64x0I&ab_channel=CosdenSolutions
// If props has functions then it will render every time because function === function will always be false, function code could be same but function is created different in each render
/**
 * 
    const Input = (props : {clickEvent : any}) => {
        return (<input placeholder='' name='' id='' onClick={props.clickEvent}></input>)
    }

    export default memo(Input)

 */

//useCallback returns a function is cached/Memoized which is same for each render if dependency array is not change
const Fallback = () => {
  const [array] = useState(list);

  //return back a function and in memo component if function is passed it will render just once
  const onChange = useCallback((id: string) => {
    // logic of your function
    array.find((item) => item === id);
  }, []);

  return (
    <div>
      <div></div>
      <input type="text" onChange={() => onChange} />
    </div>
  );
};

export default Fallback;
