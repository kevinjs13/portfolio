import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface NavigationProps {
  isActive: boolean;
}

export const PersonalPageContainer = styled.div`
  padding: 1em;
`;

export const NavigationItemsContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-right: 1em;
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
