import React, { useReducer } from "react";

const HookUseReducer = () => {

    const reducer = (state,action) => {
        switch(action.type){
            case "INCREMENT":
                return({
                    count: state.count +1,
                    showText:state.showText
                });
            case "DECREMENT":
            return({
                count: state.count -1,
                showText:state.showText
            });
            case "TOGGLEDISPLAYTEXT":
            return({
                count: state.count,
                showText: !state.showText
            });
            default:
            return({
                count: state.count,
                showText:state.showText
            });
              
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    });
    return (<div className="container border border-success">
        <h4><button className="btn btn-danger m-1 p-1" onClick={(event)=>dispatch({type:"TOGGLEDISPLAYTEXT"})}>Use Reducer</button></h4>
        {state.showText && <section>
            <h6>Use Reducer Hook when you have more state variables</h6>
            <h6>const [state, dispatch] = useReducer(reducer, initialArg, init);</h6><p>
            An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

            useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

            </p>
        </section>}
        <h6>Counter: <span>{state.count}</span></h6>
        <button className="btn btn-success" onClick={(event) =>dispatch({type:"INCREMENT"}) }>Increment Counter</button>
        <button className="btn btn-warning" onClick={(event) => dispatch({type:"DECREMENT"}) }>Decrement Counter</button>
    </div >)
}

export default HookUseReducer;