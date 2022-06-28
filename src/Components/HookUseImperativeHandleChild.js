import React,{useState, useImperativeHandle, useEffect,forwardRef} from"react";


const HookUseImperativeHandleChild = forwardRef((props,ref) =>{
    const [toggle,setToggle]=useState(true)

    useEffect(()=>{
        console.log("Imperative child")
    })
    useImperativeHandle(ref,()=>({
        alterToggle(){
            setToggle(!toggle)
            console.log("hhh")
        }
    }))

    return(<div className="container border border-secondary">
  
        {toggle &&
        <> 
        <h4> useImperativeHandle(ref, createHandle, [deps]) </h4>
            <h6>HookUseImperativeHandleChild - onClick written in the child component</h6>
            
            <p>
            useImperativeHandle customizes the instance value that 
            is exposed to parent components when using ref.
            As always, imperative code using refs should be
            avoided in most cases.
            useImperativeHandle should be used with
                forwardRef.
            </p>
        </>}
    </div>)
})

export default HookUseImperativeHandleChild;

