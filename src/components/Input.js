import React,{useEffect,useRef} from 'react';
import './todoStyle.css';
function TodoForm({ inputValue, handleInputChange, handleAddTodo }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        className="input-text"
      />
      <button onClick={handleAddTodo} className="input-text">
        Add
      </button>
    </div>
  );
}

export default TodoForm;
