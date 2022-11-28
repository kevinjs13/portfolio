import styled from "styled-components";

export const CardLink = styled.a`
  all: unset;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  svg {
    height: 25px;
    width: 25px;
  }
  span {
    padding-left: 0.5rem;
  }

  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
