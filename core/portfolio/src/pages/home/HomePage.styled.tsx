import styled from "styled-components";
import breakpoints from "../../styles/breakpoints.styles";

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  height: 700px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${breakpoints.medium} {
    gap: 1rem;
  }
  background-image: url(${(props) => props.theme.images.background_image});
  background-size: 10em 10em;
  background-position: right 1em bottom 1em;
  background-repeat: no-repeat;
`;
export const ProfileImageContainer = styled.div`
  text-align: center;
  align-self: center;
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
