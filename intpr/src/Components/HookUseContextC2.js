import React,{useContext} from "react";
import {ContextState} from "./HookUseContextHOC";
const HookUseContextC2 = () =>{
    const {displayExp} =useContext(ContextState)
    return(<>
    <h6>Context Hook Example</h6>
     {displayExp && <figure>
        <p>const value = useContext(MyContext);</p>
        <p>
        If you’re familiar with the context API before Hooks, useContext(MyContext) is equivalent to static contextType = MyContext in a class, or to MyContext.Consumer.

useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a MyContext.Provider above in the tree to provide the value for this context.
        </p>
</figure>}

    </>)
}


export default HookUseContextC2;
