import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, changeInput, resetInputValue } from "../store";

const InputWrapper = styled.div`
  border: none;
  border-radius: 5px;

  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 40px;
  width: 250px;
  border: 1px solid purple;
  border-radius: 7px;
  margin-right: 7px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  height: 44px;
  width: 55px;
  border: none;
  border-radius: 7px;
  background-color: skyblue;
  color: white;
`;

const AddInput = () => {
  const inputValue = useSelector((state) => state.todo.inputValue);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      dispatch(addTodo());
      dispatch(resetInputValue());
    }
  };

  return (
    <div>
      <InputWrapper>
        <Input
          type="text"
          placeholder="할 일을 작성해주세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button onClick={handleAddTodo}>추가</Button>
      </InputWrapper>
    </div>
  );
};

export default AddInput;
