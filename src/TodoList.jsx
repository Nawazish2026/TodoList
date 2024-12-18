import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
  let [todos, setTodos] = useState([{task: "eat", id: uuidv4(), isDone: false}]);
  let [newTodo, setNewTodo] = useState("");

  let addTodo=()=>{
    setTodos([...todos,{task: newTodo, id: uuidv4(), isDone: false}]);
    setNewTodo.task("");
  }

  let updateTodo=(event)=>{
       setNewTodo(event.target.value);
       
  }
  function deleteTodo(id){
      
      setTodos(todos.filter((prevTodos)=>prevTodos.id != id));
  }

  function MarkAsDoneAll() {
    setTodos((todo) => {
      return todo.map((prevTodo) => {
        return { ...prevTodo, isDone: true };
      });
    });
  }
 
  function MarkAsDone(id) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id 
          ? { ...todo, isDone: true} 
          : todo
      )
      
    );
    console.log(todos.id);
  }
  
      
      
  
  return ( 
       <div>
        <input placeholder="Add Todo Tasks here"  onChange={updateTodo}></input>
        <br></br>
        <button onClick={addTodo}>Add</button>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <p>Todo List</p>
        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
            &nbsp;&nbsp;
            <button onClick={()=>MarkAsDone(todo.id)}>MarkAsDone</button>
            </li>
          ))}
          
        </ul>
        <button onClick={MarkAsDoneAll}>MarkAsDone All</button>
       </div>
  );
}