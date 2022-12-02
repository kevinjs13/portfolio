import breakpoints from "../../../styles/breakpoints.styles";
import styled, { keyframes } from "styled-components";

export const slideFromRight = keyframes`
 from { margin-left: 1em }
  to { margin-left: 0 }
`;

export const SocialsContainer = styled.ul`
  all: unset;
  margin-top: 1em;
  display: flex;
  gap: 3em;
  flex-direction: unset;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.large} {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

export const SocialsItem = styled.li`
  list-style: none;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  text-align: center;
  animation: 0.5s ${slideFromRight};
`;

export const SocialsItemLink = styled.a`
  all: unset;
  cursor: pointer;
  text-decoration: none;

  svg {
    padding: 1em;
    height: 3rem;
    width: 3rem;
    color: ${(props) => props.theme.color.primary};
    &:hover {
      color: ${(props) => props.theme.color.secondary};
      background-color: ${(props) => props.theme.color.primary};
      border-radius: 50%;
    }
  }
`;
