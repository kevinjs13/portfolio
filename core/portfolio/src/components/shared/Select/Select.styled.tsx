import styled from "styled-components";

export const SelectContainer = styled.select`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.color.primary};
  padding: 0 1rem;
  height: 25px;
  margin: 0 1rem;
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    border: 2px solid ${(props) => props.theme.color.primary};
    padding: 0 1rem;
  }
`;
