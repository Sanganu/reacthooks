import React, { useState } from "react";
import list from "./items.json";
import Product from "./Product.js";


const Catalog = () => {
    const [cart, updateCart] = useState([{}])

    const addToCart = (item) => {
        let found = false
        let ind = -1
        let tcart = cart
        for (let element = 0; element < tcart.length; element++) {
            if (tcart[element].item === item.item) {
                found = true
                ind = element
            }
        }
        if (found) {
            tcart[ind].quantity = item.quantity
        } else {
            tcart.push(item)
        }
        updateCart(tcart)
       console.log(cart)
    }

    return (<main className="container border border-primary text-center">  
         <section className="container d-flex justify-content-evenly">
         {cart.map((element,key) =>
             (<li key={key}>{element.item} --- {element.quantity}</li>)) }
         </section>
        {list.map((item, key) => {
            return (<section className="container d-flex flex-wrap  justify-content-evenly m-5 p-5">
                <Product item={item} key={key} addToCart={addToCart} />
            </section>)
        })}
    </main>)
}



export default Catalog;
