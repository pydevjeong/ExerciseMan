// import { useReducer } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

// const initialState={
//   authenticated:false,
//   token:null
// }
// const reducer=(state,action)=>{
//   switch(action.type){
//     case 'SET_TOKEN':
//       return {...state, token: action.token,authenticated: action.result}
//     default:
//       return state
//   }
// }

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
