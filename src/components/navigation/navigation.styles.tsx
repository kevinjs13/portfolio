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
  justify-items: flex-start;
  margin: 1em;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 5rem;
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
  ${(props) =>
    props.isActive &&
    css`
      background-color: red;
    `}
`;
