import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../types";

export const initialState = [];
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { text: action.text, completed: false }];
    case DELETE_TASK:
      return [...state].filter((task) => task.text !== action.id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        return task.text === action.id
          ? { ...task, completed: !task.completed }
          : task;
      });
    default:
      return (state = initialState);
  }
};