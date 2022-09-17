import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import fetch_data from "./Store/actions/fetch_data.action";
import KinoSingleComp from "./Components/KinoSingle.comp";
import styled from "styled-components";

function App() {
  const kino = useSelector((state) => state.kino);
  console.log(kino);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_data());
  }, []);

  return (
    <Container>
      <h1>Kino</h1>
      <KinoContainer>
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} />
        ))}
      </KinoContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
  color: #fff;
`;
const KinoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin: 0 1rem;
`;

export default App;
