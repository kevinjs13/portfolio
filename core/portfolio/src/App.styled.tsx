import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Karla, sans-serif;
  color: ${(props) => props.theme.color.primary};
  position: relative;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;
