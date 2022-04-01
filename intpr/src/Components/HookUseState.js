import React, { useState } from "react";

const HookUseState = () => {
    const [counter, setCounter] = useState(0);
    const [mood, setMood] = useState("relaxed")
    const [showMood,setShowMood] = useState(true)
    const handleOnClick = () => {
        setCounter(counter + 1)
    }
    const handleOnChange =({target}) => {
        console.log(target.name, target.value)
        setMood(target.value)
    }
    return (<div className="text-center container">
        <label>Enter Mood Swing</label>
        <select value={mood} name="mood" onChange={handleOnChange}>
            <option value='happy'>Happy</option>
            <option value='sad'>Sad</option>
            <option value='stressed'>Stressed</option>
            <option default value='relaxed'>Relaxed</option>
        </select>
        {/* {mood} */}
        {showMood && <h1>Today is a {mood} day</h1>}
        <h1>Counter: <span>{counter}</span></h1>
        <button onClick={handleOnClick}>Start Counter</button>
    </div>)
}

export default HookUseState;
