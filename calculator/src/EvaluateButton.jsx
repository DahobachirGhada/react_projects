import {ACTIONS} from "./App";

export default function EvaluateButton({dispatch}){
    return <button style={{height:'150px'}} onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
}