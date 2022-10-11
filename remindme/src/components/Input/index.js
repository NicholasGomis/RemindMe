import React from 'react'
import {useRef} from 'react';
import { useState } from 'react';

export default function Input({handleClick}) {
    const inputRef = useRef(null);
    const [toDosName, setTodosName ] = useState("")
    const [toDosDate, setTodosDate] = useState("")
    const [toDosPriority, setTodosPriority] = useState("")

    function createTodos(e){
        setTodosName(e.target.value)
        
    }

    function createNewDate(e){
        setTodosDate(e.target.value)
    }

    function createNewPriority(e){
        setTodosPriority(e.target.value)
    }

    function toSubmit(){
        handleClick({
            "todosname": toDosName,
            "todosdate": toDosDate,
            "todospriority": toDosPriority
        })

    }



    return (
        <>
        <input  
        type="text"
        id="message"
        ref={inputRef}
        placeholder="name"
        // onChange={(e) => handleClick(e.target.value)}
        onChange={createTodos}
        // value={message}
    ></input>
    <input  
        type="text"
        id="message"
        ref={inputRef}
        placeholder="dd/mm/yyyy"
        // onChange={(e) => handleClick(e.target.value)}
        onChange={createNewDate}
        // value={message}
    ></input>  

       <select name="Priority" onChange = {createNewPriority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
  
        </select>
        {/* <button onClick={(ref) => {handleClick(inputRef.current.value)}}>Add</button> */}
        <button onClick={toSubmit}>toSubmit</button>
        </>
    )
}
