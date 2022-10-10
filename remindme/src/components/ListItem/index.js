import React from 'react'

 export default function ListItem({text, myIndex, removeFromList}) {
    

    return (
      <div>
       <li>{text}</li>
       <button onClick={() => removeFromList(myIndex)}>Delete</button>

</div>
    )
}
