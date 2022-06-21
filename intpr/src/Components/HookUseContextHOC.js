import React, { useState, createContext } from "react";
import HookContextC1 from "./HooKUseContextC1";
import HookContextC2 from "./HookUseContextC2";

const ContextState = createContext(null)
const HookUseContextHOC = () => {
    const [displayExp,setDisplayExp] = useState(false);

    return (<div>
       <ContextState.Provider value={{displayExp,setDisplayExp}}>
           <HookContextC1 />
           <HookContextC2 />
       </ContextState.Provider>
    </div>)
}

export default HookUseContextHOC;
