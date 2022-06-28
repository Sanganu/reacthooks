import React, { useRef, useState } from "react";
import {Button} from "react-bootstrap";

const HookUseRef = () => {
    const inputRef = useRef(null);
    // const [themecolor,setThemeColor] = useState({
    //     color: black,
    //     background_color : white
    // });
    const [user, setUser] = useState("");

    const changeUser = () => {
        // inputRef.current.focus();
        console.log(inputRef.current.value)
        setUser(inputRef.current.value)
        inputRef.current.value = ""

    }
    
    return (<div className="text-center container border border-danger">
       
        <h4>useRef</h4>
        {user && <h6>Good Day {user}</h6>}
        <p>Manipulate DOM Elements</p>

        <p>
                    const refContainer = useRef(initialValue);
            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
            The returned object will persist for the full lifetime of the component.
        </p>
        <input name="getUserName" placeholder="Enter your name" ref={inputRef} type="text" />
        <Button variant="warning" onClick={changeUser}>Accept User Name</Button>
    </div>)
}

export default HookUseRef;
