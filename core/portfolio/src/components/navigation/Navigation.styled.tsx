import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints.styles";

interface NavigationProps {
  isActive: boolean;
}

export const NavigationContainer = styled.nav`
  height: 120px;
  background-color: #fff;
`;

export const NavigationWrapper = styled.nav`
  width: 100%;
  padding: 0.5em;
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 2px solid #000;
  @media ${breakpoints.medium} {
    flex-direction: row;
  }
`;

export const LogoContainer = styled(NavLink)`
  all: unset;
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;
  @media ${breakpoints.medium} {
    text-align: unset;
    flex: 1;
  }
`;

export const Logo = styled.span`
  font-family: "Staatliches", sans-serif;
  font-size: 2.5rem;
`;

export const NavigationList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-right: 1em;
  @media ${breakpoints.medium} {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;

export const NavigationLink = styled(NavLink)<NavigationProps>`
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

export const FileLink = styled.a<NavigationProps>`
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
