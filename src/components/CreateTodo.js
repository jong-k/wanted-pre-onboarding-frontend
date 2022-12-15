import { useState, useEffect, useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "../assets/main.scss";
import { createTodo } from "../hooks/api";
import { TodoContext } from "./TodoProvider";

const CreateTodo = () => {
  const { items, setItems } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (title !== "" && title.trim() !== "") setValidInput(true);
    else setValidInput(false);
  }, [title]);

  useEffect(() => {
    const newItems = items.length ? [...items] : [];
    setItems(newItems.concat(todo));
  }, [todo]);

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(title).then((result) => {
      if (!result.todo) {
        alert(result.message);
        return;
      }
      setTodo(result);
    });
    setTitle("");
  };

  return (
    <section className="addTodo">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="오전 7시 물 마시기"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={!validInput}>
          <AiOutlinePlusCircle />
        </button>
      </form>
    </section>
  );
};

export default CreateTodo;
