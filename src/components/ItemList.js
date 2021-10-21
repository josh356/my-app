import React from "react"
import { useParams } from "react-router"
import Item from "./Item"

function ItemList(props){
    function fillList(props,category){
        let ret = []
        props.catalogue.forEach((item, i) => {
            if(item.type === category || props.cart){

                return(
                    ret.push(<Item key = {i} id = {i} info = {item} cart = {props.cart}/>)
                )
            }
        })
        return(ret)
    }

    let {categoryId} = useParams()
    return(
        <div className = "itemListPage">
            <ul className = "itemList">
                {fillList(props,categoryId)}
            </ul>
        </div>
    )
}

export default ItemList 
