import React, {useEffect, useState}from "react";
import {Link, NavLink} from "react-router-dom"
//home button
//links to each page
// sign in / log out button
//cart


function Navbar(){
    const [cartCount, setCount] = useState(parseInt(localStorage.getItem("cartCountKey"),10))
    const user = localStorage.getItem("user")
    useEffect(() => {
        setCount(() => (parseInt(localStorage.getItem("cartCountKey"),10)) || 0)
    }, [])

    function signOut(){
        localStorage.setItem("user", "")
        window.location.reload()
    }

    function cartLimit(){
        let ret = ""
        if(cartCount > 99){
            ret = "99+"
        }
        else{
            ret = cartCount
        }
        return ret
    }
    
    return (
        <div className = "navbar">
            <div className = "home"><Link to = "/"><img src = "assets/images/home.jpg" alt = ""/></Link></div>
            <div className = "navCenter">
                <div className = "page"><NavLink to = "/Cats" activeClassName = "selected">Cats</NavLink></div>
                <div className = "page"><NavLink to = "/Toys" activeClassName = "selected">Toys</NavLink></div>
                <div className = "page"><NavLink to = "/Beds" activeClassName = "selected">Beds</NavLink></div>
                <div className = "page"><NavLink to = "/Food" activeClassName = "selected">Food</NavLink></div>
            </div>
            <div className = "navRight">
                <div className = "page">
                        {localStorage.getItem("user")? 
                            <div className = "signIn">
                                <p>{`Hi, ${user}`}</p>
                                <button onClick = {() => signOut()}>Sign Out</button>
                            </div>:
                            <div className = "signIn">
                                <NavLink to = "/SignIn" activeClassName = "selected">Sign in </NavLink>
                            </div>
                        }
                </div>
                <div className = "cart">
                    <Link to = "/Cart">
                        {
                            cartCount === 0 ? null: 
                            <span className = "subCart">
                                <span className = "cartCircle">
                                    <img src = "assets/images/redcircle.jpg" alt = ""/>
                                </span>
                                <span className = "cartCount"> 
                                    {cartLimit()}
                                </span>
                            </span>
                            
                        }
                        <img src = "assets/images/cart.jpg" alt = ""/>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar