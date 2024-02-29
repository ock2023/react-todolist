import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], nextId: 1, inputValue: "" },
  reducers: {
    changeInput(state, action) {
      state.inputValue = action.payload;
    },
    addTodo(state) {
      if (state.inputValue.trim() === "") {
        alert("할 일을 작성해주세요.");
        return;
      }

      if (state.inputValue.length > 10) {
        alert("10자 미만으로 작성해주세요.");
        return;
      }

      state.todos.push({
        id: state.nextId,
        text: state.inputValue,
      });

      state.nextId++;
      state.inputValue = "";
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    resetInputValue(state) {
      state.inputValue = "";
    },
  },
});

export const { changeInput, addTodo, removeTodo, resetInputValue } =
  todoSlice.actions;

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
