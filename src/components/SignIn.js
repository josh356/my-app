import React, { useState } from "react";

function SignIn(){
    const [name,handleName] = useState("")
    const [password,handlePassword] = useState("")


    function checkUser(checkName, checkPass){
        //this would check a list of users to find if the user has an account
        //for now it just checks for an example user
        if(checkName === "Smith" && checkPass === "admin"){
            localStorage.setItem("user", checkName)
            alert(`Signed in! Welcome ${checkName}!`)
        }
        else{
            alert("No user found or incorrect password entered.")
        }
    }

    return(
        !localStorage.getItem("user")?
            <div className = "centerBox">
                <form onSubmit = {() => checkUser(name,password)}>
                    <label>Name:
                        <input 
                            type="text" 
                            name="name" 
                            placeholder ="Name" 
                            value = {name} 
                            onChange = {(e) => handleName(e.target.value)}
                            />
                    </label>
                    
                    <label>Password:
                        <input 
                            type="text" 
                            name="password" 
                            placeholder = "Password" 
                            value = {password} 
                            onChange = {(e) => handlePassword(e.target.value)}
                        />
                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>
                <p>Please enter your username and password.</p>
            </div>:
            <div className = "centerBox">
                <p>Signed in</p>
            </div>
    )
}

export default SignIn