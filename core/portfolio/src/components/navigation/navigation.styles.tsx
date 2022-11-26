import styled, { css } from "styled-components";

interface NavigationProps {
  isActive: boolean;
}

export const NavigationContainer = styled.nav`
  background-color: aliceblue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.a`
  all: unset;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Logo = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 2.5rem;
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;

export const NavigationLink = styled.a<NavigationProps>`
  all: unset;
  cursor: pointer;
  border: 2px solid #000;
  padding: 0 1rem;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #000;
      color: #fff;
    `}
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
