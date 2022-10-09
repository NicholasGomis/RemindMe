
import './App.css';
import ListItem from "../../components/ListItem"
import Input from '../../components/Input';
import {useState} from "react"

function App() {
  const [todos, setTodo] = useState('');

  function addToDo(item){
    let todoList = [...todos, item]
    setTodo(todoList)
    console.log(todoList)
  }

   function removeFromList(index) {
    const toDoList = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodo(toDoList);
  }




  return (
    <div className="App">
      <h1> RemindMe App</h1>
      <Input  handleClick={addToDo}/>
      <ListItem />
    </div>
  );
}

export default App;
