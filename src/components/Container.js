import React from "react";
import styled from "styled-components";
import AddInput from "./AddInput";
import List from "./List";

const Border = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid purple;
  border-radius: 7px;
  width: 400px;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: purple;
`;

const Container = () => {
  return (
    <div>
      <Border>
        <Title>To Do List</Title>
        <AddInput />
        <List />
      </Border>
    </div>
  );
};

export default Container;
