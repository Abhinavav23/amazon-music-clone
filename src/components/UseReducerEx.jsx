import React, { useReducer } from 'react'

export const UseReducerEx = () => {
    // takes two arguments
    // a. reducer function
    // b. initial value

    // returns two value
    // a. value
    // b. function which can be used to set the value called as dispatch fn
    const reducerFun = (prevVal, action) => {
        console.log("prevVal", prevVal); //10
        console.log("action", action); // add
        if(action.type === "add"){
            return prevVal+action.payload//15 --> will be updated to count
        }else if(action.type === "subs"){
            return prevVal-action.payload
        }
    }

    const [count, dispatch] = useReducer(reducerFun, 50);

  return (
    <section>
        <div>useReducerEx</div>
        <div>counter: {count}</div>
        <button onClick={() => dispatch({type: "add", payload: 3})}>+3</button>
        <button onClick={() => dispatch({type: "add", payload: 5})}>+5</button>
        <br />
        <button onClick={() => dispatch({type: "subs", payload: 6})}>-6</button>
    </section>
  )
}


const arr= [4,3,7,9]

const sum = arr.reduce((acc, curr) => {
    // --> for 1st iteration
    // acc --> value passed as initial value
    // curr --> value taken in each iteration from array
    console.log("acc-->", acc); // 0 4 7 14 
    console.log("curr-->", curr); // 4 3 7 9

    // after 1st iteration
    // acc --> becomes the value returned in prev iteration
    // curr --> value taken in each iteration from array
    return acc+curr //4 7 14 23
}, 0)

console.log("sum", sum);


// reducer Function
// pure function --> function that returns same output when same inputs are passes
// return value dependent on prev value
// at end it returns single value