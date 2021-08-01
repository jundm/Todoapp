import React, { useState } from 'react';
import TodoInsert from './TodoInsert';
import './TodoTemplate.scss';

const TodoTemplate = ({ children, onInsert }) => {
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  return (
    <>
      <div className="TodoTemplate">
        <div className="app-title">Website todo</div>
        <div className="content">{children}</div>
        <div className="add-todo-button" onClick={onInsertToggle}>
          + New task
        </div>
      </div>
      {insertToggle && (
        <TodoInsert onInsertToggle={onInsertToggle} onInsert={onInsert} />
      )}
    </>
  );
};
export default TodoTemplate;
