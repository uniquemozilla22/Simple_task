import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const KinoSingleComp = ({
  gameNumber,
  gameDate,
  bonus,
  drawNumbers,
  click,
}) => {
  return (
    <Container
      onClick={() => click({ gameNumber, gameDate, bonus, drawNumbers })}
    >
      <ContentContainer>
        <Text>
          <Title>Game</Title>
          {gameNumber}
        </Text>
        <Text>
          <Title> Date</Title>
          {`${gameDate.d}/${gameDate.m}/${gameDate.year}`}
        </Text>
      </ContentContainer>
      <NumberContainer>
        {drawNumbers.map((number, index) => (
          <Number>{number}</Number>
        ))}
      </NumberContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #02a8f4;
  padding: 1rem;
  border-radius: 5px;
  min-width: 300px;
  cursor: pointer;
  :hover {
    background-color: #375bcd;
    outline: 10px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  border-bottom: "1px solid #f8f8f8";
`;
const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Title = styled.span`
  color: #2b2b2b;
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

const Number = styled.div`
  background-color: #f8f8fa;
  width: fit-content;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 0 4px #2b2b2b;
  color: #2b2b2b;
`;

export default KinoSingleComp;
