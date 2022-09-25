// Code Keypad Component Here
import React from "react";

function Keypad (){
    let handleKeyPad = (e) => {
        return(
            console.log("Entering password...")
        )
    }
    return (
        <div>
            <input type="password" onChange={handleKeyPad}/>
        </div>
    )
}

export default Keypad;