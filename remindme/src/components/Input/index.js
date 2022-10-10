import React from 'react'
import {useRef} from 'react';

export default function Input({handleClick}) {
    const inputRef = useRef(null);


    return (
        <>
        <input  
        type="text"
        id="message"
        ref={inputRef}
        // onChange={(e) => handleClick(e.target.value)}
        // value={message}
    ></input> 
        <button onClick={(ref) => {handleClick(inputRef.current.value)}}>Add</button>
        </>
    )
}
