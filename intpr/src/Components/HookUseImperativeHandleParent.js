import React,{useRef} from "react";
import HookUseImperativeHandleChild from "./HookUseImperativeHandleChild";

const HookUseImperativeHandleParent = () =>{
const toggleref = useRef(null)
const handleChildComp =() =>{
    console.log("Inparent")
    toggleref.current.alterToggle()
}
return(<>
    <h6>UseImperativeHandlParent</h6>
    <button onClick={handleChildComp}>What is useimpertiveHandle(Parent)</button>
    <HookUseImperativeHandleChild ref={toggleref}/>
    </>)

}


export default HookUseImperativeHandleParent