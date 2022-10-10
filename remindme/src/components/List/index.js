import React from 'react'
import ListItem from '../../components/ListItem'
export default function List({toDoList}) {
    
    return (
       <>

               {
toDoList.map( (item, index) => <ListItem text={item} key={index}/>
        )}
       </>
    
    )
}
