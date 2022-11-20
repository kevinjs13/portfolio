import styled, { css } from "styled-components";

interface NavigationProps {
  isActive: boolean;
}

export const NavigationContainer = styled.nav`
  background-color: aliceblue;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.a`
  all: unset;
  justify-items: flex-start;
  margin: 1em;
  cursor: pointer;
`;

export const Logo = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 2.5em;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-items: flex-end;
`;

export const NavigationItem = styled.li`
  list-style: none;
  margin: 1em;
`;

export const NavigationLink = styled.a<NavigationProps>`
  all: unset;
  cursor: pointer;
  border: 2px solid #000;
  padding: 0 1em;
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
