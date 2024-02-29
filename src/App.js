import styled from "styled-components";
import Container from "./components/Container";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Center>
        <Container />
      </Center>
    </div>
  );
}

export default App;
