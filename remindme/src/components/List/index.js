import React from 'react'
import ListItem from '../../components/ListItem'
export default function List({toDoList}) {
    
    return (
           <ul> 
         {
toDoList.map( (item, index) => <ListItem text={item} key={index}/>
           )}
       
           
           </ul> 
     
    )
}
