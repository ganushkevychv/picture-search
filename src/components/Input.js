import React, {useState} from 'react';

const Input = ({searchValueHandler}) => {

  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = (e) => {
    searchValueHandler(inputValue);
  }

  const onChangeHandler = (e) => {
      setInputValue(e.target.value)
  }

  const onKeyHandler = (e) => {
      if (e.code === 'Enter') {
          searchValueHandler(inputValue);
      }
  }

  return (
    <div>
      <input type="text"
             value={inputValue}
             onChange={onChangeHandler}
             onKeyPress={onKeyHandler}
      />
      <button onSubmit={onSubmitHandler}>search</button>
      </div>
  )
};
export default Input;