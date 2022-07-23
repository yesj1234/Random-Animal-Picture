import React, { useState } from "react";
import Animal from "./routes/Animal";
import Navigation from "./components/Navigation";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <PictureContainer>
        <Animal></Animal>
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
