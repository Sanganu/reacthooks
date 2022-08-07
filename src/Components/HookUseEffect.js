import React, { useEffect, useState } from "react";
import ApiRecord from "./ApiRecord";

const HookUseEffect = () => {
    const [empData, setEmpData] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(apiResults => {
                return apiResults.json()
            }).then(apiResults => {
                setEmpData(apiResults)
                //   apiResults.forEach(element => {
                //     console.log(element) 
            }).catch(error => {
                console.error(error)
            })

    }, [])
    return (<div className="container border border-success text-center">
        <h4>useEffect</h4>
        <p>The Effect Hook lets you perform side effects in function components</p>
        <p>If you’re familiar with React class life cycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
        <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. </p>
        <figure>
            <strong>
            useEffect(()=>console.log("useEffect"),[])</strong>
            {/* function FriendStatusWithCounter(props) {
                    const [count, setCount] = useState(0);
                    useEffect(() => {
                                    document.title = `You clicked ${count} times`;
                                });
                            
                                const [isOnline, setIsOnline] = useState(null);
                    useEffect(() => {
                                    function handleStatusChange(status) {
                                        setIsOnline(status.isOnline);
                                    }

                        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
                        return () => {
                                    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
                                };
                            });
                           
                    } */}
        </figure>
        <article className="d-xflex flex-wrap">
            {empData &&
                empData.map((element, key) => <ApiRecord props={element} key={key} />)}
        </article>
    </div>)
}

export default HookUseEffect;
