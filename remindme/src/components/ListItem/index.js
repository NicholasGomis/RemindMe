import React from 'react'

 export default function ListItem({text, myIndex, removeFromList, theDate, thePriority}) {
    

    return (
      <div>
       <li>{text} {theDate} {thePriority}</li>
       <button onClick={() => removeFromList(myIndex)}>Delete</button>

</div>
    )
}
