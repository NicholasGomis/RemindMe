
Start the project with npx create-react-app nameoftheapp
Check the src and create a components folder.
Plan the app according to the component tree by creating seperate components for each element.


After achieved MVP.

We want to allow user to input date 
We want to allow user to input priority.
- To handle multiple input from user and change its state we need to set a main state which handle a object
For example setState={item}  
item {todoname: practice coding, date: 12/12/12 priority: high}

- We require to set new states for date and priority seperately as well for the name of the todo.

- Once seperated it has to update the states.
- We create a function to submit all the changes from the states by adding key value pair, the value will be the the current state itself.

