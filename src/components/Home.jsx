import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//useSelector is to access value from state in the store 
export default function Home({value}) {
    const [userValue, setUserValue] = useState(0);
    console.log("userValue", userValue);
    const dispatch = useDispatch();

    const { myValue } = useSelector(state => state.myCustomReducer);

    const addBtn = () => {
        dispatch({
            type: "increment"
        });
    };
    const subBtn = () => {
        dispatch({
            type: "decrement"
        });
    };
    const add5Btn = () => {
        dispatch({
            type: "incrementByInput",
            payload:userValue
        });
    };

  return (
    <div>
        <input type="text" onChange={(e) => (setUserValue(e.target.value)) } placeholder='Enter a Integer' />
        <h2>Child Component value : {myValue}</h2>
        <button onClick={addBtn}>Increment</button>
        <button onClick={add5Btn}>Increment By Input</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}
