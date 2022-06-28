import React, {useContext} from "react";
import {ContextNavState} from "../App";
import HookUseState from "./HookUseState";
import HookUseReducer from "./HookUseReducer";
import HookUseEffect from "./HookUseEffect";
import HookUseRef from "./HookUseRef";
import HookUseLayoutEffect from "./HookUseLayoutEffect";
import HookUseImperativeHandleParent from "./HookUseImperativeHandleParent";
import HookUseContextHOC from "./HookUseContextHOC";
import HookUseMemo from "./HookUseMemo";
import Home from "./Home";

const Concepts = () => {
    const {currentHook} = useContext(ContextNavState)
    return(<>
        {currentHook === "useState" && <HookUseState />}
        {currentHook === "useReducer" &&<HookUseReducer />}
       {currentHook === "useEffect" &&<HookUseEffect />}
        {currentHook === "useRef" &&<HookUseRef />}
        {currentHook === "useLayoutEffect" && <HookUseLayoutEffect />}
        {currentHook === "useImperativeHandle" && <HookUseImperativeHandleParent />}
        {currentHook === "useContextHOC" && <HookUseContextHOC />}
        {currentHook === "useMemo" && <HookUseMemo/>}
        {currentHook === "Home" && <Home/>}
        </>)
}

export default Concepts;
