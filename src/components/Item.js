import React from "react"

function Item(props){
    //console.log(props)
    function addToCart(){
        //Update count, if it doesnt exist set to 1
        const cartCount = parseInt(localStorage.getItem("cartCountKey"),10) || 0
        localStorage.setItem("cartCountKey", cartCount+1);

        //Get the cart
        let currentCart = []
        if(localStorage.getItem("cartItemsKey")){
            currentCart=(JSON.parse(localStorage.getItem("cartItemsKey")))
        }
        //Add to cart and refresh
        currentCart.push(props.info)
        localStorage.setItem("cartItemsKey", JSON.stringify(currentCart))
        window.location.reload()
        
    }

    function removeFromCart(){
        //Update count
        const cartCount = parseInt(localStorage.getItem("cartCountKey"),10)
        localStorage.setItem("cartCountKey", cartCount-1);

        //Get the cart
        let currentCart = (JSON.parse(localStorage.getItem("cartItemsKey")))

        //Remove the item based on the position it was displayed
        currentCart = currentCart.filter((toRemove, index) => {
            return index !== props.id
        })

       //Update the cart and refresh, dealing with the last item appropiately
       console.log(currentCart)
       if(currentCart.length === 0){
           localStorage.removeItem("cartItemsKey")
       }
       else{
           localStorage.setItem("cartItemsKey", JSON.stringify(currentCart))
       }
       window.location.reload()
    }

    function generateButton(cart){
        //determines if a remove button is needed (only in the cart page)
        return cart ? 
        <div>
            <button onClick = {() => addToCart()}>Add to cart</button>
            <button onClick = {() => removeFromCart()}>Remove from cart</button>
        </div>:
        <button onClick = {() => addToCart()}>Add to cart</button>

    }
    

    return(
        <div className = "item">
            <div className = "leftProd">
                <img src = {props.info.image} alt=""/>
            </div>

            <div className = "centerProd">
                <p>{props.info.description}</p>
            </div>
        
            <div className = "rightProd">
                <div className = "purchaseBtn">
                    <p>{props.info.price}</p>
                    {generateButton(props.cart)}
                </div>
            </div>
        </div>
    )
}

export default Item

