import React from "react";
import Dog from "./components/Dog";
import Navigation from "./components/Navigation";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <PictureContainer>
        <Dog></Dog>
      </PictureContainer>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const PictureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(15deg, blue, pink);
`;
