import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../../types";

const InputForm = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  padding-left: 1rem;
`;
const FormCont = styled.form`
  width: 90%;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ButtonTest = styled.button`
  min-width: 6rem;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  background-color: #4444e9;
  color: white;
  cursor: pointer;
`;
const FormTodo = ({ tasks }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") {
      e.target.task.value = "";
      return alert("ingresa una tarea");
    }
    if (tasks.some((task) => task.text === e.target.task.value)) {
      e.target.task.value = "";
      return alert("esta tarea ya existe");
    }
    dispatch({ type: ADD_TASK, text: e.target.task.value.trim() });
    e.target.task.value = "";
  };
  return (
    <FormCont onSubmit={handleSubmit}>
      <InputForm type="text" name="task" placeholder="Ingresa una tarea..." />
      <ButtonTest>Save</ButtonTest>
      <ButtonTest
        type="button"
        onClick={() => dispatch({ type: "DELETE_ALL" })}
      >
        Delete all
      </ButtonTest>
    </FormCont>
  );
};

export default FormTodo;
