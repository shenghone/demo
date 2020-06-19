import React from "react";
import styled from "styled-components";

const HorizontalBarWrapper = styled.div`
  width: 90%;
  grid-column: 2 / span 1;
  height: 30px;
  display: grid;
  grid-row: 2 / span 1;
  position: relative;
  justify-self: center;
  justify-self: center;
  grid-template-rows: 1fr;
  grid-template-columns: 20px 1fr 1fr 1fr 20px;
  > button {
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
    transition: all 1s;
    outline: none;
    box-shadow: -2px -2px 2px rgba(256, 256, 256, 0.3);
    :hover {
      opacity: 0.6;
      letter-spacing: 0.1rem;
    }
  }
  > button:nth-of-type(1) {
    grid-column: 2 / span 1;
  }
`;

export default ({ setTab }) => {
  return (
    <HorizontalBarWrapper>
      <button onClick={() => setTab("frontend")}>Front-end</button>
      <button onClick={() => setTab("backend")}>Back-end</button>
      <button onClick={() => setTab("email")}>Email app - Manchind</button>
    </HorizontalBarWrapper>
  );
};
