import React, {useState,useEffect } from "react";
import Marquee from "react-fast-marquee"
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status]);

  const filterHandler =() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
  }
  return (
    <div className="App">
      <div>
        <Marquee className='blink'>
       <div className="todo">
      All the very Best for your exams 2nd Years...
        </div>
        </Marquee>
      </div>
     <Form inputText={inputText}
      todos={todos}
       setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
         />
     <TodoList 
      filteredTodos={filteredTodos}
     setTodos={setTodos} 
     todos={todos} />
    </div>
  );
}

export default App;
