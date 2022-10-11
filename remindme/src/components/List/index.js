import React from 'react'
import ListItem from '../../components/ListItem'
export default function List({toDoList, handleDelete}) {
    
    return (
       <>

               {
toDoList.map( (item, index) => <ListItem text={item.todosname} key={index} myIndex={index}  removeFromList={handleDelete} theDate = {item.todosdate} thePriority = {item.todospriority}/>
        )}
       </>
    
    )
}
