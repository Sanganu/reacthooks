import React from "react";

const Item = (props)=> {
    console.log("Props",props)
    return(<div>
        <h3>Item details</h3>
        {props}
        {/* <p>{props.title}</p>
        <p>{props.status}</p> */}
    </div>)
}


export default Item;
