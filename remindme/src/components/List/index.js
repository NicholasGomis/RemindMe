import React from 'react'
import ListItem from '../../components/ListItem'
export default function List({toDoList, handleDelete}) {
    
    return (
       <>

               {
toDoList.map( (item, index) => <ListItem text={item} key={index} myIndex={index}  removeFromList={handleDelete}/>
        )}
       </>
    
    )
}
