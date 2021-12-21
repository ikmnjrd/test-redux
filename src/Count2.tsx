import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Connect: React.VFC = () => {
  const count = useSelector((state:any) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  console.log("count2");
  
  return (
    <>
      <p>Countコンポーネント:{count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </>
  );
}

export default Connect;