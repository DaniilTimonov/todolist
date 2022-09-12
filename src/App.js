import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteTodo = (text) => {
const NewTodos = todos.filter((todo) =>{
  return todo !== text;
});
setTodos(NewTodos);
  };




  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput todo= {todo} setTodo = {setTodo} addTodo = {addTodo} />
      <TodoList list={todos} remove = {deleteTodo} />
    </div>
  );
};

export default App;