
import './App.css';
import ListItem from "../../components/ListItem"
import Input from '../../components/Input';
import List from '../../components/List/'
import {useState} from "react"


function App() {
  const [todos, setTodo] = useState([]);

  function addToDo(item){
    if (item.todosdate === '' || item.todosname === '' || item.todopriority === 'Low'){
      return null;
    } else {
     let todoList = [...todos, item]
    setTodo(todoList)
    console.log(`lol`,todoList)
    
  }}

   function removeFromList(index) {
    const toDoList = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodo(toDoList);
  }




  return (
    <div className="App">
      <h1> What do I need to remind you?</h1>
      <Input  handleClick={addToDo}/>
      <List toDoList={todos} handleDelete={removeFromList}/>

    </div>
  );
}

export default App;
