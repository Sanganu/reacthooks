import React, {useEffect} from "react";

const HookUseEffect = ()=>{
    useEffect(async ()=>{
      let apiResults = await fetch("https://jsonplaceholder.typicode.com/users")
      if(apiResults.ok){
      apiResults = apiResults.json()
      console.log(apiResults)
      }else{
          console.log("API Results failed")
      }
    },[])
    return(<div className="container border border-green text-center">
    <h4>useEffect</h4>
    <p>The Effect Hook lets you perform side effects in function components</p>
    <p>If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
    <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. </p>
        </div>)
}

export default HookUseEffect;
