# RemindMe
<div align="center">
    <img alt="School of Code" src="./images/soc-logo.png" width="60" />
</div>
<h1 align="center">

    <img alt="School of Code" src="https://user-images.githubusercontent.com/93223563/180575674-cecbfa6f-7e22-41ac-b422-b9dc1406ef51.png" width="60" />

  Remind Me ✅
</h1>

## Task


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
