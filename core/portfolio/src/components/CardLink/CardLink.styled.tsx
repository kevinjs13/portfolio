import styled, { keyframes, css } from "styled-components";

interface CardLinkProps {
  active: boolean;
}

export const CardLink = styled.a<CardLinkProps>`
  all: unset;
  position: relative;
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
    ${(props) =>
      !props.active &&
      css`
        cursor: not-allowed;
        &::after {
          content: "In Progress";
          background-color: ${(props) =>
            props.theme.color.background_color.link.list.hover};
          position: absolute;
          width: 90%;
          height: 60%;
          text-align: center;
          padding-top: 0.3rem;
        }
      `};
  }
`;
