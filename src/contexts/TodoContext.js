import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],

  addtodo:(todo)=>{},
  updatetodo:(id,todotitle)=>{},
  deletetodo:(id)=>{},
  
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
