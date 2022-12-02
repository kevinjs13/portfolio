import styled, { keyframes } from "styled-components";
import breakpoints from "../../styles/breakpoints.styles";

export const slideFromLeft = keyframes`
 from { margin-right: 5em }
  to { margin-right: 0 }
`;

export const slideFromRight = keyframes`
 from { margin-left: 5em }
  to { margin-left: 0 }
`;

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  height: 700px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ProfileImageContainer = styled.div`
  text-align: center;
  align-self: center;
  animation: 1s ${slideFromLeft};
  /* background-image: url(${(props) => props.theme.images.background_image});
  background-size: 3em 3em;
  background-position: right 1em top 1em;
  background-repeat: no-repeat; */
`;
export const ProfileImage = styled.img`
  height: 80vw;
  width: 80vw;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.primary};

  @media ${breakpoints.medium} {
    height: 300px;
    width: 300px;
  }
  @media ${breakpoints.large} {
    height: 450px;
    width: 450px;
  }
`;
export const SubtextContainer = styled.span`
  text-align: center;
  padding: 1em;
  @media ${breakpoints.xlarge} {
    text-align: right;
    padding: 5em;
  }
  animation: 1s ${slideFromRight};
`;

export const Subtext = styled.div`
  margin-bottom: 1em;
  font-size: 2rem;
  @media ${breakpoints.medium} {
    font-size: 2.5rem;
  }
  @media ${breakpoints.large} {
    font-size: 2rem;
  }
`;

export const BoldText = styled.span`
  font-family: "KarlaBold", sans-serif;
  font-weight: 600;
`;

export const Link = styled.a`
  all: unset;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;
