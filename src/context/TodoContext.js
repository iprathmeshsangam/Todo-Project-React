/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // todos : [{} , {} , {} , {}]
    //We Will store all the task in an Array 
    todos : [
        {
            id: 1,
            todo : "Todo Msg",
            completed : false
        }
    ], 
    addTodo : (todo)=>{},
    updateTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}
    // This will be the Structure of an Array and Object of Todos. 
});

export const useTodo = () => {
    return useContext(TodoContext);
}


export const TodoContextProvider  = TodoContext.Provider