import React from 'react'

 export default function ListItem({text, myIndex, removeFromList, theDate}) {
    

    return (
      <div>
       <li>{text} {theDate}</li>
       <button onClick={() => removeFromList(myIndex)}>Delete</button>

</div>
    )
}
