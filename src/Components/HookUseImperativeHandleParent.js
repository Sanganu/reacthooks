import React,{useRef} from "react";
import HookUseImperativeHandleChild from "./HookUseImperativeHandleChild";
import {Button} from "react-bootstrap";

const HookUseImperativeHandleParent = () =>{
const toggleref = useRef(null)
const handleChildComp =() =>{
    console.log("Inparent")
    toggleref.current.alterToggle()
}
return(<div className="container border border-success">
    <h4>UseImperativeHandleParent</h4>
    <Button onClick={handleChildComp}>What is useImperativeHandle(Parent)</Button>
    <HookUseImperativeHandleChild ref={toggleref}/>
    </div>)

}


export default HookUseImperativeHandleParent