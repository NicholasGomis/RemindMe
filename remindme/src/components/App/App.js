
import './App.css';
import ListItem from "../../components/ListItem"
import {useState} from "react"

function App() {
  const [todos, setTodo] = useState('')
  return (
    <div className="App">
      <h1> Hello World</h1>
      <ListItem />
    </div>
  );
}

export default App;
