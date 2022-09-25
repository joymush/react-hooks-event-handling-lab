// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
    let handleBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }
    let handleFocus = () => {
        console.log("Good!")
    }
    return(
        <button 
        onFocus = {handleFocus}
        onBlur = {handleBlur}
        >Eyes on me</button>
    )
}

export default EyesOnMe
