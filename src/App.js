import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import Wrapper from "./components/GeneralWrapper/Wrapper";
import ContainerTodo from "./components/containerTodo/ContainerTodo";
import FormTodo from "./components/FormTodo/FormTodo";
import ContainerTasks from "./components/ContainerTasks/ContainerTasks";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.todo);
  return (
    <>
      <Wrapper>
        <ContainerTodo>
          <FormTodo tasks={state}></FormTodo>
          <ContainerTasks tasks={state}></ContainerTasks>
        </ContainerTodo>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
