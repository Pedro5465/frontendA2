import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  box-shadow: 1px 1px 3px 2px #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--primarycolor);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: "Arial";
    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
`;

export const CardMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  img {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  select {
    width: 100%;
    max-width: 300px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    outline: 0;
    font-family: "Arial";
    font-style: italic;
  }
`;

export const NotAccount = styled.span`
  font-family: "Arial";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  display: flex;
  align-items: flex-end;
  margin-top: 5%;
  a {
    margin-left: 5px;
  }
`;
