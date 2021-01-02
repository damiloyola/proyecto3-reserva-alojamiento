import React from "react";
import styled from "styled-components";
import { color, size } from "../misc/Constants";

const ErrorContainer = styled.div`
  padding: 5%;
  font-size: ${size.xl};
  background-color: ${color.dark};
  text-align: center;
  color: ${color.light};
`;

const Error = (props) => {
  return (
    <ErrorContainer>
      <p>{props.e}</p>
    </ErrorContainer>
  );
};

export default Error;
