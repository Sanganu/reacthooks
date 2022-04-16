import React,{useState, useImperativeHandle, forwardRef} from"react";


const HookUseImperativeHandleChild = () =>{
    const [toggle,setToggle]=useState(true)
    return(<div className="container border border-secondary">
    <button onClick={()=>setToggle(!toggle)}>What is useimpertiveHAndle</button>
    {toggle &&<> <h6>useImperativeHandle</h6>
    <h4> useImperativeHandle(ref, createHandle, [deps]) </h4>
    <p>
    useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef: 
    </p>
    </>}
    </div>)
}

export default HookUseImperativeHandleChild;

