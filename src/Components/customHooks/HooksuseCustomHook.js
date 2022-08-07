import React from "react";
import useAcceptInput from "./useAcceptInput";

const HooksUseCustomHook = () => {
    const [username, setUserName, clearUserName] = useAcceptInput(' ');
    const [email, setEmail, clearEmail] = useAcceptInput(' ');

    const handleClick = () => {
        alert(`Welcome ${username} with email ${email}`)
    }

    const resetInput = ()=>{
        clearEmail()
        clearUserName()
        console.log(username,email)
    }

    return (<>
        <div className="container border border-success text-center">
            <p>
             
                Custom hooks are JavaScript functions that use other hooks. They help share stateful logic that we may otherwise need to reuse throughout our application. For example, we may create custom hooks for commonly used effects such as form handling, animations, timers, etc.
    
                As a convention, custom hooks should have names that start with use. Additionally, they should also follow the rules of hooks. Otherwise, they don’t need to have a specific design — the developer gets to decide what arguments it takes, and if it should return anything.
            </p>
            <section>
                <p> Use of Custom Hooks. Custom hooks have many benefits. </p>
                <ul>
                    <li>Allow code to be abstracted</li>
                    <li>Hide complex logic</li>
                    <li>Allow stateful logic to be reused between multiple components</li>
                </ul>
            </section>
            <form>
                <label>Enter username</label>
                <input type="text" {...setUserName}  />
                <label>Enter Email</label>
                <input type="text" {...setEmail} />
                <button onClick={handleClick}>Save</button>
                <button onClick={resetInput}>Reset</button>
            </form>
        </div>
    </>)
}


export default HooksUseCustomHook;
 