import React from "react";
import useAcceptInput from "./customHooks/useAcceptInput";

const SampleInputForm = () => {
    const  [username,setUserName,clearUserName] = useAcceptInput("");
    const [greetings,setGreetings,clearGreetings] = useAcceptInput("");
 
    return(<form>
       {username !=="" && <h6> {greetings}, {username}!</h6>}
        <label>Enter Greetings</label>
        <input type="text" name="greeting" {...setGreetings}/>
        <br />
        <label>Enter User name</label>
        <input type ="text" name="username" {...setUserName}/>

    </form>)
}


export default SampleInputForm;