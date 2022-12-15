import React, { createContext, useEffect, useState } from "react";
import { getTodos } from "../hooks/api";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      setItems(res);
    });
  }, [items.length]);

  return (
    <TodoContext.Provider value={{ items, setItems }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
