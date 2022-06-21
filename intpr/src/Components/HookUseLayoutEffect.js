import React,{useEffect,useRef,useLayoutEffect} from "react";

const HookUseLayoutEffect = () => {
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.value = "Hello React";
        inputRef.current.placeholder = "Hello React";
        console.log("Use Effect Executed", inputRef.current.value);

    },[]);
    useLayoutEffect(()=>{
        console.log("Use Layout Executed",inputRef.current.value)
    },[])
    return(<div className="text-center container border border-secondary">
   <h4>useLayoutEffect</h4>
   <input ref={inputRef} type="text" value="Hello JS" 
    readOnly
    placeholder="Hello JS"/>
    <p> Identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.</p>
<p>If you’re migrating code from a class component, note useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate. However, we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem.

</p>
<p>Input tag starting placeholder is "Hello JS"</p>
<p>Check console for the execution sequence and also see the value change</p>
   
    </div>)
}

export default HookUseLayoutEffect;
