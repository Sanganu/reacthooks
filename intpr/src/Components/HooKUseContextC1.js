import React,{useContext} from "react";

import {ContextState} from "./HookUseContextHOC";

const HookUseContextC1 = () =>{
    const {setDisplayExp} = useContext(ContextState)
    const handleExplanation = (event) => {
        console.log(event.target.value,event.target.checked)
       event.target.checked ?  setDisplayExp(true) : setDisplayExp(false)
    }
    return(<>
        <h4>UseContext</h4>
        <label>What is useContext Hook ?</label>
        <input name="context" onChange={handleExplanation} value="true" type="checkbox" />
    </>)
}


export default HookUseContextC1;
