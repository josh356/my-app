import React, { useEffect } from "react"
import { useHistory } from "react-router"
//import CartList from "./CartList"
import ItemList from "./ItemList"

function Cart(){
    let history = useHistory()
    //makes sure the cart has items before parsing as JSON.parse() does not like empty strings
    const cartItems = localStorage.getItem("cartItemsKey")? JSON.parse(localStorage.getItem("cartItemsKey")) : ""
    const count = parseInt(localStorage.getItem("cartCountKey"),10) || 0

    useEffect(()=>{

    },[])

    function calcTotalPrice(items){
        console.log(items)
        const itemPrices = items.map((item) => (item.price))
        return (itemPrices.reduce((prevPrice, curPrice) => prevPrice+curPrice)).toFixed(2)
    }
    function numberOfItems(){
        let ret = `${count} item`
        return (count ===  1) ?  ret: (ret+"s")
    }

    function handlePurchase(){
        history.push("/Confirmation")
    }

    return cartItems?
        (<div className = "filledCart">
            <ItemList catalogue={cartItems} cart = {true}/>
            <div className = "cartPurchase">
                <p>{`Subtotal: ${numberOfItems()}, ${calcTotalPrice(cartItems)}`}</p>
                <button onClick = {() => handlePurchase()}>Complete Purchase</button>
            </div>

        </div>): 
        <div className = "emptyCart">
            <p>Your cart is empty!</p>
        </div>
}

export default Cart