import React,{useContext} from "react";

import {ContextState} from "./HookUseContextHOC";

const HookUseContextC1 = () =>{
    const [displayExp,setDisplayExp] = useContext(ContextState)
    const handleExplanation = (event) => {
        setDisplayExp(event.target.value)
    }
    return(<>
    <label for="context">What is useContext Hook ?</label>
    <input name="context" onChange={handleExplanation} type="checkbox" />
    </>)
}


export default HookUseContextC1;
