import React from 'react'

export default function Input({handleClick}) {
    

    return (
        <>
        <input  
        type="text"
        id="message"
        // name="message"
        onChange={(e) => handleClick(e.target.value)}
        // value={message}
    ></input>  
        </>
    )
}
