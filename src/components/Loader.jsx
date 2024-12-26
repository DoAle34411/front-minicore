import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  margin: 20px auto;
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid blue; /* Blue color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingSpinner() {
  return <Loader />;
}