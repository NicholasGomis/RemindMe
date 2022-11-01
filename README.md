# RemindMe
<div align="center">


</div>
<h1 align="center">



  Remind Me ✅ (Work in Progress)
</h1>

## Purpose
The purpose of this project is to create a Reminder app that allows user to keep in track of activities by adding the date and priority. 



## MVP:
- To be able to add the reminder.
- To be able to delete the reminder.
- To be able to show the reminder.

## Beyond MVP:
- Add the date.
- Add priority
- Add uncheck and check button.
- cross the reminder
- Use local storage to temporary store the data
- Deploy


## Wireframes
Low-Fidelity:
High-Fidelity:




## Outcomes
- Breaking down components and make components tree
- Seperate each components.
- useState hook
- React props
- Immutability object / array.
- Array keys.




## Technologies
- React.Js
- CSS 
- Jsx 
- Javascript 



## Requirements

### Component Tree

- App
  - Input
    - text input          
    - add to list button 
  - List                  
    - List Item
      - item text         
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
        ...

### App

_state_

- list of to dos X

_behaviour_

- add item to list X
- remove item from list X
- render an InputX and List 

### Input

_state_

- text

_props_

- add function

_behaviour_

- render an input field and a button
- change of input text will update state of this component
- button click will call the add function from props with value of input

### List

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a `ul`

### List item

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index


## To-Do Completed:

- [x] Initial styling (MVP)
- [x] Pass all user inputs and displaying


## To-Do:

- Fix bug when user do not input anything will add todo
- Styling beyond MVP.
- Replace current input field (date) with Calendar built in react component 


