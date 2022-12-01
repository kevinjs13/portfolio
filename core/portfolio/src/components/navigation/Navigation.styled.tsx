import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import breakpoints from "../../styles/breakpoints.styles";

interface NavigationProps {
  isActive: boolean;
}

export const NavigationContainer = styled.nav`
  height: 150px;
  @media ${breakpoints.medium} {
    height: 120px;
  }
  background-color: ${(props) => props.theme.color.secondary};
`;

export const NavigationWrapper = styled.nav`
  width: 100%;
  padding: 0.5em;
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.secondary};
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
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
  border: 2px solid ${(props) => props.theme.color.border.link.nav.default};
  padding: 0 1rem;
  background-color: ${(props) =>
    props.theme.color.background_color.link.nav.default};
  color: ${(props) => props.theme.color.text.link.nav.default};

  &:hover {
    background-color: ${(props) =>
      props.theme.color.background_color.link.nav.hover};
    color: ${(props) => props.theme.color.text.link.nav.hover};
    border: 2px solid ${(props) => props.theme.color.border.link.nav.hover};
  }

  ${(props) =>
    props.isActive &&
    css`
      &:hover {
        background-color: ${(props) =>
          props.theme.color.background_color.link.nav.active};
        color: ${(props) => props.theme.color.text.link.nav.active};
        border: 2px solid ${(props) => props.theme.color.border.link.nav.active};
      }
      background-color: ${(props) =>
        props.theme.color.background_color.link.nav.active};
      color: ${(props) => props.theme.color.text.link.nav.active};
      border: 2px solid ${(props) => props.theme.color.border.link.nav.active};
    `}
`;

export const FileLink = NavigationLink.withComponent("a");
