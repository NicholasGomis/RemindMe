import React from 'react'
import '../ListItem/index.css'

 export default function ListItem({text, myIndex, removeFromList, theDate, thePriority}) {
    

    return (
      <div>
       <li>{text} {theDate} {thePriority}</li>
       <button onClick={() => removeFromList(myIndex)} className='btnRemove'>-</button>

</div>
    )
}
