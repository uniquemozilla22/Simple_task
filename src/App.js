import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import fetch_data from "./Store/actions/fetch_data.action";
import KinoSingleComp from "./Components/KinoSingle.comp";
import styled from "styled-components";
import ModalComponent from "./Components/Modal.comp";

function App() {
  const kino = useSelector((state) => state.kino);
  const [showKino, setShowKino] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleShowKino = (data) => {
    setShowKino(data);
    setShowModal(true);
  };
  const handleHideKino = () => {
    setShowModal(false);
    setShowKino(null);
  };

  console.log(kino);
  const dispatch = useDispatch();

  useEffect(() => {
    // The api is not working
    dispatch(fetch_data());
  }, []);

  return (
    <Container>
      <h1>Kino</h1>
      <KinoContainer>
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} click={handleShowKino} />
        ))}
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} click={handleShowKino} />
        ))}
        {kino.map((kinoGame, index) => (
          <KinoSingleComp key={index} {...kinoGame} click={handleShowKino} />
        ))}
      </KinoContainer>
      <ModalComponent
        open={showModal}
        onClose={handleHideKino}
        data={showKino}
      />
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
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin: 0 1rem;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default App;
