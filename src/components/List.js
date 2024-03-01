import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store";

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px 10px 10px;

  height: auto;
  width: 300px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 280px;
  border: 1px solid purple;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const Button = styled.button`
  width: 40px;
  height: 25px;
  border: none;
  border-radius: 5px;
  background-color: pink;
  color: white;
  margin-left: 20px;
`;

const List = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ListWrapper>
      {todos.map((todo) => (
        <Item key={todo.id}>
          {todo.text}
          <Button onClick={() => handleRemoveTodo(todo.id)}>삭제</Button>
        </Item>
      ))}
    </ListWrapper>
  );
};

export default List;
