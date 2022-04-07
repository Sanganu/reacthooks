import React,{useRef} from "react";

const HookUseRef = () => {
    const inputRef = useRef(null);
    const [themecolor,setThemeColor] = useState({
        color: black,
        background_color : white
    });
    const [user, setUser] = useState("")
    changeColor =() =>{
        inputRef.current.focus();
        console.log(inputRef.current.value)
        setUser(inputRef.current.value)
       
    }
    return (<div className="text-center container border border-danger">
       {user && <h3>Good Day {user}</h3>}
        <h4>useRef</h4>
        <p>Manipulate DOM Elements</p>
        <figure style={themecolor}>
            <strong>

            </strong>
        </figure>
        <input name="getThemeColor" placeholder="Enter your name" ref={inputRef} type="text" />
         <button onClick={changeColor}>Accept Theme Color</button>


    </div>)
}

export default HookUseRef;
