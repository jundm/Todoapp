import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAddCircle } from 'react-icons/md';

const TodoInsert = ({ onInsertToggle, onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  }, []);
  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
    onInsertToggle();
  });
  return (
    <div>
      <div className="background" onClick={onInsertToggle} />
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="What's Todo?" value={value} onChange={onChange} />
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
