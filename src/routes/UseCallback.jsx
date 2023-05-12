import { useCallback, useState } from "react";
import UseCallbackButtons from "./UseCallbackButtons";
const UseCallback = () => {
  const [count, setCount] = useState(0);


  const inc = useCallback(function (delta) {
    setCount(curr => curr + delta);
  }, [setCount])

  return (
    <div>
      <h3>Use Callback</h3>
     <UseCallbackButtons inc={inc}/>
      <p>{count}</p>

    </div>
  );
};

export default UseCallback;
