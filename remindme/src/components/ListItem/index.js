import React from 'react'
import '../ListItem/index.css'

 export default function ListItem({text, myIndex, removeFromList, theDate, thePriority}) {
    

    return (
      <div>
      <input
					type="checkbox"
					// id={todo.id}
					// onChange={() => toggleComplete(todo.id)}
					className="todolistitem-checkbox"
				/>

       <li>{text} {theDate} {thePriority}</li>
       <button onClick={() => removeFromList(myIndex)} className='btnRemove'>-</button>

</div>
    )
}
