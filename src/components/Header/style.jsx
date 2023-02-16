import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  box-shadow: -1px 3px 21px 0px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.theme.colors.blue};
`;

export const Navbar = styled.nav`
  max-width: 1440px;
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  padding: 15px 20px;
  img {
    height: 50px;
  }
`;
