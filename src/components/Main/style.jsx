import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

export const PageContent = styled.div`
  position: relative;
  margin-top: 8vh;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.fd};
  flex-wrap: wrap;
  gap: 20px;

  .filter {
    left: -250vw;
    top: 50px;
    transition: all 0.75s;
    position: ${(props) => props.position};
  }
  .active {
    left: 0;
  }
`;

export const ContainerFilter = styled.div`
  z-index: 998;
  width: ${(props) => props.wd || "100%"} !important;
  height: 60vh;
  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  box-shadow: -1px 3px 21px 0px rgba(0, 0, 0, 0.5);
  label {
    color: ${(props) => props.theme.colors.white} !important;
  }
  fieldset {
    border-color: ${(props) => props.theme.colors.white};
    max-width: 100%;
  }
  svg,
  input {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ContainerList = styled.div`
  max-width: 1140px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerProduct = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  img {
    max-width: 320px;
  }
`;

export const Product = styled.div`
  margin: 25px 10px;
  height: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  transition: all 300ms;
  :hover {
    transform: scale(1.1);
  }
  p {
    font-size: min(18px, 4.8vw);
    max-width: 300px;
    font-weight: 500;
  }
  div {
    max-height: 5vh;
    padding-bottom: 10px;
  }
`;

export const ButtonFilter = styled(Button)`
  margin-left: 10px !important;
  font-size: 18px !important;
  width: 20vw;
  height: 30px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  justify-content: center;
  display: ${(props) => props.display} !important;
  position: absolute;
  top: 0;
  left: 0;
  p {
    padding: 0 10px;
    color: ${(props) => props.theme.colors.blue};
    font-weight: 700;
  }
`;
