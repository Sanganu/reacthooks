import React, { useRef, useState } from "react";

const HookUseRef = () => {
    const inputRef = useRef(null);
    // const [themecolor,setThemeColor] = useState({
    //     color: black,
    //     background_color : white
    // });
    const [user, setUser] = useState("");

    const changeUser = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value)
        setUser(inputRef.current.value)
        inputRef.current.value = ""

    }
    return (<div className="text-center container border border-danger">
        {user && <h3>Good Day {user}</h3>}
        <h4>useRef</h4>
        <p>Manipulate DOM Elements</p>

        <p>
                    const refContainer = useRef(initialValue);
            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
        </p>
        <input name="getUserName" placeholder="Enter your name" ref={inputRef} type="text" />
        <button onClick={changeUser}>Accept User Name</button>
    </div>)
}

export default HookUseRef;
