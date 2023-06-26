import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 45px;
  max-width: 300px;
  padding: 5px;
  background: 0;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: 0.5s linear;
  margin-top: 10px;
  &:hover {
    border-color: #f7f9ff;
    background: #f7f9ff;
  }
`;

export const Icon = styled.img`
  width: 30px;
`;

export const Text = styled.span`
  color: #3c4043;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
