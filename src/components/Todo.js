import React, { useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineClose,
} from "react-icons/ai";

import { deleteTodo, updateTodo } from "../hooks/api";

const Todo = ({ id, title, isChecked, onDelete = (f) => f }) => {
  const [todo, setTodo] = useState(title);
  const [tempTodo, setTempTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(isChecked);
  // 투두 리스트 수정모드를 제어하는 상태
  const [onEdit, setOnEdit] = useState(false);

  // Assignment5
  // 투두 리스트 수정모드 on/off 버튼
  const onClickEdit = () => {
    // 수정 모드일 때 입력값을 업데이트
    if (onEdit) {
      updateTodo(id, todo, isCompleted).then((result) => {
        if (result.error) {
          alert(result.message);
        }
        setTempTodo("");
        setOnEdit(false);
      });
    } else {
      setTempTodo(todo);
      setOnEdit(true);
    }
  };

  const onClickDelete = () => {
    // 수정 모드일 때 수정 내용을 취소
    if (onEdit) {
      setOnEdit(false);
      return;
    }
    // 투두 리스트 삭제
    deleteTodo(id);
    // 삭제한 결과를 TodoList 컴포넌트에 반영
    onDelete(id);
  };

  return (
    <section className="todo">
      <article className="item">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          disabled={!onEdit}
          onClick={() => setIsCompleted(!isCompleted)}
        />
        {onEdit ? (
          <input
            className="edit"
            type="text"
            placeholder={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        ) : (
          <p
            style={
              isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo}
          </p>
        )}
      </article>
      <article className="btn-container">
        <button className="btn-edit" onClick={onClickEdit}>
          {onEdit ? <AiOutlineCheck /> : <AiOutlineEdit />}
        </button>
        <button className="btn-delete" onClick={onClickDelete}>
          {onEdit ? <AiOutlineClose /> : <AiOutlineDelete />}
        </button>
      </article>
    </section>
  );
};

export default Todo;
