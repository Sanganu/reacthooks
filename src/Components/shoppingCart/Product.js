import React,{useState} from "react";


const Product = ({item,addToCart}) => {
    const [quantity, setQuantity]=useState(0)
    
    return(<aside className="card border border-danger " style = {{width: '15rem'}}>
      <h6>Product {item}</h6>
      <p>
      <label>Enter Quantity</label>
      <input type="number" value={quantity} onChange={()=>setQuantity(quantity)}/></p>
      <br/>
      <button onClick={addToCart({item: item,quantity: quantity})}>Add To Cart</button>
    </aside>)
}

export default Product;
