import React from "react";
import Category from "./Category";
import "./App.css"





function Menu(props){
    function createCategories(props){
        return(
            props.categories.map((cat) => {
                return(
                    <Category 
                        key = {cat.key}
                        image = {cat.image}
                        name = {cat.name}
                    />  
                )
            })
        )
    }
    
    function groupCategories(categories){
        let ret = []
        for(let i = 0; i<categories.length; i++){
            if(i<categories.length-1){
                ret.push(
                    <div className = "menuRow" key = {categories[i].key}>
                        {categories[i]}{categories[i+1]}
                    </div>
                )
                i++
            }
            else{
                ret.push(
                    <div className = "menuRow" key = {categories[i].key}>
                        {categories[i]}
                    </div>
                )
            }
        }
        return ret
    }

    const menuCategories = createCategories(props)
    const groupedCategories = groupCategories(menuCategories)
    return(
        <div>
            {groupedCategories}
        </div>
    )
}

export default Menu