import styled from "styled-components";

export const CardLink = styled.a`
  all: unset;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.theme.color.background_color.link.list.default};
  color: ${(props) => props.theme.color.text.link.list.default};
  svg {
    height: 25px;
    width: 25px;
  }
  span {
    padding-left: 0.5rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.color.background_color.link.list.hover};
    color: ${(props) => props.theme.color.text.link.list.hover};
    cursor: pointer;
  }
`;
