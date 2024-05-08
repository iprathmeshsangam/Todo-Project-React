/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  //parameter : todo
  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev ,{id : Date.now(),...todo}]);
  }

  //Parameter : id , todo
  const updateTodo = (id, todo)=>{
    //Map through the An Object of Todo.
    //If prevId === Id then todo otherwise PrevTodo
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id) === id ? todo : prevTodo));
  }

  //Parameter : id
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
  }

  //Toggle Compete: id
  const toggleComplete = (id)=>{
    // console.log("This is Toggle in App.jsx",id);
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo))
  }

  useEffect(()=>{ 
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
        setTodos(todos);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo ,updateTodo, deleteTodo ,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-4xl font-bold text-center mb-8 mt-2">Todo</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>
            ))}
          </div>
        </div>
      </div>

    </TodoContextProvider>
  )
}

export default App
