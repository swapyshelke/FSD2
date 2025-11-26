// import React, { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;

//     case "RESET":
//       return 0;

//     default:
//       return state;
//   }
// }

// function Slip15() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Counter Using Reducer</h2>

//       <h1>{count}</h1>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ margin: "10px" }}>-</button><br/>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// }

// export default Slip15;



import React,{ useReducer } from "react";
function reducer(state,action){
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
function Slip15(){
  const[count,dispatch]=useReducer(reducer,0);

return(
  <div style={{textAlign:"center"}}>
  <h1>counter Using Reducer</h1>
  <h1>{count}</h1>
  <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
  <button onClick={()=>dispatch({type:"DECREMENT"})} style={{marginLeft:"10px"}}>-</button><br/>
  <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
</div>
)

}
export default Slip15;